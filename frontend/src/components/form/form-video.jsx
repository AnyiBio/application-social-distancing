import React, { useState, useRef } from 'react';
import Button from '@material-ui/core/Button';
import { sendImg } from '../../service/imageService';
import './form-video.css';
  
  export default function FormVideo() {  
    const [frameFile, setFrameFile] = useState(null);
    const [responseModel, setResponseModel] = useState([]);
    const [loading, setLoading] = useState(true);
    const inputRef = useRef();

    const handleFileChange = (event) => {
      setLoading(true);
      const file = event.target.files[0];
      const url = URL.createObjectURL(file);
      setFrameFile(url);
      const formData = new FormData();
      formData.append("image", file);
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


    const handleChoose = (event) => {
      inputRef.current.click();
    };

    return (
      <div className="input-container">
        <input
          ref={inputRef}
          type="file"
          hidden
          onChange={handleFileChange}
          accept=".mov,.mp4,.jpg,.jpeg"
        />
        
        <div className="w-5"></div>
        <Button variant="outlined" color="secondary" onClick={handleChoose}>UPLOAD A FILE!</Button>
        
        {frameFile && (
        <div className="d-flex">
          <div className="">
            <img
              className=""
              width="100%"
              height={frameFile}
              alt="frame-file"
              src={frameFile}
            />
            <Button variant="outlined" color="secondary" onClick={handleChoose}>UPLOAD A NEW FILE!</Button> 
            </div>
            <div className="m-5">
              {loading ? 
                <div className="spinner-border" styles={{width: "5rem;", height: "5rem;"}} role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                : 
                (
                  <>
                    <h2>{`En la imagen hay ${responseModel?.coordenadas.length} personas`}</h2> 
                    <h2>{`En la imagen hay ${responseModel?.indices.length} personas que no cumplen con la distancia mínima de seguridad`}</h2>
                  </>
                ) 
              }
            </div>
        </div>
      )}
      </div>
        
    );
  }