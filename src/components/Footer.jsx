const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: "bi-linkedin", href: "#" },
    { icon: "bi-twitter-x", href: "#" },
    { icon: "bi-instagram", href: "#" }
  ];

  return (
    <footer className="py-4 border-top bg-white">
      <div className="container">
        <div className="row align-items-center">
          {/* Copyright Info */}
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 small text-muted text-orbitron">
              &copy; {currentYear} SKYGUARD SYSTEMS. DUBAI, UAE.
            </p>
          </div>

          {/* Social Icons */}
          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className="text-dark fs-5 footer-link"
                >
                  <i className={`bi ${link.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;