import "./NewInPiczen.css";

const NewInPiczen = () => {
  const items = [
    {
      title: "Virtual Model",
      image: "https://serverless-api.photoroom.com/mini_app/images/virtual-tryon.jpg",
    },
    {
      title: "Product Staging",
      image: "https://serverless-api.photoroom.com/mini_app/images/lifestyle-shot.jpg",
    },
    {
      title: "Product Beautifier",
      image: "https://serverless-api.photoroom.com/mini_app/images/pro-shot.jpg",
    },
    {
      title: "Describe any change",
      image: "https://serverless-api.photoroom.com/mini_app/images/describe-a-change.webp",
    },
  ];

  return (
    <div className="newin-container">
      <h2 className="newin-title">New in Piczen</h2>

      <div className="newin-grid">
        {items.map((item, index) => (
          <div key={index} className="newin-card">
            <div className="newin-left">
              <p>{item.title}</p>
            </div>
            <div className="newin-right">
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewInPiczen;
