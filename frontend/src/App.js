import { useState } from 'react';
import { imageModification, uploadToCloudinary } from './services/cloudinary.service';
import { AdvancedImage } from '@cloudinary/react';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageData, setImageData] = useState("");


  const handleClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('upload_preset', process.env.REACT_APP_UPLOAD_PRESET);
    console.log(process.env.REACT_APP_UPLOAD_PRESET);
    const response = await uploadToCloudinary(formData);
    console.log(response)
    setImageData(imageModification(response.public_id));
  }
  return (
    <div className="App">
      <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
      <button onClick={handleClick}>Upload</button>
      {imageData && < AdvancedImage cldImg={imageData} />}

    </div>
  );
}

export default App;
