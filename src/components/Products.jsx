const Products = () => {
  const inventory = [
    {
      id: 1,
      title: "Walkthrough Detector",
      img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=400&q=80",
      desc: "AI-Integrated multi-zone sensing. Non-invasive scan tech.",
      spec1: { label: "SENSORS", value: "32 Zones" },
      spec2: { label: "LATENCY", value: "0.02s" },
      aos: "fade-right"
    },
    {
      id: 2,
      title: "Baggage Scanner",
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=400&q=80",
      desc: "Dual-view X-Ray imaging. Automated threat recognition.",
      spec1: { label: "VOLTAGE", value: "160kV" },
      spec2: { label: "DEPTH", value: "38mm" },
      aos: "fade-left"
    },
    {
      id: 3,
      title: "Security Surveillance",
      img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=400&q=80",
      desc: "4K Resolution with thermal tracking and AI analytics.",
      spec1: { label: "RESOLUTION", value: "4K UHD" },
      spec2: { label: "NIGHT V.", value: "100m" },
      aos: "fade-right"
    },
    {
      id: 4,
      title: "Access Control System",
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=400&q=80",
      desc: "Biometric and RFID integrated cloud-based access.",
      spec1: { label: "USERS", value: "Unlimited" },
      spec2: { label: "UPTIME", value: "99.9%" },
      aos: "fade-left"
    }
  ];

  return (
    <section id="products" className="bg-white py-5 overflow-hidden">
      <div className="container">
        {/* Header Section */}
        <div className="row mb-5 align-items-end" data-aos="fade-up">
          <div className="col-lg-6">
            <h6 className="text-primary fw-bold text-orbitron mb-2">// HARDWARE INVENTORY</h6>
            <h2 className="text-orbitron fw-bold display-5">SYSTEMS <span className="text-primary">CORE</span></h2>
          </div>
          <div className="col-lg-6 text-lg-end">
            <p className="text-muted small text-uppercase fw-bold" style={{ letterSpacing: '2px' }}>
              Military Grade Standards • IP67 Certified
            </p>
          </div>
        </div>

        {/* Inventory Grid */}
        <div className="row g-5">
          {inventory.map((item) => (
            <div key={item.id} className="col-lg-6" data-aos={item.aos} data-aos-delay="100">
              <div className="blueprint-item d-flex align-items-center p-4 h-100 shadow-sm border rounded">
                <div className="blueprint-img-wrapper position-relative overflow-hidden" style={{ width: '150px', height: '150px', flexShrink: 0 }}>
                  <img 
                    src={item.img} 
                    className="w-100 h-100 object-fit-cover rounded" 
                    alt={item.title} 
                  />
                  <div className="scan-line"></div>
                </div>
                
                <div className="blueprint-content ms-4">
                  <h4 className="text-orbitron fw-bold mb-2 h5">{item.title}</h4>
                  <p className="text-muted small mb-3">{item.desc}</p>
                  
                  <div className="spec-grid d-flex gap-3 mb-4">
                    <div className="spec-node">
                      <span className="d-block fw-bold text-primary small">{item.spec1.label}</span>
                      <small className="text-uppercase opacity-50">{item.spec1.value}</small>
                    </div>
                    <div className="spec-node border-start ps-3">
                      <span className="d-block fw-bold text-primary small">{item.spec2.label}</span>
                      <small className="text-uppercase opacity-50">{item.spec2.value}</small>
                    </div>
                  </div>
                  <button className="btn btn-outline-primary btn-sm fw-bold px-3">INITIALIZE ORDER</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;