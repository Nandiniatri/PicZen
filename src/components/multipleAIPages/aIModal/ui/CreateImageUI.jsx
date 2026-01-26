const CreateImageUI = ({ title }) => {
  return (
    <div className="ai-content-placeholder">
      {/* <p className="ai-helper-text">Need some inspiration?</p> */}

      <div className="prompt-wrapper">
        <input
          type="text"
          placeholder={`Describe an image`}
          className="prompt-input"
        />

        <div className="prompt-options">
          <span className="option-pill">Style <b>Random</b></span>
          <span className="option-pill">Size <b>Square</b></span>
        </div>

        <button className="prompt-send-btn">↑</button>
      </div>
    </div>
  );
};

export default CreateImageUI;
