import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Settings,
  Star,
  ExternalLink
} from 'lucide-react'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [imageErrors, setImageErrors] = useState({})

  const quickLinks = [
    { name: 'Contact Us', path: '/contact' },
    { name: 'Careers', path: '/careers' },
    { name: 'Press Release', path: '/resources/press-releases' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Locations', path: '/contact' },
  ]

  const handleImageError = (imageName) => {
    setImageErrors(prev => ({ ...prev, [imageName]: true }))
  }

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    console.log('Newsletter subscription:', email)
    // Add your newsletter subscription logic here
    setEmail('')
  }

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Column 1: ISO Certified */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold mb-6">ISO Certified</h3>
              <div className="flex space-x-4">
                {/* ISO 27001 */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-20 h-20 bg-white rounded-lg p-2 flex items-center justify-center shadow-lg"
                >
                  {!imageErrors.iso27001 ? (
                    <img
                      src="/assets/iso27001.png"
                      alt="ISO 27001 Certification"
                      className="w-full h-full object-contain"
                      onError={() => handleImageError('iso27001')}
                      onLoad={() => console.log('✅ ISO 27001 loaded')}
                    />
                  ) : (
                    <div className="text-center">
                      <div className="text-gray-800 text-xs font-bold">ISO</div>
                      <div className="text-gray-600 text-xs">27001</div>
                    </div>
                  )}
                </motion.div>

                {/* ISO 9001 */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-20 h-20 bg-white rounded-lg p-2 flex items-center justify-center shadow-lg"
                >
                  {!imageErrors.iso9001 ? (
                    <img
                      src="/assets/iso9001.png"
                      alt="ISO 9001 Certification"
                      className="w-full h-full object-contain"
                      onError={() => handleImageError('iso9001')}
                      onLoad={() => console.log('✅ ISO 9001 loaded')}
                    />
                  ) : (
                    <div className="text-center">
                      <div className="text-gray-800 text-xs font-bold">ISO</div>
                      <div className="text-gray-600 text-xs">9001</div>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>

            {/* Column 2: Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm relative group"
                    >
                      <span className="relative">
                        {link.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3: Gartner Reviews */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold mb-6">Gartner Reviews</h3>
              <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
                <h4 className="text-lg font-semibold text-white mb-2">BizAcuity</h4>
                <p className="text-sm text-gray-300 mb-4">Data and Analytics Service Providers</p>
                
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-lg font-bold text-yellow-400">4.9</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
                
                <p className="text-xs text-gray-400 mb-4">(19 Ratings)</p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-primary-400 hover:text-primary-300 text-sm font-medium flex items-center space-x-1 transition-colors duration-300"
                >
                  <span>Submit a review</span>
                  <ExternalLink size={14} />
                </motion.button>
              </div>
            </motion.div>

            {/* Column 4: Newsletter Subscription */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold mb-6">Subscribe to Newsletter</h3>
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                  />
                </div>
                
                {/* reCAPTCHA Placeholder */}
                <div className="bg-gray-700 border border-gray-600 rounded-lg p-4 text-center">
                  <div className="text-xs text-gray-400">
                    reCAPTCHA verification
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    (Placeholder)
                  </div>
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Subscribe
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Left: Settings Gear */}
            <motion.button
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Settings"
            >
              <Settings size={20} />
            </motion.button>

            {/* Center: Copyright */}
            <div className="text-gray-400 text-sm text-center">
              © 2025 BizAcuity Solutions Pvt. Ltd. All Rights Reserved
            </div>

            {/* Right: Social Icons */}
            <div className="flex space-x-4">
              {[
                { 
                  name: 'LinkedIn', 
                  href: 'https://linkedin.com/company/bizacuity',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  )
                },
                { 
                  name: 'Facebook', 
                  href: 'https://facebook.com/bizacuity',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                    </svg>
                  )
                },
                { 
                  name: 'X (Twitter)', 
                  href: 'https://x.com/bizacuity',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                    </svg>
                  )
                },
                { 
                  name: 'YouTube', 
                  href: 'https://youtube.com/@bizacuity',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2 6a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" clipRule="evenodd" />
                    </svg>
                  )
                }
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-600 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer