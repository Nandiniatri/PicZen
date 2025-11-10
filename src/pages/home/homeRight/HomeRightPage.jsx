import "./HomeRightPage.css";

const HomeRightPage = () => {
  return (
    <section className="right-panel">
      <img src="https://cdn.pixabay.com/photo/2021/03/04/10/11/asian-6067473_1280.jpg" alt="AI model" className="model-img" />

      <div className="overlay"></div>

      <div className="social-bar">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fas fa-times"></i></a>
      </div>

      <div className="control-panel">
        <div className="controls">
          <span>Exposure</span>
          <span>Brightness</span>
          <span>Brilliance</span>
          <span>Highlights</span>
          <span>Vignette</span>
          <span>Noise</span>
        </div>

        <div className="slider">
          <div className="slider-track"></div>
          <div className="slider-thumb"></div>
        </div>
      </div>
    </section>
  );
};

export default HomeRightPage;
