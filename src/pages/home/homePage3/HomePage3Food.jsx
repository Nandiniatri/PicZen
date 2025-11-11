import './HomePage3Food.css';

const HomePage3Food = () => {
    return (
        <section className="enterprise-wrapper">
            <div className="enterprise-left">
                <p className="enterprise-tag">Enterprise</p>

                <h1 className="enterprise-title">
                    Turn product photos into profit
                </h1>

                <ul className="enterprise-list">
                    <li>Generate realistic, on-brand images at scale.</li>
                    <li>Bulk-edit thousands of images with Batch mode.</li>
                    <li>Use the API to automate your flow.</li>
                    <li>Proven ROI: 72% CTR uplift (Smartly), 60% CPA drop (Wolt).</li>
                </ul>

                <button className="enterprise-btn">Contact sales</button>
            </div>

            <div className="enterprise-right">
                <img
                    src="https://storyblok-cdn.photoroom.com/f/191576/2352x1764/cb0b549c04/furniture-enterprise.webp"
                    alt="Product example"
                    className="enterprise-img"
                />
            </div>
        </section>
    )
}

export default HomePage3Food;



