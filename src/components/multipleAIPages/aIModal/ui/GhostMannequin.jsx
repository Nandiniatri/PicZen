import "./UI.css";

const  GhostMannequin = () => {
    return ( 
        <div className="vm-root">

            <div className="vm-preview">
                <div className="vm-card">
                    <img
                        src="https://serverless-api.photoroom.com/mini_app/images/placeholders/ghost-mannequin.webp"
                        alt="Jacket"
                    />
                </div>
            </div>

            <p className="vm-desc">
                Display your garment on a 3D ghost mannequin with 
                <br />
                professional styling
            </p>

            <div className="vm-bottom-bar">

                <div className="vm-upload">
                    <span>Drop files or <b>select images</b></span>
                </div>

                <div className="vm-actions">
                    <button className="vm-chip">Sqaure</button>
                    <button className="vm-chip">Brand</button>
                    <button className="vm-send">↑</button>
                </div>

            </div>
        </div>
    );
};

export default GhostMannequin;
