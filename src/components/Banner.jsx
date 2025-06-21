import './Banner.css'

function Banner() {
  return (
    <section className="banner">
      
      <div className="banner-content">
        <div className="banner-container">
          <div className="banner-left">
            <img 
              src="/Klikcamp-Full-Logo.png" 
              alt="KlikCamp" 
              className="banner-logo"
            />
            <h1 className="banner-title">Learning Management System</h1>
            
            <div className="banner-description">
              <h2>Your platform is your brand,</h2>
              <h2>Build it strong with KlikCamp LMS.</h2>
            </div>
            
            <div className="banner-buttons">
              <button className="btn-custom banner-btn">CORPORATE</button>
              <button className="btn-custom banner-btn">EDUCATION</button>
              <button className="btn-custom banner-btn">ENTREPRENEUR</button>
            </div>
          </div>
          
          <div className="banner-right">
            {/* Content area for additional elements if needed */}
            <img 
          src="/Banner.png" 
          alt="KlikCamp Banner Background" 
          className="banner-image"
        />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner