import React from 'react'
import FormVideo from '../../components/form/form-video';
import Header from '../../components/header/header';
import './upload-model.css';

const UploadModel = () => {
    return (  
    <div className="upload-model-page">
        <Header />
        <div className="video-container">
            <FormVideo />
        </div>
    </div>);
}
 
export default UploadModel;