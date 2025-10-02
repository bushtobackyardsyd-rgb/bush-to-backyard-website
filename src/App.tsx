import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Star, ArrowRight } from 'lucide-react';

function App() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const services = [
    {
      title: "Garden Design & Installation",
      description: "Custom garden designs tailored to your lifestyle and the unique climate of the Hills District.",
      image: "/SC.jpg"
    },
    {
      title: "Lawn Installation & Maintenance",
      description: "Premium turf installation and ongoing maintenance for lush, healthy lawns year-round.",
      image: "/Lawn.jpeg"
    },
    {
      title: "Hardscaping & Patios",
      description: "Beautiful stone work, retaining walls, and outdoor entertainment areas built to last.",
      image: "/pavers.jpg"
    },
    {
      title: "Water Features",
      description: "Custom ponds, fountains, and irrigation systems that bring tranquility to your space.",
      image: "/Pool.jpg"
    },
    {
      title: "Installation of Fence and Retaining Wall",
      description: "Professional installation of durable fences and retaining walls. We offer both wood and Colorbond options to secure and enhance your property boundaries.",
      image: "/Fence.jpeg"
    }
  ];

  const projects = [
    {
      title: "Modern Family Retreat",
      location: "Castle Hill",
      image: "/1.jpg",
      description: "Complete backyard transformation featuring native Australian plants and entertainment area."
    },
    {
      title: "Contemporary Courtyard",
      location: "Kellyville",
      image: "/court.jpg",
      description: "Minimalist design with water feature and drought-resistant native species."
    },
    {
      title: "Luxury Pool Landscaping",
      location: "Cherrybrook",
      image: "/Pool.jpg",
      description: "Resort-style pool area with tropical plantings and natural stone features."
    },
    {
      title: "Front Yard Makeover",
      location: "Gables",
      image: "/FY.jpg",
      description: "Complete street appeal transformation with low-maintenance native gardens."
    },
    {
      title: "More Recent Projects",
      location: "Follow Us",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "See more of our latest landscaping projects and behind-the-scenes content on Instagram.",
      isInstagramLink: true,
      instagramUrl: "https://www.instagram.com/bushtobackyard" // Placeholder URL - update with actual Instagram handle
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      location: "Castle Hill",
      rating: 5,
      text: "Absolutely thrilled with our garden transformation! The team understood our vision perfectly and delivered beyond expectations. Our backyard is now our favorite place to relax."
    },
    {
      name: "Michael Thompson",
      location: "Baulkham Hills", 
      rating: 5,
      text: "Professional service from start to finish. The attention to detail and quality of work is exceptional. Highly recommend Bush to Backyard for any project."
    },
    {
      name: "Emma Rodriguez",
      location: "Kellyville",
      rating: 5,
      text: "The team created a stunning drought-resistant garden that looks amazing year-round. Great communication throughout the project and very fair pricing."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.jpg" 
                alt="Bush to Backyard Logo" 
                className="h-12 w-auto object-contain"
              />
              <span className="text-xl font-bold text-gray-800">Bush To Backyard</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-emerald-600 transition-colors">Services</a>
              <a href="#portfolio" className="text-gray-600 hover:text-emerald-600 transition-colors">Portfolio</a>
              <a href="#testimonials" className="text-gray-600 hover:text-emerald-600 transition-colors">Reviews</a>
              <a href="#contact" className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105">
                Get Quote
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/WhatsApp Image 2025-09-22 at 2.11.42 PM.jpeg')`
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your
            <span className="block text-emerald-400">Outdoor Space</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Award-winning landscaping services across the Hills District. 
            From concept to completion, we create outdoor spaces that inspire.
          </p>
          <div className="bg-emerald-600/20 backdrop-blur-sm border border-emerald-400/30 rounded-full px-6 py-3 mb-8 inline-block">
            <p className="text-emerald-100 font-semibold">✓ We Price Beat Any Written Quote</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => {
                const portfolioSection = document.getElementById('portfolio');
                if (portfolioSection) {
                  portfolioSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300"
            >
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive landscaping solutions tailored to the unique beauty and climate of the Hills District
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Recent Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our latest landscape transformations across the Hills District suburbs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${project.isInstagramLink ? 'cursor-pointer' : ''}`}
                   onClick={project.isInstagramLink ? () => {
                     // Future Instagram link functionality
                     // window.open(project.instagramUrl, '_blank');
                     console.log('Instagram link clicked - URL:', project.instagramUrl);
                   } : undefined}>
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${
                    project.isInstagramLink 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                      : 'bg-emerald-600 text-white'
                  }`}>
                    {project.location}
                  </div>
                  {project.isInstagramLink && (
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
                  <button className={`font-semibold transition-colors flex items-center space-x-1 ${
                    project.isInstagramLink 
                      ? 'text-purple-600 hover:text-purple-700' 
                      : 'text-emerald-600 hover:text-emerald-700'
                  }`}>
                    <span>{project.isInstagramLink ? 'Follow on Instagram' : 'View Details'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Trusted by homeowners across the Hills District
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed italic">
                "{testimonials[activeTestimonial].text}"
              </blockquote>
              <div>
                <p className="font-bold text-gray-800 text-lg">{testimonials[activeTestimonial].name}</p>
                <p className="text-emerald-600">{testimonials[activeTestimonial].location}</p>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial ? 'bg-emerald-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Google Reviews Section */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-xl p-6 shadow-md border border-emerald-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Want to see more reviews?</h3>
              <p className="text-gray-600 mb-4">
                Check out our complete collection of customer reviews and ratings on Google.
              </p>
              <button 
                onClick={() => {
                  window.open('https://share.google/24vl36ck9v1P56Y65', '_blank');
                }}
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>View Google Reviews</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Space?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss your vision and create the outdoor space of your dreams. 
                Serving all Hills District suburbs with professional landscaping services.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-emerald-400" />
                  <span className="text-lg">0481 446 789</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-emerald-400" />
                  <span className="text-lg">info@bushtobackyard.com.au</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-emerald-400" />
                  <span className="text-lg">Servicing All Greater Sydney Region</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-gray-800">
              <h3 className="text-2xl font-bold mb-6">Get Your Free Quote</h3>
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const name = formData.get('name') as string;
                const email = formData.get('email') as string;
                const phone = formData.get('phone') as string;
                const suburb = formData.get('suburb') as string;
                const project = formData.get('project') as string;
                
                const subject = encodeURIComponent('Free Quote Request - Bush to Backyard');
                const body = encodeURIComponent(
                  `New quote request from ${name}\n\n` +
                  `Contact Details:\n` +
                  `Name: ${name}\n` +
                  `Email: ${email}\n` +
                  `Phone: ${phone}\n` +
                  `Suburb: ${suburb}\n\n` +
                  `Project Description:\n${project}`
                );
                
                window.location.href = `mailto:info@BushtoBackyard.com.au?subject=${subject}&body=${body}`;
              }}>
                <div>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email Address" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Phone Number" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="suburb"
                    placeholder="Your Suburb"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <textarea 
                    name="project"
                    placeholder="Tell us about your project..." 
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Send Message</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-white rounded-lg p-2">
                  <img 
                    src="/logo.jpg" 
                    alt="Bush to Backyard Logo" 
                    className="h-8 w-auto object-contain"
                  />
                </div>
                <span className="text-xl font-bold text-white">Bush To Backyard</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Creating beautiful, sustainable outdoor spaces across the Hills District 
                with over 15 years of professional landscaping experience.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Garden Design & Installation</li>
                <li>Lawn Installation & Maintenance</li>
                <li>Hardscaping & Patios</li>
                <li>Water Features</li>
                <li>Installation of Fence and Retaining Wall</li>
                <li>Irrigation Systems</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Service Areas</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Castle Hill</li>
                <li>Baulkham Hills</li>
                <li>Kellyville</li>
                <li>Rouse Hill</li>
                <li>Cherrybrook</li>
                <li>Box Hill</li>
                <li>Gables</li>
                <li>Greater Sydney Region</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Bush to Backyard. All rights reserved. | ABN: 29 691 209 373 | Licensed & Insured | Servicing Greater Sydney Region</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;