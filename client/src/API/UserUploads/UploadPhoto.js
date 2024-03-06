import axios from 'axios';

class UploadPhoto {
  static upload(formData) {
    axios
    .post("http://localhost:3001/upload", formData)
    .then((response) => {
      console.log("Server response:", response.data);
    })
    .catch((error) => {
      console.error("Error uploading file:", error);
    });
  }
}

export default UploadPhoto