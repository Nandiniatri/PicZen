import FeatureSection from "../../../components/featureSection/FeatureSection";
import "./HomePage2.css";

const HomePage2 = () => {
    return (
        <div className="homePage1-main-div">
            <div className="hp2-title-block">
                <h1 className="hp2-title">The Only Editing Tool</h1>

                <h1 className="hp2-title-flex">
                    <span className="hp2-you">You'll</span>
                    <img
                        src="https://img.icons8.com/?size=100&id=lFiWvinBpdbc&format=png&color=000000"
                        className="hp2-icon"
                    />
                    Ever Need
                </h1> 
            </div> 

            <FeatureSection
                hpImage2="https://storyblok-cdn.photoroom.com/f/191576/2352x1764/71003ec766/multiple-jtbd-sneakers.webp"
                hpHeading="Art Has Never Been Easier"
                hpDesc=" Piczen is built for creators and sellers: our AI enhances and edits photos 
               with best-in-class precision — even on complex or transparent products — 
               helping you design visuals that capture attention and boost sales.
               From product images to social media posts, ads, logos, and print materials, 
               Piczen helps you create stunning visuals effortlessly."
                hpButtonText="Start creating for free"
            />
        </div>
    );
}

export default HomePage2;
