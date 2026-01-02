const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "Checkpoint Security",
      desc: "Precision-controlled access systems ensuring only authorized entry at all times.",
      icon: "bi-geo-fill",
      color: "var(--bs-primary)",
      points: ["Controlled Access", "Perimeter Secured", "24/7 Authorized"],
      delay: "100",
    },
    {
      id: 2,
      title: "Surveillance Systems",
      desc: "Advanced monitoring networks designed to protect high-value assets & data.",
      icon: "bi-eye-fill",
      color: "#6366f1",
      points: ["Active Monitoring", "Real-time Protect", "Smart Safeguard"],
      delay: "200",
    },
    {
      id: 3,
      title: "Software Solutions",
      desc: "Scalable digital architectures tailored for your unique corporate presence.",
      icon: "bi-code-square",
      color: "#8b5cf6",
      points: ["Highly Reliable", "Cloud Scalable", "Innovative UI"],
      delay: "300",
    },
    {
      id: 4,
      title: "Smart Classrooms",
      desc: "Next-gen educational tech providing seamless interactive reach & efficiency.",
      icon: "bi-display",
      color: "#ec4899",
      points: ["IoT Connected", "Resource Efficient", "Seamless UX"],
      delay: "400",
    },
  ];

  return (
    <section id="services" className="py-5 bg-white">
      <div className="container py-lg-4">
        {/* Section Header */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h6 className="text-primary fw-bold text-orbitron mb-2">// CAPABILITIES</h6>
          <h2 className="text-orbitron fw-bold h1">
            INTEGRATED <span className="text-primary">SOLUTIONS</span>
          </h2>
          <p className="text-muted mx-auto mt-3" style={{ maxWidth: "650px" }}>
            End-to-end security infrastructure, bridging the gap between physical
            surveillance and digital intelligence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="row g-4">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              className="col-lg-3 col-md-6" 
              data-aos="fade-up" 
              data-aos-delay={service.delay}
            >
              <div 
                className="product-card p-4 h-100 border-0 shadow-sm position-relative overflow-hidden"
                style={{ 
                  background: "#fcfdfe", 
                  borderTop: `4px solid ${service.color}` 
                }}
              >
                <div 
                  className="info-icon-box mb-4 shadow-sm d-flex align-items-center justify-content-center"
                  style={{ 
                    width: "60px", 
                    height: "60px", 
                    fontSize: "1.8rem", 
                    background: "#fff", 
                    color: service.color,
                    borderRadius: "10px"
                  }}
                >
                  <i className={`bi ${service.icon}`}></i>
                </div>
                
                <h5 className="text-orbitron fw-bold mb-3">{service.title}</h5>
                <p className="text-muted small mb-4">{service.desc}</p>
                
                <ul className="list-unstyled small fw-semibold text-secondary">
                  {service.points.map((point, index) => (
                    <li key={index} className="mb-2">
                      <i className="bi bi-patch-check-fill text-primary me-2"></i>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;