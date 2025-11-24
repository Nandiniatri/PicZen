import './Trending.css';

const Trending = () => {
    const imagesList = [
        "https://cdn.photoroom.com/v2/image-cache?path=gs%3A%2F%2Fbackground-7ef44.appspot.com%2Ftemplates_v2%2Fe1f8ad1e-e81a-432a-805d-771f7705e995%2Fthumb_b49ed609-e944-4e4b-b63d-483bd83f9a31.jpg",
        "https://cdn.photoroom.com/v2/image-cache?path=gs%3A%2F%2Fbackground-7ef44.appspot.com%2Ftemplates_v2%2F9c0069de-1bb0-4d59-98f7-29d8ff35c508%2Fthumb_bf8c154c-9fdf-41bb-b823-ebf5430b2ff6.jpg",
        "https://cdn.photoroom.com/v2/image-cache?path=gs%3A%2F%2Fbackground-7ef44.appspot.com%2Ftemplates_v2%2F7cfb1882-1830-43de-94c5-544489cc8123%2Fthumb_0a4b15e2-8bb4-4b02-81ac-9884d2e25cbd.jpg",
        "https://cdn.photoroom.com/v2/image-cache?path=gs%3A%2F%2Fbackground-7ef44.appspot.com%2Ftemplates_v2%2F091f1889-86b1-4148-965f-cef62d4a6561%2Fthumb_cb227e27-0595-4c67-8ed3-7f349bd0d5e3.jpg",
        "https://cdn.photoroom.com/v2/image-cache?path=gs%3A%2F%2Fbackground-7ef44.appspot.com%2Ftemplates_v2%2F10a3779e-a693-468f-9a39-de786cb6ce5d%2Fthumb_54d4b156-b837-4cd1-a08a-24c1466272fb.jpg",
        "https://cdn.photoroom.com/v2/image-cache?path=gs%3A%2F%2Fbackground-7ef44.appspot.com%2Ftemplates_v2%2F3a1806a1-a828-4d70-9d4d-ae45bbf6763e%2Fthumb_e5f7b44d-8a70-4928-ac5d-797c2f478e29.jpg",
        "https://cdn.photoroom.com/v2/image-cache?path=gs%3A%2F%2Fbackground-7ef44.appspot.com%2Ftemplates_v2%2F1350763f-3ff5-4ffd-8c01-699e31029a93%2Fthumb_3e4f756b-b959-4dc8-8ff3-7857877f6b51.jpg",
        "https://cdn.photoroom.com/v2/image-cache?path=gs%3A%2F%2Fbackground-7ef44.appspot.com%2Ftemplates_v2%2Fd3dab0f6-ccd7-4f0c-a614-2ad0d682209f%2Fthumb_5e4babdb-6c69-46f4-ad33-e2d902fe3260.jpg",
        "https://cdn.photoroom.com/v2/image-cache?path=gs%3A%2F%2Fbackground-7ef44.appspot.com%2Ftemplates_v2%2F6a9400e0-4a86-482a-88e8-242f77c9c711%2Fthumb_e60d12e7-1e40-4a98-9f1a-57ab19dc321f.jpg",
        "https://cdn.photoroom.com/v2/image-cache?path=gs%3A%2F%2Fbackground-7ef44.appspot.com%2Ftemplates_v2%2F5d174cea-b79e-4867-a3af-95caf98a0e16%2Fthumb_1366a12a-73af-45ab-a3d3-854f26e4a904.jpg",
        "https://cdn.photoroom.com/v2/image-cache?path=gs%3A%2F%2Fbackground-7ef44.appspot.com%2Ftemplates_v2%2F40d21ee6-b309-40e3-be44-6f07a77d8f9a%2Fthumb_7fbbf2db-471a-4007-8b6d-0400085f7f2b.jpg",
        "https://cdn.photoroom.com/v2/image-cache?path=gs%3A%2F%2Fbackground-7ef44.appspot.com%2Ftemplates_v2%2F06cce5cf-8372-4d85-8fe0-c6b5985870b2%2Fthumb_7c17ed6c-5da6-4fb1-8e19-ad05df823859.jpg",
        "https://cdn.photoroom.com/v2/image-cache?path=gs%3A%2F%2Fbackground-7ef44.appspot.com%2Ftemplates_v2%2F37a05c36-23d1-4a48-b38e-dc32b75ab499%2Fthumb_7eaca8e0-fe7d-41a1-a99f-60e93b37e7a5.jpg",
        "https://cdn.photoroom.com/v2/image-cache?path=gs%3A%2F%2Fbackground-7ef44.appspot.com%2Ftemplates_v2%2F27875061-8e8a-43f7-b260-44ccb84bdb62%2Fthumb_86db2cb1-c80c-41c1-bd6f-4c5b6677a033.jpg"
    ]

    return (
        <div>
            <div>
                <h2>Trending</h2>
            </div>

            <div className="scroll-container">
                {imagesList.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        className="scroll-image"
                        alt={`img-${index}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Trending;
