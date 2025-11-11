import Header from "./header/Header";
import Home from "./home/Home";
import HomePage2 from "./home/homePage2/HomePage2";
import HomePage3Food from "./home/homePage3/HomePage3Food";
import HomePage4Food from "./home/homePage4/HomePage4Food";


const PicZen = () => {
  return (
    <div>
        <Header />
        <div>
            <Home />
            <HomePage2 />
            <HomePage3Food />
            <HomePage4Food />
        </div>
    </div>
  );
}

export default PicZen;