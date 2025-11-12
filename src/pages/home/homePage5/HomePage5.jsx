import BrandCard from "../../../components/brandCard/BrandCard";
import "./HomePage5.css";

const HomePage5 = () => {
    return (
        <div className="homePage5-main-div">

            <div className="hp5-header">
                <h1>Loved by companies <br /> of all sizes</h1>
                <p>From small businesses to global brands, Photoroom powers the visuals that sell.</p>
            </div>

            <div className="hp5-card-row">

                <BrandCard
                    tag="SMB"
                    bgColor="#eef6ff"
                    mainImage="https://storyblok-cdn.photoroom.com/f/191576/1176x448/4e35601b00/source_the_watches_inc.webp"
                    avatar="https://storyblok-cdn.photoroom.com/f/191576/144x176/55f66a7b6b/source_the_watches_inc.webp"
                    text="With Piczen Background Remover and AI Enhancer, inquiries jumped by 40 percent."
                    authorName="Saad Basir"
                    authorRole="Founder, Watches Inc."
                    buttonText="Read story"
                />

                <BrandCard
                    tag="SMB"
                    bgColor="#fff4e6"
                    mainImage="https://storyblok-cdn.photoroom.com/f/191576/1176x448/97fcbb2126/source_sarah_hoofar.webp"
                    avatar="https://storyblok-cdn.photoroom.com/f/191576/144x176/0f3b5417a7/source_cowgirl_clutch.webp"
                    text="Piczen helped us turn product visuals into high-selling content."
                    authorName="Sarah Hoofar"
                    authorRole="Founder, Cowgirl Clutch"
                    buttonText="Read story"
                />

                <BrandCard
                    tag="SMB"
                    bgColor="#f9f9f9"
                    mainImage="https://storyblok-cdn.photoroom.com/f/191576/1176x448/08d6afb25f/source_wolt.webp"
                    avatar="https://storyblok-cdn.photoroom.com/f/191576/144x176/55f66a7b6b/source_the_watches_inc.webp"
                    text="Batch editing saved us more than 20 hours every week."
                    authorName="Rohit Mehta"
                    authorRole="Product Lead, Wolt"
                    buttonText="Read story"
                />

            </div>

        </div>
    );
};

export default HomePage5;
