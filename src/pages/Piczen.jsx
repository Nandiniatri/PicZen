import Header from "./header/Header";
import Home from "./home/Home";
import HomePage2 from "./home/homePage2/HomePage2";
import HomePage3Food from "./home/homePage3/HomePage3Food";
import HomePage4Food from "./home/homePage4/HomePage4Food";
import HomePage5 from "./home/homePage5/HomePage5";


const PicZen = () => {
  return (
    <div>
        <Header />
        <div>
            <Home />
            <HomePage2 />
            <HomePage3Food />
            <HomePage4Food />
            <HomePage5 />
        </div>
    </div>
  );
}

export default PicZen;