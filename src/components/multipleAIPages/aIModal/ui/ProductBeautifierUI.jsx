const ProductBeautifierUI = () => {
  return (
    <div className="ai-content-placeholder">
      <p className="ai-helper-text">
        Upload a product image to enhance it
      </p>

      <div className="upload-box">
        Drop a file or <span>select an image</span>
      </div>

      <button className="prompt-send-btn">↑</button>
    </div>
  );
};

export default ProductBeautifierUI;
