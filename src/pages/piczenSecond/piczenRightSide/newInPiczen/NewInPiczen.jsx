import "./NewInPiczen.css";

const screenshot = "https://serverless-api.photoroom.com/mini_app/images/virtual-tryon.jpg";

const NewInPiczen = () => {
  return (
    <div className="pr-root">

      <aside className="pr-sidebar">
        <div className="pr-user">
          <div className="pr-avatar">N</div>
          <div className="pr-user-text">
            Personal space <br />
            <span>Only you</span>
          </div>
        </div>

        <nav className="pr-nav">
          <button className="active">Create</button>
          <button>AI Tools</button>
          <button>Batch</button>
          <button>Activity</button>
        </nav>

        <div className="pr-section">
          <div className="pr-section-title">Your Content</div>
          <button>Designs</button>
          <button>
            Brand kit <span className="badge">New</span>
          </button>
          <button>Templates</button>
        </div>

        <div className="pr-cta">
          <button className="upgrade">Upgrade to Pro</button>
        </div>

        <div className="pr-footer">Preferences</div>
      </aside>

      <main className="pr-main">
        <header className="pr-header">
          <h1>Create</h1>

          <div className="pr-search">
            <input placeholder="Search a template" />
          </div>
        </header>

        <section className="pr-getstarted">
          <h2>Get started</h2>

          <div className="pr-cards">
            <div className="pr-card upload">
              <div className="upload-area">
                <div className="upload-icon">⬆</div>
                <div className="upload-text">Drop one or more photos</div>
                <button className="select">Select photos</button>
              </div>
            </div>

            <div className="pr-card">
              <img src={screenshot} alt="" />
              <div className="card-label">Remove Background</div>
            </div>

            <div className="pr-card">
              <img src={screenshot} alt="" />
              <div className="card-label">AI Backgrounds</div>
            </div>

            <div className="pr-card">
              <img src={screenshot} alt="" />
              <div className="card-label">Batch</div>
            </div>

            <div className="pr-card">
              <img src={screenshot} alt="" />
              <div className="card-label">Retouch</div>
            </div>
          </div>
        </section>

        <section className="pr-new">
          <h2>New in Photoroom</h2>

          <div className="pr-pill-list">
            <div className="pill">
              <div className="pill-title">Virtual Model</div>
              <div className="pill-thumb">
                <img src={screenshot} alt="" />
              </div>
            </div>

            <div className="pill">
              <div className="pill-title">Product Staging</div>
              <div className="pill-thumb">
                <img src={screenshot} alt="" />
              </div>
            </div>

            <div className="pill large">
              <div className="pill-title">Product Beautifier</div>
              <div className="pill-thumb">
                <img src={screenshot} alt="" />
              </div>
            </div>

            <div className="pill">
              <div className="pill-title">Describe any change</div>
              <div className="pill-thumb">
                <img src={screenshot} alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default NewInPiczen;