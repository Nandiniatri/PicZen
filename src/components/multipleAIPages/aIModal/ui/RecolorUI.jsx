const RecolorUI = () => {
  return (
    <div className="ai-content-placeholder">
      <p className="ai-helper-text">
        Change your product's color.
      </p>

      <div className="upload-box">
        Drop a file or <span>select an image</span>
      </div>

      <div className="prompt-options">
        <span className="option-pill">+ Product</span>
        <span className="option-pill">4D3DE3</span>
        <span className="option-pill">Square</span>
      </div>

      <button className="prompt-send-btn">↑</button>
    </div>
  );
};

export default RecolorUI;
