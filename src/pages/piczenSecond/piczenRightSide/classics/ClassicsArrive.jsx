import './ClassicsArrive.css';

const ClassicsArrive = () => {
    const items = [
        {
            title: "White",
            image: "https://cdn.photoroom.com/v2/image-cache?path=gs%3A%2F%2Fbackground-7ef44.appspot.com%2Ftemplates_v2%2F675515b8-83d8-45e0-a3ec-7e8c8366ced0%2Fthumb_7C11634D-9BB5-4D1C-932B-06C176EEADE0.jpg",
            bg: "#ffffff"
        },
        {
            title: "Black",
            image: "https://cdn.photoroom.com/v2/image-cache?path=gs%3A%2F%2Fbackground-7ef44.appspot.com%2Ftemplates_v2%2F675515b8-83d8-45e0-a3ec-7e8c8366ced0%2Fthumb_7C11634D-9BB5-4D1C-932B-06C176EEADE0.jpg",
            bg: "#000000",
        },
        {
            title: "Transparent",
            image: "https://cdn.photoroom.com/v2/image-cache?path=gs%3A%2F%2Fbackground-7ef44.appspot.com%2Ftemplates_v2%2F675515b8-83d8-45e0-a3ec-7e8c8366ced0%2Fthumb_7C11634D-9BB5-4D1C-932B-06C176EEADE0.jpg",
            bg: "transparent",
            pattern: true,
        },
        {
            title: "Original Image",
            image: "https://cdn.photoroom.com/v2/image-cache?path=gs%3A%2F%2Fbackground-7ef44.appspot.com%2Ftemplates_v2%2F675515b8-83d8-45e0-a3ec-7e8c8366ced0%2Fthumb_7C11634D-9BB5-4D1C-932B-06C176EEADE0.jpg",
            bgImage: "https://cdn.photoroom.com/v2/image-cache?path=gs%3A%2F%2Fbackground-7ef44.appspot.com%2Ftemplates_v2%2F675515b8-83d8-45e0-a3ec-7e8c8366ced0%2Fthumb_7C11634D-9BB5-4D1C-932B-06C176EEADE0.jpg",
        },
    ];

    return (
        <div className="classics-container">
            <h2 className="classics-title">Classics</h2>

            <div className="classics-grid">
                {items.map((item, index) => (
                    <div key={index} className="classics-card">

                        <div
                            className={`classic-bg ${item.pattern ? "checker" : ""}`}
                            style={{
                                backgroundColor: item.bg,
                                backgroundImage: item.bgImage ? `url(${item.bgImage})` : undefined,
                            }}
                        >
                            <img src={item.image} alt={item.title} className="classic-img" />
                        </div>

                        <p className="classic-label">{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ClassicsArrive;

