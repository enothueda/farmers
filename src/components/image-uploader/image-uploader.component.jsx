import React from 'react';
import { storage, updateImageInDocument } from '../../firebase/firebase.utils';

import CustomButton from '../custom-button/custom-button.component';

import './image-uploader.styles.scss';

class ImageUploader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			image: null,
			progress: 0
		}
	}

	handleChange = event => {
		if(event.target.files[0]) {
			const imageLoaded = event.target.files[0];
			this.setState({ image: imageLoaded })
		}
	}

	handleUpload = () => {
		const { image } = this.state;
		const { collection, docId, folder, route } = this.props;
		const uploadTask = storage.ref(`${collection}/${docId}/${folder}/${image.name}`).put(image);
		uploadTask.on('state_changed', 
			snapshot => {
				//progress function
				const progress = Math.round(snapshot.bytesTransferred * 100 / snapshot.totalBytes);
				this.setState({ progress })
			}, 
			error => {
				//error function
				console.log(error);
			}, 
			() => {
				//complete function
				storage
					.ref(`${collection}/${docId}/${folder}`)
					.child(image.name)
					.getDownloadURL()
					.then(url => {
						updateImageInDocument(collection, docId, route, url)
					})
			}
		)
	}

	render() {
		const { folder } = this.props;
		return (
			<div className='image-uploader'>
				<span>Update your {folder} image</span>
				<progress value={this.state.progress} max='100' />				
				{
					this.state.image
					? <CustomButton onClick={this.handleUpload} > Update {folder} </CustomButton>
					: <input type='file' onChange={this.handleChange} />
				}
				
				<br />
			</div>
		)
	}

}

export default ImageUploader;