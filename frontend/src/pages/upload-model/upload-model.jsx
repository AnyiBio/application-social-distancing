import React from 'react'
import FormFile from '../../components/form-file/form-file';
import Header from '../../components/header/header';
import './upload-model.css';

const UploadModel = () => {
    return (  
    <div className="upload-model-page">
        <Header />
        <div className="file-container">
            <FormFile />
        </div>
    </div>);
}
 
export default UploadModel;