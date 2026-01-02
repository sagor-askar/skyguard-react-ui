const Drones = () => {
  const stats = [
    { label: "65 MIN FLIGHT", id: 1 },
    { label: "20 KM RANGE", id: 2 },
    { label: "8K THERMAL", id: 3 },
    { label: "AI LOCKING", id: 4 },
  ];

  const fleet = [
    { name: "GEZGİN X4", badge: "Silent Propulsion", img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=200&q=80" },
    { name: "KORGAN X8", badge: "50kg Payload", img: "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&w=200&q=80" },
    { name: "BORAN-T", badge: "Ultra-Compact", img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=200&q=80" },
    { name: "Aquila Long-Range", badge: "Solar Hybrid", img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=400" },
    { name: "AYBARS-2", badge: "Heat Resistant", img: "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&w=200&q=80" },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=400",
    "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=400",
    "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=400",
    "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&w=400",
  ];

  return (
    <section id="drones" className="py-5 bg-white">
      <div className="container">
        {/* Flagship Drone Feature */}
        <div className="row align-items-center g-5 mb-5">
          <div className="col-lg-6 text-center" data-aos="fade-right">
            <div className="position-relative">
              <div className="drone-glow"></div>
              <img 
                src="https://pngimg.com/uploads/drone/drone_PNG204.png" 
                className="img-fluid drone-float" 
                style={{ transform: "scaleX(-1)" }} 
                alt="Apex Interceptor" 
              />
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <h6 className="text-primary fw-bold text-orbitron mb-2">// AEROSPACE DIVISION</h6>
            <h2 className="text-orbitron fw-bold mb-4">Capture <span className="text-primary">Stunning Landscape</span></h2>
            <p className="text-muted mb-4">
              SkyGuard's flagship drone series represents the pinnacle of autonomous surveillance. 
              Engineered for extreme climates and high-density urban environments.
            </p>

            <div className="row g-3">
              {stats.map(stat => (
                <div key={stat.id} className="col-6">
                  <div className="p-2 border-start border-3 border-primary bg-light small fw-bold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className="my-5 opacity-10" />

        {/* Fleet Lineup List */}
        <div className="row g-4 mb-5">
          <div className="col-12">
            <h4 className="text-orbitron fw-bold mb-4">FLEET <span className="text-primary">LINEUP</span></h4>
          </div>
          <div className="col-lg-12" data-aos="fade-up">
            {fleet.map((drone, index) => (
              <div key={index} className="d-flex align-items-center p-3 border rounded-3 transition mb-3 bg-white shadow-sm hover-shadow">
                <div className="me-4" style={{ width: "80px", height: "50px", overflow: "hidden", borderRadius: "4px" }}>
                  <img src={drone.img} className="w-100 h-100 object-fit-cover" alt={drone.name} />
                </div>
                <h6 className="text-orbitron mb-0 flex-grow-1">{drone.name}</h6>
                <span className="badge bg-light text-dark me-4 border d-none d-sm-inline-block">{drone.badge}</span>
                <button className="btn btn-sm btn-primary text-white px-4 fw-bold">Catalog</button>
              </div>
            ))}
          </div>
        </div>

        {/* Field Gallery */}
        <div className="row g-2">
          <div className="col-12">
            <h4 className="text-orbitron fw-bold mb-3">FIELD <span className="text-primary">GALLERY</span></h4>
          </div>
          {gallery.map((url, index) => (
            <div key={index} className="col-md-3 col-6">
              <div className="gallery-item overflow-hidden rounded">
                <img src={url} className="img-fluid rounded shadow-sm hover-zoom" alt="Gallery" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Drones;