import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo">
          <img src="/KlikCamp-Logo.png" alt="KlikCamp" className="logo-img" />
        </div>
        
        {/* Navigation Menu */}
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a href="#solutions" className="nav-link">Solutions</a>
              <div className="dropdown-content">
                <a href="#training">By Training</a>
                <a href="#industry">By Industry</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a href="#company" className="nav-link">Company</a>
              <div className="dropdown-content">
                <a href="#about">ImperiaTech IT Consultancy</a>
                <a href="#contact">Contact us</a>
              </div>
            </li>
          </ul>
        </nav>
        
        {/* Right Section - Demo Button and Login */}
        <div className="header-actions">
          <img src="/login.svg" alt="Login" className="login-icon" />
          <button className="btn-custom btn-demo">Request DEMO</button>
        </div>
        
        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  )
}

export default Header