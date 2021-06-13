import React, { useState, useRef } from 'react';
import Button from '@material-ui/core/Button';
import './form-video.css';
  
  export default function FormVideo() {  
    const [videoFile, setVideoFile] = useState();
    const inputRef = useRef();

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      const url = URL.createObjectURL(file);
      setVideoFile(url);
      console.log(videoFile);
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
          accept=".mov,.mp4"
        />
        {!videoFile && <Button variant="outlined" color="secondary" onClick={handleChoose}>UPLOAD A FILE!</Button>}
        {videoFile && (
        <video
          className="VideoInput_video"
          width="100%"
          height={videoFile}
          controls
          src={videoFile}
        />
      )}
      </div>
        
    );
  }