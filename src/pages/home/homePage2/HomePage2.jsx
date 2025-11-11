// import Button from "../../../components/Button";
// import "./HomePage2.css";

// const HomePage2 = () => {
//     return (
//         <div className="hp2-wrapper">

//             <div className="hp2-title-block">
//                 <h1 className="hp2-title">The Only Editing Tool</h1>
//                 <h1 className="hp2-title-flex">
//                     <h1 className="hp2-you">You'll</h1>
//                     <img 
//                         src="https://img.icons8.com/?size=100&id=lFiWvinBpdbc&format=png&color=000000" 
//                         className="hp2-icon"
//                     />
//                     Ever Need
//                 </h1>
//             </div>

//             <div className="hp2-content">

//                 <div className="hp2-image-block">
//                     <img 
//                         src="https://storyblok-cdn.photoroom.com/f/191576/2352x1764/71003ec766/multiple-jtbd-sneakers.webp"
//                         className="hp2-main-img"
//                     />
//                 </div>

//                 <div className="hp2-text-block">
//                     <h2 className="hp2-heading">
//                         Art Has Never Been Easier
//                     </h2>

//                     <p className="hp2-desc">
//                         Piczen is built for creators and sellers: our AI enhances and edits photos 
//                         with best-in-class precision — even on complex or transparent products — 
//                         helping you design visuals that capture attention and boost sales.
//                         From product images to social media posts, ads, logos, and print materials, 
//                         Piczen helps you create stunning visuals effortlessly.
//                     </p>

//                     <Button className="hp2-btn">Start creating for free</Button>
//                 </div>

//             </div>

//         </div>
//     );
// }

// export default HomePage2;





import FeatureSection from "../../../components/featureSection/FeatureSection";
import "./HomePage2.css";

const HomePage2 = () => {
    return (
        <FeatureSection
            hpTitle="The Only Editing Tool"
            hpYou="You'll"
            hpText3="Ever Need"
            hpImage1="https://img.icons8.com/?size=100&id=lFiWvinBpdbc&format=png&color=000000"
            hpImage2="https://storyblok-cdn.photoroom.com/f/191576/2352x1764/71003ec766/multiple-jtbd-sneakers.webp"
            hpHeading="Art Has Never Been Easier"
            hpDesc=" Piczen is built for creators and sellers: our AI enhances and edits photos 
                        with best-in-class precision — even on complex or transparent products — 
                        helping you design visuals that capture attention and boost sales.
                        From product images to social media posts, ads, logos, and print materials, 
                        Piczen helps you create stunning visuals effortlessly."
            hpButtonText="Start creating for free"
        />
    );
}

export default HomePage2;
