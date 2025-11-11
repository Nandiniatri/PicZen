// import "./HomePage5.css";

import BrandCard from "../../../components/brandCard/BrandCard";

// export default function HomePage5() {
//   return (
//     <div className="testimonial-container">
//       <div className="tc-card">
//         <div className="tc-tag">SMB</div>

//         <div className="tc-img-wrapper">
//           <img
//             src="https://storyblok-cdn.photoroom.com/f/191576/1176x448/4e35601b00/source_the_watches_inc.webp"
//             alt="Watch"
//             className="tc-main-img"
//           />
//         </div>

//         <div className="tc-content">
//           <div className="tc-avatar-row">
//             <img
//               src="https://storyblok-cdn.photoroom.com/f/191576/144x176/55f66a7b6b/source_the_watches_inc.webp"
//               alt="avatar"
//               className="tc-avatar"
//             />
//           </div>

//           <p className="tc-text">
//             “With Piczen Background Remover and AI Enhancer, we’ve seen the
//             number of product inquiries jump by 40 percent, boosting sales
//             leads from 20 percent to 60 percent per post.”
//           </p>

//           <div className="tc-author">
//             <h4>Saad Basir</h4>
//             <p>Founder, Watches Inc.</p>
//           </div>

//           <button className="tc-btn">Read story</button>
//         </div>
//       </div>
//     </div>
//   );
// }




const HomePage5 = () => {
    return (
        <div>
            <div>
                <h1>Loved by companies of all sizes</h1>
                <p>From small businesses to global brands, Photoroom powers the visuals that sell.</p>
            </div>

            <div>
                <BrandCard
                    tag="SMB"
                    mainImage="https://storyblok-cdn.photoroom.com/f/191576/1176x448/4e35601b00/source_the_watches_inc.webp"
                    avatar="https://storyblok-cdn.photoroom.com/f/191576/144x176/55f66a7b6b/source_the_watches_inc.webp"
                    text="With Piczen Background Remover and AI Enhancer, we’ve seen product inquiries jump by 40 percent, boosting sales leads from 20 percent to 60 percent per post."
                    authorName="Saad Basir"
                    authorRole="Founder, Watches Inc."
                    buttonText="Read story"
                />
            </div>
        </div>

    );
}
export default HomePage5;