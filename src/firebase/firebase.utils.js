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
		const {displayName, email, photoURL, emailVerified, phoneNumber } = userAuth;
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
	
	const companyRef = await firestore.collection('companies').doc()
	const companySnapShot = await companyRef.get();
	const userCreator = await currentUser.id;
	//console.log('companySnapshot', userCreator);
	
	if(!companySnapShot.exists) {
		const { companyName, country, location, address, logo } = companyProfile;
		const companyCreatedAt = new Date();

		const userRef = await firestore.collection('users').doc(userCreator);
		userRef.update({
			company: firebase.firestore.FieldValue.arrayUnion(companySnapShot.id)
		});

		try {
			await companyRef.set({
				companyName,
				country,
				location,
				address,
				logo,
				companyCreatedAt,
				admin: [userCreator],
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
	const docRef = await firestore.doc(`${collection}/${docId}`)
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
	const userRef = await firestore.collection('users').doc(user.id);
	const userSnapshot = await userRef.get();
	const userData = await userSnapshot.data();
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

export const getCompanyInfoFromId = (companyId, additionalData) => {
	if(!companyId) return;

	const companyRef = firestore.doc(`companies/${companyId}`);

	return companyRef;
}

export const createNewRanchDocument = async (ranchInfo, companyInfo, additionalData) => {
	if(!ranchInfo) return;
	const companyId = companyInfo.id
	const ranchRef = await firestore.doc(`companies/${companyId}/ranchs/${ranchInfo.ranchId}`);
	const ranchSnapshot = await ranchRef.get();
	console.log('ranchRef Utils', ranchSnapshot);

	if(!ranchSnapshot.exists) {
		const createdAt = new Date();
		const {name, ranchId, code, crop, area, seasonStart, seasonEnd, latitude, longitude, address } = ranchInfo;

		try {
			await ranchRef.set({
				name, 
				ranchId,
				companyId,
				code, 
				crop, 
				area, 
				seasonStart, 
				seasonEnd, 
				latitude, 
				longitude, 
				address,
				createdAt,
				...additionalData
			})
		} catch (error) {
			console.log('error creating ranch', error.message)
		}
	}

	return ranchRef;
}

//has to be placed the current ranch (last) into the User Doc {ranch: ranchId}?

export const addSectorDocumentInRanch = async (sectorInfo, ranchData) => {
	if (!ranchData || !sectorInfo) return;

	const { companyId, ranchId } = ranchData;
	const sectorCollectionRef = await firestore.collection(`companies/${companyId}/ranchs/${ranchId}/sectors`);
	const sectorRef = await sectorCollectionRef.doc();
	const sectorSnapshot = sectorRef.get();

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
		const ranchCollectionRef = await firestore.collection(`companies/${company.id}/ranchs`);
		const ranchCollectionSnapshot = await ranchCollectionRef.get();
		const allRanchesDocs = await ranchCollectionSnapshot.docs;
		
		//console.log('getranch utils', actualRanchDocs.map(doc => doc.data().name));
		return allRanchesDocs;
	}		
}

export const getSectorsFromRanch = async (ranch) => {
	if (!ranch) return;

	const sectorsCollectionRef = await firestore.collection(`companies/${ranch.companyId}/ranchs/${ranch.ranchId}/sectors`);
	const sectorsCollectionSnapshot = await sectorsCollectionRef.get();
	const allSectorsDocs = await sectorsCollectionSnapshot.docs;

	return allSectorsDocs;
}

export const getCropsForSelect = async () => {
	const cropsRef = await firestore.collection('crops');
	const cropsSnapshot = await cropsRef.get();
	const allCrops = await cropsSnapshot.docs;
	return allCrops;
}

export const createInspectionDocumentInRanch = async (inspection, sectorData, inspector) => {
	console.log('firebase inspection', inspection);
	console.log('sector', sectorData);
	console.log('inspector', inspector)
	const { sector, companyId, ranchId } = sectorData
	const inspectionCollectionRef = await firestore.collection(`companies/${companyId}/ranchs/${ranchId}/inspection`);
	const inspectionRef = await inspectionCollectionRef.doc();
	const inspectionSnapshot = await inspectionRef.get();

	if(!inspectionSnapshot.exists) {
		const createdAt = new Date();
		const { inspectionDate, records, sample } = inspection
		

		try {
			await inspectionRef.set({
				createdAt,
				inspector,
				inspectionDate,
				records,
				sample,
				sector
			})
		}
		catch (error) {
			console.log('error creating inspection', error.message)
		}
	}

	return inspectionRef;
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;