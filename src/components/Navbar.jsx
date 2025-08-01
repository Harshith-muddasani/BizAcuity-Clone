import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, BarChart3, Zap } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [logoError, setLogoError] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navItems = [
    { 
      name: 'At A Glance', 
      path: '/at-a-glance',
      dropdown: [
        { name: 'About BizAcuity', path: '/at-a-glance' },
        { name: 'Leadership Team', path: '/at-a-glance/leadership' },
        { name: 'Events', path: '/at-a-glance/events' },
        { name: 'Corporate Social Responsibility', path: '/at-a-glance/csr' },
      ]
    },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: [
        { name: 'Data Management Services', path: '/services/data-management' },
        { name: 'BI Reporting Services', path: '/services/bi-reporting' },
        { name: 'Power BI Consulting', path: '/services/power-bi' },
        { name: 'Cloud Services', path: '/services/cloud' },
        { name: 'Managed Services', path: '/services/managed' },
        { name: 'Application Development Services', path: '/services/app-development' },
        { name: 'AI-driven Gaming Analytics', path: '/services/gaming-analytics' },
      ]
    },
    { 
      name: 'Platform', 
      path: '/platform',
      dropdown: [
        { name: 'AI-driven Gaming Analytics', path: '/platform/gaming-analytics' },
        { name: 'Real-time Data Processing', path: '/platform/real-time-data' },
        { name: 'Predictive Insights', path: '/platform/predictive-insights' },
        { name: 'Player Personalization', path: '/platform/personalization' },
      ]
    },
    { 
      name: 'Industries', 
      path: '/industries',
      dropdown: [
        { name: 'Financial Services', path: '/industries/financial' },
        { name: 'Online Casino', path: '/industries/online-casino' },
        { name: 'Land-Based Casino', path: '/industries/land-casino' },
        { name: 'Sports Betting', path: '/industries/sports-betting' },
        { name: 'Real Estate', path: '/industries/real-estate' },
        { name: 'Telecom', path: '/industries/telecom' },
        { name: 'Event Technologies', path: '/industries/events' },
        { name: 'Logistics', path: '/industries/logistics' },
        { name: 'Lottery', path: '/industries/lottery' },
        { name: 'E-Commerce', path: '/industries/ecommerce' },
      ]
    },
    { 
      name: 'Resources', 
      path: '/resources',
      dropdown: [
        { name: 'Case Studies', path: '/resources/case-studies' },
        { name: 'White Papers', path: '/resources/white-papers' },
        { name: 'Webinars', path: '/resources/webinars' },
        { name: 'Press Releases', path: '/resources/press-releases' },
        { name: 'Blogs', path: '/resources/blogs' },
      ]
    },
    { name: 'Contact Us', path: '/contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-100'
          : 'bg-white/10 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 md:h-22">
          <Link to="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3"
            >
              {!logoError ? (
                <div className="flex items-center space-x-3">
                  <img
                    src="/logos/bizacuity-logo.png"
                    alt="BizAcuity"
                    className="h-10 w-auto"
                    onError={() => {
                      setLogoError(true)
                      console.log('❌ BizAcuity logo not found, using custom fallback')
                    }}
                    onLoad={() => console.log('✅ BizAcuity logo loaded')}
                  />
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  {/* Custom Logo Icon */}
                  <div className="relative">
                    <motion.div
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 rounded-xl shadow-lg flex items-center justify-center"
                    >
                      <BarChart3 size={20} className="text-white" />
                    </motion.div>
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                      className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center"
                    >
                      <Zap size={8} className="text-white" />
                    </motion.div>
                  </div>
                  
                  {/* Brand Text */}
                  <div className="flex flex-col">
                    <motion.div
                      className={`text-2xl font-black tracking-tight ${
                        isScrolled 
                          ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent' 
                          : 'text-white drop-shadow-lg'
                      }`}
                    >
                      BizAcuity
                    </motion.div>
                    <motion.div
                      className={`text-xs font-medium tracking-wider ${
                        isScrolled ? 'text-gray-500' : 'text-white/80'
                      }`}
                    >
                      ANALYTICS
                    </motion.div>
                  </div>
                </div>
              )}
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`relative px-4 py-3 text-sm font-semibold transition-all duration-300 flex items-center space-x-1 rounded-lg group ${
                    location.pathname === item.path || location.pathname.startsWith(item.path + '/')
                      ? isScrolled
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-yellow-300 bg-white/10'
                      : isScrolled
                      ? 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                      : 'text-white/90 hover:text-yellow-300 hover:bg-white/10'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown 
                      size={16} 
                      className={`transition-all duration-300 ${
                        activeDropdown === item.name ? 'rotate-180 scale-110' : 'group-hover:scale-110'
                      }`} 
                    />
                  )}
                  {(location.pathname === item.path || location.pathname.startsWith(item.path + '/')) && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute bottom-0 left-0 right-0 h-1 rounded-full ${
                        isScrolled ? 'bg-primary-600' : 'bg-yellow-300'
                      }`}
                      initial={false}
                    />
                  )}
                </Link>

                {item.dropdown && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-3 w-72 bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-200 z-50 overflow-hidden"
                  >
                    <div className="py-3">
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <motion.div
                          key={dropdownItem.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: dropdownIndex * 0.05 }}
                        >
                          <Link
                            to={dropdownItem.path}
                            className="flex items-center px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-blue-50 hover:text-primary-700 transition-all duration-200 border-l-4 border-transparent hover:border-primary-500"
                          >
                            <span>{dropdownItem.name}</span>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg ${
                isScrolled
                  ? 'bg-gradient-to-r from-primary-600 to-blue-600 text-white hover:shadow-xl hover:from-primary-700 hover:to-blue-700'
                  : 'bg-white text-primary-600 hover:bg-gray-50 hover:shadow-xl'
              }`}
            >
              Get Started
            </motion.button>
          </div>

          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`p-3 rounded-xl transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100 bg-white/80 shadow-md' 
                  : 'text-white hover:bg-white/20 bg-white/10'
              }`}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-2xl"
          >
            <div className="px-6 py-6 space-y-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`block px-4 py-4 text-base font-semibold rounded-xl transition-all duration-300 ${
                      location.pathname === item.path || location.pathname.startsWith(item.path + '/')
                        ? 'text-primary-600 bg-gradient-to-r from-primary-50 to-blue-50 border-l-4 border-primary-500'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-primary-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 px-6 py-4 bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar