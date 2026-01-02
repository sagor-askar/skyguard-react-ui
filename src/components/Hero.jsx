const Hero = () => {
  return (
    <section id="home" className="hero py-5" style={{ marginTop: '70px' }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Text Content */}
          <div className="col-lg-6" data-aos="fade-up">
            <span className="badge bg-info-subtle text-primary mb-3 px-3 py-2">
              Next-Gen Security
            </span>
            <h1 className="display-3 fw-bold mb-4 text-orbitron">
              Securing the <br />
              <span className="text-primary">Sky & Beyond</span>
            </h1>
            <p className="lead text-muted mb-5">
              Specialized in providing comprehensive and tailored security services 
              designed to meet the diverse!
            </p>
            <div className="d-flex gap-3">
              <a href="#products" className="btn btn-primary btn-lg shadow-sm px-4">
                Explore Tech
              </a>
              <a href="#drones" className="btn btn-outline-dark btn-lg px-4">
                View Drones
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="col-lg-6 mt-5 mt-lg-0" data-aos="zoom-in" data-aos-delay="200">
            <img 
              src="https://pngimg.com/uploads/drone/drone_PNG204.png" 
              className="img-fluid drone-float" 
              alt="Hero Drone" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;