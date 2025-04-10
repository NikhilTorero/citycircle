import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { github } from 'lucide-react';

import {
  Store,
  Users,
  MessageCircle,
  HandHelping,
  UserCircle,
  MapPin,
  Building2,
  Wrench,
  Github,
  Send,
  Phone,
  Sun,
  Moon,
  Menu,
  X,
  Star,
  ChevronRight,
  Instagram,
  Twitter,
  Linkedin,
} from 'lucide-react';

function TestimonialCard({ name, role, text, rating }: { name: string; role: string; text: string; rating: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-2xl shadow-lg"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-600 mb-4">{text}</p>
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </motion.div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
>
  <div className="mb-4 text-blue-600 dark:text-blue-400">{icon}</div>
  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{title}</h3>
  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
</motion.div>

  );
}

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 dark:text-white transition-colors duration-300`}>
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MapPin className="w-7 h-7 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CityCircle
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <div className="space-x-6">
                <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Features</a>
                <a href="#business" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">For Business</a>
                <a href="#providers" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">For Providers</a>
                <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</a>
                <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
              </div>
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white dark:bg-gray-900 py-4"
          >
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Features</a>
              <a href="#business" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">For Business</a>
              <a href="#providers" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">For Providers</a>
              <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 text-center md:text-left"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Your city,<br />your circle.
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
                Join the movement to discover and support local. Connect with nearby businesses, skilled professionals, and your community in real-time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-shadow"
                >
                  Get it on Play Store
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-gray-300 dark:border-gray-600 px-8 py-4 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Coming Soon on iOS
                </motion.button>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
                alt="Community Connection"
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Everything you need in your local circle</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Discover, connect, and grow with your community</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Store className="w-10 h-10" />}
              title="Discover Local Businesses"
              description="Find the best shops and services in your neighborhood, complete with reviews and real-time updates."
            />
            <FeatureCard
              icon={<Users className="w-10 h-10" />}
              title="Connect with Service Providers"
              description="Get instant access to skilled professionals for your home, office, or any other needs."
            />
            <FeatureCard
              icon={<MessageCircle className="w-10 h-10" />}
              title="Real-Time Chat"
              description="Direct communication with business owners and service providers for quick responses."
            />
            <FeatureCard
              icon={<HandHelping className="w-10 h-10" />}
              title="Community Help"
              description="Post requests for immediate assistance or find opportunities to help others nearby."
            />
            <FeatureCard
              icon={<UserCircle className="w-10 h-10" />}
              title="Build Your Network"
              description="Create meaningful connections within your local community and grow together."
            />
            <FeatureCard
              icon={<MapPin className="w-10 h-10" />}
              title="Location-Based Updates"
              description="Stay informed about what's happening in your neighborhood in real-time."
            />
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section id="business" className="py-20 bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80"
                alt="Business Growth"
                className="rounded-3xl shadow-xl"
              />
            </motion.div>
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6">Grow Your Business with CityCircle</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Building2 className="w-8 h-8 text-blue-600" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Increase Your Visibility</h3>
                      <p className="text-gray-600 dark:text-gray-400">Get discovered by customers actively looking for your products or services in their area.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Users className="w-8 h-8 text-blue-600" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Build Customer Relations</h3>
                      <p className="text-gray-600 dark:text-gray-400">Connect directly with your customers through our real-time chat feature.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <MapPin className="w-8 h-8 text-blue-600" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Local Presence</h3>
                      <p className="text-gray-600 dark:text-gray-400">Strengthen your presence in the local community and attract nearby customers.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center mb-12">What Business Owners Say</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <TestimonialCard
                name="Sarah Johnson"
                role="Café Owner"
                text="CityCircle has transformed how we connect with our local customers. Our daily foot traffic has increased significantly!"
                rating={5}
              />
              <TestimonialCard
                name="Mike Chen"
                role="Bookstore Owner"
                text="The platform made it easy to showcase our events and special collections to the neighborhood. Great community engagement!"
                rating={5}
              />
              <TestimonialCard
                name="Lisa Rodriguez"
                role="Boutique Owner"
                text="The real-time chat feature helps us provide better customer service. It's like having a digital storefront that never closes."
                rating={5}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Providers Section */}
      <section id="providers" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80"
                alt="Service Providers"
                className="rounded-3xl shadow-xl"
              />
            </motion.div>
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6">For Service Providers</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Wrench className="w-8 h-8 text-orange-600" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Get More Jobs</h3>
                      <p className="text-gray-600 dark:text-gray-400">Connect with customers actively seeking your services in your area.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <MessageCircle className="w-8 h-8 text-orange-600" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Easy Communication</h3>
                      <p className="text-gray-600 dark:text-gray-400">Chat directly with potential clients and manage appointments efficiently.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <UserCircle className="w-8 h-8 text-orange-600" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Build Your Reputation</h3>
                      <p className="text-gray-600 dark:text-gray-400">Showcase your work and collect reviews from satisfied customers.</p>
                    </div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-shadow"
                >
                  Join as a Service Provider
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Developer Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-blue-600 rounded-full">
                <Github className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-6">About the Developer</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              As a professional mobile app developer specializing in Flutter, I'm passionate about creating scalable digital solutions that make a real impact. CityCircle is built with modern technology and a deep understanding of local community needs.
            </p>
            <div className="flex justify-center gap-4">
              <motion.a
                href="https://linkedin.com/in/nikhilmore---"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-2 bg-blue-100 dark:bg-gray-800 rounded-full hover:bg-blue-200 dark:hover:bg-gray-700"
              >
                <Linkedin className="w-6 h-6 text-blue-600" />
              </motion.a>

<motion.a
  href="https://github.com/n1kh1lmore"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.1 }}
  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
>
  <Github className="w-6 h-6 text-gray-900 dark:text-white" />
</motion.a>

              <motion.a
                href="https://instagram.com/nikhilmore___"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-2 bg-blue-100 dark:bg-gray-800 rounded-full hover:bg-blue-200 dark:hover:bg-gray-700"
              >
                <Instagram className="w-6 h-6 text-blue-600" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="flex justify-between items-center">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-shadow"
                >
                  Send Message
                </motion.button>
                <motion.a
                  href="https://wa.me/9168785237"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 text-green-600 hover:text-green-700"
                >
                  <Phone className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </motion.a>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <MapPin className="w-6 h-6 text-blue-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CityCircle
              </span>
            </div>
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">Privacy Policy</a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">Terms of Service</a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">Contact</a>
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">
              Designed & Developed by <a href="#" className="text-blue-600">Nikhil Pradip More</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;