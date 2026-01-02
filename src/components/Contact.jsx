import { useState } from 'react';

const Contact = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enquiry Sent:", formData);
    alert("Thank you! Your secure enquiry has been sent.");
    // Reset form
    setFormData({ fullName: '', email: '', service: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container py-lg-5">
        <div className="row g-5">
          {/* Left Side: Contact Info */}
          <div className="col-lg-5" data-aos="fade-right">
            <h2 className="text-orbitron fw-bold mb-4">
              CONNECT <br /><span className="text-primary">WITH US</span>
            </h2>
            <p className="text-muted mb-5">
              Our security experts are available 24/7 to discuss your surveillance 
              needs and site requirements.
            </p>

            <div className="contact-info-list">
              {[
                { icon: 'bi-geo-alt', title: 'Office Location', detail: 'Tech Tower, Level 14, Dubai Silicon Oasis, UAE' },
                { icon: 'bi-envelope', title: 'Email Address', detail: 'contracts@skyguard.ae' },
                { icon: 'bi-telephone', title: 'Phone Number', detail: '+971 4 000 0000' }
              ].map((info, idx) => (
                <div key={idx} className="contact-info-item d-flex align-items-start mb-4">
                  <div className="info-icon-box bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center me-3" 
                       style={{ width: '50px', height: '50px', flexShrink: 0, color: 'var(--bs-primary)' }}>
                    <i className={`bi ${info.icon} fs-5`}></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">{info.title}</h6>
                    <p className="text-muted small mb-0">{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="col-lg-7" data-aos="fade-left">
            <div className="card border-0 shadow-sm p-4 p-md-5 rounded-4">
              <h4 className="text-orbitron mb-4">Secure Consultation Request</h4>
              <form className="row g-4" onSubmit={handleSubmit}>
                <div className="col-md-6">
                  <label className="small fw-bold mb-2">FULL NAME</label>
                  <input 
                    type="text" 
                    name="fullName"
                    className="form-control" 
                    placeholder="Enter your name" 
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="small fw-bold mb-2">COMPANY EMAIL</label>
                  <input 
                    type="email" 
                    name="email"
                    className="form-control" 
                    placeholder="example@company.ae" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12">
                  <label className="small fw-bold mb-2">SERVICE OF INTEREST</label>
                  <input 
                    type="text" 
                    name="service"
                    className="form-control" 
                    placeholder="Security Services..." 
                    value={formData.service}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <label className="small fw-bold mb-2">MESSAGE</label>
                  <textarea 
                    name="message"
                    className="form-control" 
                    rows="4" 
                    placeholder="How can we assist you?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary w-100 text-white fw-bold py-3 shadow-sm">
                    SEND ENQUIRY
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;