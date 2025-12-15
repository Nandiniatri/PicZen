// import { useState } from "react";
// import { removeBackground } from "@imgly/background-removal";
 
// const BackgroundRemoveNew = () => {
//     const [inputImg, setInputImg] = useState("");
//     const [outputImg, setOutputImg] = useState("");
//     const [file, setFile] = useState(null);
//     const [loading, setLoading] = useState(false) ;

//     const handleChange = (e) => {
//         const selected = e.target.files[0];
//         if (!selected) return;

//         setFile(selected);
//         setInputImg(URL.createObjectURL(selected));
//         setOutputImg("");
//     };


//     const handleRemove = async () => {
//         if (!file) return alert("Please choose an image first!");

//         setLoading(true);

//         const blob = await removeBackground(file);
//         const url = URL.createObjectURL(blob);
//         setOutputImg(url);

//         setLoading(false);
//     };

//     return (
//         <div style={{ padding: "20px" }}>
//             <h2>Background Remove</h2>

//             <input type="file" accept="image/*" onChange={handleChange} />

//             {inputImg && (
//                 <button
//                     onClick={handleRemove}
//                     style={{
//                         marginLeft: "10px",
//                         padding: "8px 16px",
//                         cursor: "pointer",
//                     }}
//                 >
//                     Remove Background
//                 </button>
//             )}

//             {loading && <p>Processing… Please wait.</p>}

//             <div style={{ marginTop: "20px", display: "flex", gap: "20px" }}>
//                 {inputImg && (
//                     <div>
//                         <h4>Original</h4>
//                         <img
//                             src={inputImg}
//                             alt="original"
//                             style={{ width: "200px", border: "1px solid #ccc" }}
//                         />
//                     </div>
//                 )}

//                 {outputImg && (
//                     <div>
//                         <h4>Background Removed</h4>
//                         <img
//                             src={outputImg}
//                             alt="output"
//                             style={{ width: "200px", border: "1px solid #ccc" }}
//                         />
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default BackgroundRemoveNew;



import { useState } from "react";
import { removeBackground } from "@imgly/background-removal";

const BackgroundOnly = () => {
  const [inputImg, setInputImg] = useState(null);
  const [outputImg, setOutputImg] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setInputImg(URL.createObjectURL(file));
    setLoading(true);

    try {
      const resultBlob = await removeBackground(file);
      const bgUrl = URL.createObjectURL(resultBlob);
      setOutputImg(bgUrl);
    } catch (err) {
      console.error("Error:", err);
      alert("Background remove failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Remove Person & Get Background</h2>

      <input type="file" accept="image/*" onChange={handleChange} />

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        {inputImg && (
          <div>
            <p>Original Image</p>
            <img src={inputImg} alt="" width="250" />
          </div>
        )}

        {loading && <p>Processing...</p>}

        {outputImg && (
          <div>
            <p>Background Only</p>
            <img src={outputImg} alt="" width="250" />
          </div>
        )}
      </div>
    </div>
  );
};

export default BackgroundOnly;

