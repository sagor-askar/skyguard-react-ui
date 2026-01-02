const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white">
      <div className="container">
        {/* Brand Logo */}
        <a className="navbar-brand fw-bold" href="#" style={{ letterSpacing: '1px' }}>
          SKY<span className="text-primary">GUARD</span>
        </a>

        {/* Mobile Toggle Button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fw-semibold">
            <li className="nav-item">
              <a className="nav-link px-3" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#products">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#drones">Drones</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#contact">Contact</a>
            </li>
            <li className="nav-item ms-lg-3">
              <a className="btn btn-sm btn-primary text-white px-4" href="#contact">
                Get Quote
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;