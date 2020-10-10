import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: "AIzaSyAhykS3Spci8jC10vqjEgH_k5g40ciG1t4",
	authDomain: "farmers-db.firebaseapp.com",
	databaseURL: "https://farmers-db.firebaseio.com",
	projectId: "farmers-db",
	storageBucket: "farmers-db.appspot.com",
	messagingSenderId: "249695488238",
	appId: "1:249695488238:web:92ccf8542676237589cbff",
	measurementId: "G-8CSMG7VZCB"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if(!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if(!snapShot.exists) {
		const { displayName, email, photoURL, emailVerified, phoneNumber } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				photoURL,
				phoneNumber,
				emailVerified,
				...additionalData
			})
		} catch (error) {
			console.log('error creating user', error.message)
		}
	}

	return userRef;
}

export const createCompanyProfileDocument = async (companyProfile, currentUser, additionalData) => {
	if(!companyProfile || !currentUser) return;
	
	const companyRef = firestore.collection('companies').doc()
	const companySnapShot = await companyRef.get();
	const userCreator = await currentUser.id;
	//console.log('companySnapshot', userCreator);	
	if(!companySnapShot.exists) {
		const { companyName, country, location, address, logo } = companyProfile;
		const companyCreatedAt = new Date();
		const userRef =  firestore.collection('users').doc(userCreator);
		userRef.update({
			company: firebase.firestore.FieldValue.arrayUnion(companySnapShot.id)
		});

		try {
			const users = {}
			users[userCreator] = 'admin';

			await companyRef.set({
				companyName,
				country,
				location,
				address,
				logo,
				companyCreatedAt,
				users,
				...additionalData
			})	
		} catch (error) {
			console.log('error creating company', error.message)
		}		
	}
	return companyRef; 
}

export const updateImageInDocument = async (collection, docId, route, url, additionalData) => {
	if(!collection || !docId || !route ) return;
	console.log('fileupload', url)
	const docRef = firestore.doc(`${collection}/${docId}`)
	const imageDocUpdate = {}
	imageDocUpdate[`${route}`] = url
	console.log(imageDocUpdate);
	try {
		await docRef.update(imageDocUpdate)
	} catch (error) {
		console.log(error)
	}	
}

export const getCompanyIdFromUser = async (user, additionalData) => {
	const userRef = firestore.collection('users').doc(user.id);
	const userSnapshot = await userRef.get();
	const userData = userSnapshot.data();
	if(userData.company) {
		const allCompanies = await userData.company
		/* To get company information from user, however, return a promise resolve issue
		const companyNames = await allCompanies.map(async companyId => {
			const companyInfo = await firestore.collection('companies').doc(companyId)
			const companySnapshot = await companyInfo.get();
			const companyData = await companySnapshot.data().companyName
			return companyData;			
		})	*/
		return allCompanies;
	}
	return	
}

export const getCompanyInfoFromId = async (companyId, userId, additionalData) => {
	if(!companyId || !userId) return;

	const companyRef = firestore.doc(`companies/${companyId}`);
	const companySnapShot = await companyRef.get();
	const companyData = {id: companySnapShot.id, ...companySnapShot.data()}
	
	const role = companyData.users[userId]
	const { address, companyName, country, id, location, logo } = companyData;
	const companyInfo = {
		address,
		companyName,
		country,
		id,
		location,
		logo,
		role
	}

	return companyInfo;
}

export const createNewRanchDocument = async (ranchInfo, companyInfo, additionalData) => {
	if(!ranchInfo) return;
	const companyId = companyInfo.id
	const ranchRef = firestore.doc(`companies/${companyId}/ranchs/${ranchInfo.ranchId}`);
	const ranchSnapshot = await ranchRef.get();
	console.log('ranchRef Utils', ranchSnapshot);

	if(!ranchSnapshot.exists) {
		const createdAt = new Date();		

		try {
			await ranchRef.set({
				companyId,
				createdAt,
				...ranchInfo,
				...additionalData
			})
		} catch (error) {
			console.log('error creating ranch', error.message)
		}
	}

	return ranchRef;
}
export const createNewDocInCompanySubcollection = async (subcollection, companyId, data, additionalData) => {
	if(!subcollection || !companyId || !data) return;

	const subCollectionRef = firestore.collection(`companies/${companyId}/${subcollection}`)
	const docRef = subCollectionRef.doc();
	const docSnapshot = await docRef.get();

	if(!docSnapshot.exists) {
		const createdAt = new Date();

		try {
			docRef.set({
				createdAt,
				...data,
				...additionalData
			})
		} catch (error) {
			console.log('error creating subcollection', error.message)
		}
	}
}

//has to be placed the current ranch (last) into the User Doc {ranch: ranchId}?

export const addSectorDocumentInRanch = async (sectorInfo, ranchData) => {
	if (!ranchData || !sectorInfo) return;

	const { companyId, ranchId } = ranchData;
	const sectorCollectionRef = firestore.collection(`companies/${companyId}/ranchs/${ranchId}/sectors`);
	const sectorRef = sectorCollectionRef.doc();
	const sectorSnapshot = await sectorRef.get();

	//console.log('sector snapshot', sectorSnapshot);
	if(!sectorSnapshot.exists) {
		const createdAt = new Date();
		const { sector, hectares, variety, origin, treatment, plantingDate, density } = sectorInfo

		try {
			await sectorRef.set({
				createdAt,
				ranchId,
				companyId,
				sector,
				hectares,
				variety,
				origin,
				treatment,
				plantingDate,
				density
			})
		} 
		catch (error) {
			console.log('error creating sector', error.message)
		}
	}

	return sectorRef;
}

export const getRanchesfromCompany = async (company) => {
	if (company) {
		const ranchCollectionRef = firestore.collection(`companies/${company.id}/ranchs`);
		const ranchCollectionSnapshot = await ranchCollectionRef.get();
		const allRanchesDocs = ranchCollectionSnapshot.docs;
		
		//console.log('getranch utils', actualRanchDocs.map(doc => doc.data().name));
		return allRanchesDocs;
	}		
}

export const getSubCollectionsFromCompany = async(collection, companyId) => {
	if(!collection || !companyId) return;

	const subCollectionRef = firestore.collection(`companies/${companyId}/${collection}`);
	const subCollectionSnapshot = await subCollectionRef.get();
	const subCollectionDocs = subCollectionSnapshot.docs;

	return subCollectionDocs;
}

export const getSectorsFromRanch = async (ranch) => {
	if (!ranch) return;

	const sectorsCollectionRef = firestore.collection(`companies/${ranch.companyId}/ranchs/${ranch.ranchId}/sectors`);
	const sectorsCollectionSnapshot = await sectorsCollectionRef.get();
	const allSectorsDocs = sectorsCollectionSnapshot.docs;

	return allSectorsDocs;
}

export const getCropsForSelect = async () => {
	const cropsRef = firestore.collection('crops');
	const cropsSnapshot = await cropsRef.get();
	const allCrops = cropsSnapshot.docs;
	return allCrops;
}

//This next function was replaced by createRegisterDocInRanch
export const createInspectionDocumentInRanch = async (inspection, sectorInfo, inspector) => {
	console.log('firebase inspection', inspection);
	console.log('sector', sectorInfo);
	console.log('inspector', inspector)
	const { sector, companyId, ranchId } = sectorInfo
	const inspectionCollectionRef = firestore.collection(`companies/${companyId}/ranchs/${ranchId}/inspection`);
	const inspectionRef = inspectionCollectionRef.doc();
	const inspectionSnapshot = await inspectionRef.get();

	if(!inspectionSnapshot.exists) {
		const createdAt = new Date();			

		try {
			await inspectionRef.set({
				createdAt,
				inspector,
				sector,
				...inspection
			})
		}
		catch (error) {
			console.log('error creating inspection', error.message)
		}
	}

	return inspectionRef;
}

export const createRegisterDocInRanch = async (collection, registerData, sectorInfo, inspector) => {
	const createdAt = new Date();	//evaluate to add the register time instead
	const parsedDate = Date.parse(createdAt);
	const { sector, companyId, ranchId } = sectorInfo;
	const registerCollectionRef = firestore.collection(`companies/${companyId}/ranchs/${ranchId}/${collection}`);
	const registerRef = registerCollectionRef.doc(`${parsedDate}`);
	const registerSnapshot = await registerRef.get();

	if(!registerSnapshot.exists) {
		try {
			await registerRef.set({
				createdAt,
				inspector,
				sector,
				...registerData
			})
		} catch (error) {
			console.log('error creating document', error.message)
		}
	}

	return registerRef;
}
export const createInventoryMovement = async (company, user, movement, additionalData) => {
	console.log('fire move', movement);
	// add the if statement for evaluate data before
	const createdAt = new Date();	//evaluate to add the register time instead
	const parsedDate = Date.parse(createdAt);
	const moveCollectionRef = firestore.collection(`companies/${company.id}/warehouses/${movement.warehouse}/movements`);
	const warehouseRef = firestore.doc(`companies/${company.id}/warehouses/${movement.warehouse}`);
	const warehouseSnapshot = await warehouseRef.get()
	const warehouseData = warehouseSnapshot.data();
	const movementRef = moveCollectionRef.doc(`${parsedDate}`)
	const movementSnapshot = await movementRef.get();
	console.log('fire data', warehouseData)

	const previousQuantity = warehouseData.inventory[movement.product]
	
	const actualQuantity = previousQuantity 
							? movement.move === 'input' ? previousQuantity + movement.quantity * 1 : previousQuantity - movement.quantity * 1
							: movement.quantity	* 1
	
	const storage = {}
	storage[`inventory.${movement.product}`] = actualQuantity
	
	if(!movementSnapshot.exists) {
		try {
			const userId = user.id
			const userName = user.displayName
			
			await warehouseRef.update(storage)
	
			await movementRef.set({
				createdAt,
				userId,
				userName,
				...movement,
				...additionalData
	
			});

		} catch (error) {
			console.log('error on register inventory movement', error.message)
		}

	}
}

export const setPermissionsToUser = async (companyId, permission) => {
	if(!companyId || !permission) return;

	const companyRef = firestore.collection('companies').doc(companyId);
	const companySnapShot = await companyRef.get()

	const usersRef = firestore.collection('users')
	const usersSnapshot = await usersRef.get()
	const usersDocs = usersSnapshot.docs.map(user => ({id: user.id, ...user.data()}))
	const userToGivePermissions = usersDocs.find(user => user.email === permission.email)

	if (userToGivePermissions) {
		try {
			const newUserPermission = {}
			newUserPermission[`users.${userToGivePermissions.id}`] = permission.role
			await companyRef.update(newUserPermission)
	
			const userRef = firestore.collection('users').doc(userToGivePermissions.id);
			await userRef.update({
				company: firebase.firestore.FieldValue.arrayUnion(companySnapShot.id)
			});
		} catch(error) {
			console.log(error)
		}
		
		return 'permission succesfully set'
	} else {
		return 'user email it is not registered yet'
	}

}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;