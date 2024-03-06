import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import UploadPhoto from "./API/UserUploads/UploadPhoto";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedFile(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      console.log("Selected File:", selectedFile);

      UploadPhoto.upload(formData);
    } else {
      console.warn("No file selected.");
    }
  };

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "200px",
        }}
      >
        <input type="file" onChange={handleFileChange} />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            style={{ maxWidth: "100%", maxHeight: "200px" }}
          />
        )}
        <button onClick={handleUpload}>Upload</button>
      </div>
    </div>
  );
}

export default App;
