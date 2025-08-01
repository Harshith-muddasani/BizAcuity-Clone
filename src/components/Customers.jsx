import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Customers = () => {
  const [imageErrors, setImageErrors] = useState({})
  const [currentSlide, setCurrentSlide] = useState(0)

  const customers = [
    { name: 'Recognise Bank', logo: '/logos/recognise-bank.png', color: 'bg-blue-500' },
    { name: 'Entain (Ladbrokes, Coral)', logo: '/logos/entain.jpg', color: 'bg-green-500' },
    { name: 'Betfred', logo: '/logos/betfred.png', color: 'bg-red-500' },
    { name: 'Lottoland', logo: '/logos/lottoland.png', color: 'bg-purple-500' },
    { name: 'Mohegan Sun', logo: '/logos/mohegan-sun.png', color: 'bg-orange-500' },
    { name: 'Syniverse', logo: '/logos/syniverse.png', color: 'bg-teal-500' },
    { name: 'Tata Communications', logo: '/logos/tata.png', color: 'bg-indigo-500' },
    { name: 'Adda52', logo: '/logos/adda52.png', color: 'bg-pink-500' },
  ]

  // Slideshow logic
  const itemsPerSlide = 4
  const totalSlides = Math.ceil(customers.length / itemsPerSlide)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(timer)
  }, [totalSlides])

  const getCurrentSlideItems = () => {
    const startIndex = currentSlide * itemsPerSlide
    return customers.slice(startIndex, startIndex + itemsPerSlide)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const handleImageError = (customerName) => {
    setImageErrors(prev => ({ ...prev, [customerName]: true }))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Trusted by Industry Leaders
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            From financial services to gaming, our clients rely on BizAcuity for their most critical data and analytics needs.
          </motion.p>

          <div className="relative overflow-hidden">
            {/* Left Arrow */}
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors border border-gray-200"
              style={{ transform: 'translateY(-50%)' }}
            >
              <ChevronLeft size={24} className="text-gray-600" />
            </motion.button>

            {/* Right Arrow */}
            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors border border-gray-200"
              style={{ transform: 'translateY(-50%)' }}
            >
              <ChevronRight size={24} className="text-gray-600" />
            </motion.button>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center mx-16"
              >
                {getCurrentSlideItems().map((customer, index) => (
                  <motion.div
                    key={`${currentSlide}-${customer.name}`}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex items-center justify-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="text-center">
                      <div className="w-32 h-32 rounded-xl mx-auto mb-4 flex items-center justify-center overflow-hidden bg-gray-50">
                        {!imageErrors[customer.name] ? (
                          <img
                            src={customer.logo}
                            alt={`${customer.name} logo`}
                            className="w-full h-full object-contain p-4"
                            onError={() => handleImageError(customer.name)}
                            onLoad={() => console.log(`✅ Loaded: ${customer.name}`)}
                          />
                        ) : (
                          <div className={`w-full h-full ${customer.color} rounded-xl flex items-center justify-center`}>
                            <span className="text-4xl font-bold text-white">
                              {customer.name.split(' ').map(word => word.charAt(0)).join('').slice(0, 2)}
                            </span>
                          </div>
                        )}
                      </div>
                      <p className="text-base font-semibold text-gray-800">{customer.name}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-primary-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Customers