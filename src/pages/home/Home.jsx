import HomeLeftPage from "./homeLeft/HomeLeftPage";
import HomeRightPage from "./homeRight/HomeRightPage";
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-left">
        <HomeLeftPage />
      </div>

      <div className="home-right">
        <HomeRightPage />
      </div>
    </div>
  );
}

export default Home;