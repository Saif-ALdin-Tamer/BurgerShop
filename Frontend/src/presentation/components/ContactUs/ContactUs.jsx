import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, ChevronDown } from 'lucide-react';
import './ContactUs.css';

export const ContactUs = ({ onNavigateHome }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    type: 'General Inquiry',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        type: 'General Inquiry',
        subject: '',
        message: ''
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 6000);
    }, 1200);
  };

  return (
    <section className="contact-page-section" id="contact">
      <div className="contact-container">
        {/* Main Content Layout */}
        <div className="contact-grid">
          {/* Left Column: Contact Info & Form */}
          <div className="contact-form-col">
            <div className="brand-header">
              <h2 className="brand-title">Burger Craft & Co.</h2>
              <p className="contact-intro">
                For inquiries or assistance, reach out to us at{' '}
                <a href="mailto:support@burgercraft.com" className="email-link">
                  support@burgercraft.com
                </a>{' '}
                or Call Us <a href="tel:19999" className="phone-highlight">19999</a>
              </p>
              <p className="contact-subintro">
                If there's anything you need, don't hesitate to let us know. Your satisfaction is our top priority!
              </p>
            </div>

            {/* Form Success Message */}
            {isSubmitted && (
              <div className="form-success-banner glass-panel">
                <CheckCircle2 size={24} className="success-icon" />
                <div>
                  <h4>Message Sent Successfully!</h4>
                  <p>Thank you for reaching out. Our team will get back to you shortly.</p>
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name <span className="req">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone <span className="req">*</span></label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email <span className="req">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Your Email Address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="type">Type</label>
                  <div className="select-wrapper">
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Order Status">Order Status</option>
                      <option value="Feedback">Feedback & Suggestions</option>
                      <option value="Complaint">Complaint</option>
                      <option value="Franchise">Franchise & Business</option>
                    </select>
                    <ChevronDown size={16} className="select-arrow" />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject <span className="req">*</span></label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="Subject of your message"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Dialer Promo Card */}
          <div className="contact-promo-col">
            <div className="promo-card glass-panel">
              <div className="promo-header">
                <span className="promo-tagline">Happiness In Every Bite!</span>
              </div>
              
              {/* Phone Graphic Representation */}
              <div className="dialer-graphic-card">
                <div className="dialer-brand">
                  <span className="dialer-title">BURGER CRAFT & CO.</span>
                  <span className="dialer-number">19999</span>
                </div>

                <div className="keypad-grid">
                  {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map((num) => (
                    <div key={num} className="keypad-btn">{num}</div>
                  ))}
                </div>

                <a href="tel:19999" className="call-action-btn">
                  <Phone size={20} />
                  <span>Call</span>
                </a>
              </div>

              <div className="promo-burger-art">
                <img
                  src="/enhancedBurgerPhoto/burger-double-angus.png"
                  alt="Delicious Burger"
                  className="promo-burger-img"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Branch Locations List */}
        <div className="branches-section">
          <h3 className="branches-title">Our Branches & Locations</h3>
          <div className="branches-grid">
            <div className="branch-card glass-panel">
              <div className="branch-icon">
                <MapPin size={22} />
              </div>
              <div className="branch-info">
                <h4>Downtown Flagship Station</h4>
                <p>124 Grand Avenue, Central Square Plaza (Next to Metro Station)</p>
                <a 
                  href="https://maps.google.com/?q=Downtown+Plaza" 
                  target="_blank" 
                  rel="noreferrer"
                  className="branch-link"
                >
                  View Downtown Location →
                </a>
              </div>
            </div>

            <div className="branch-card glass-panel">
              <div className="branch-icon">
                <MapPin size={22} />
              </div>
              <div className="branch-info">
                <h4>Uptown Gourmet Galleria</h4>
                <p>550 Park Heights Boulevard, Suite 102 - Next to Horizon Galleria</p>
                <a 
                  href="https://maps.google.com/?q=Uptown+Park+Heights" 
                  target="_blank" 
                  rel="noreferrer"
                  className="branch-link"
                >
                  View Uptown Location →
                </a>
              </div>
            </div>

            <div className="branch-card glass-panel">
              <div className="branch-icon">
                <MapPin size={22} />
              </div>
              <div className="branch-info">
                <h4>Westside Craft Haven</h4>
                <p>88 Ocean View Drive, Bayfront Walk - Block 4</p>
                <a 
                  href="https://maps.google.com/?q=Westside+Ocean+View" 
                  target="_blank" 
                  rel="noreferrer"
                  className="branch-link"
                >
                  View Westside Location →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Big Call Us Hotline Callout */}
        <div className="hotline-banner glass-panel">
          <div className="hotline-icon-wrap">
            <Phone size={36} className="hotline-icon" />
          </div>
          <div className="hotline-text-wrap">
            <span className="hotline-sub">Need immediate assistance or quick telephone order?</span>
            <h2 className="hotline-main">
              Call Us <a href="tel:19999" className="hotline-num">19999</a>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
