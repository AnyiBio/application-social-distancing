import React, { useState, useEffect, useRef } from 'react';
import Button from '@material-ui/core/Button';
import { sendImg } from '../../service/imageService';
import { motion } from "framer-motion";
import './form-file.css';

export default function FormFile () {  
  const [frameFile, setFrameFile] = useState(null);
  const [responseModel, setResponseModel] = useState([]);
  const [loading, setLoading] = useState(false);
  const [textButton, setTextButton] = useState('UPLOAD A FILE!');
  const inputRef = useRef();

  const handleFileChange = (event) => {
    setLoading(true);
    let url;
    if(event.target.files.length) {
      url = URL.createObjectURL(event.target.files[0]);
    }
    setFrameFile(url);
    const formData = new FormData();
    formData.append("image", event.target.files[0]);
    formData.append("destination", "images");
    formData.append("create_thumbnail", true);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    sendImg(formData, config)
      .then(response => {
        setResponseModel(response.data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  };


  const handleChoose = () => {
    inputRef.current.click();
  };

  useEffect(() => {
    if(frameFile!== null) {
      setTextButton('UPLOAD A NEW FILE!');
    }
  }, frameFile);

  return (
    <div className="input-container d-flex justify-content-center">
      {loading ? 
      (<div className="spinner-border align-self-center text-danger" style={{width: "5rem;", height: "5rem;"}} role="status">
          <span className="visually-hidden">Loading...</span>
      </div>
      )
      :
      (<>
      <div className="d-flex flex-column">
        <input
          ref={inputRef}
          type="file"
          hidden
          onChange={handleFileChange}
          accept=".mov,.mp4,.jpg,.jpeg"
        />
        {frameFile && (
        <>
          <div className="wrapper">
            <img
              alt="frame-file"
              src={frameFile}
              />
            {responseModel.indices ? responseModel.coordenadas.map((item) => (
              <div className="square border-success" style={{height: `${item[2]-item[0]}px`, width: `${item[3]-item[1]}px`, top: `${item[0]}px`, left: `${item[1]}px`}}></div>
            )) : ''}
            {responseModel.indices ? responseModel.indices.map((item) => (
              <div className="square border-danger" style={{height: `${item[2]-item[0]}px`, width: `${item[3]-item[1]}px`, top: `${item[0]}px`, left: `${item[1]}px`}}></div>
            )) : ''}      
            </div>
            <div className="mt-5">
                <h2>{`${responseModel?.coordenadas.length} people detected in the image`}</h2> 
                <h2>{`En la imagen hay ${responseModel?.indices.length} people not complying with the minimum safety distance`}</h2>
            </div>
        </>
      )}
      </div>
      <motion.div className="align-self-center" 
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
      >
        <Button variant="outlined" color="secondary" onClick={handleChoose}>{textButton}</Button>
      </motion.div>
     </> )}
    </div>
  );
}