import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Partners = () => {
  const [imageErrors, setImageErrors] = useState({})
  const [currentSlide, setCurrentSlide] = useState(0)

  const partners = [
    { 
      name: 'AWS', 
      description: 'Cloud Infrastructure & Services',
      logo: '/logos/aws.png',
      color: 'from-orange-500 to-orange-600',
      fallbackColor: 'bg-orange-500'
    },
    { 
      name: 'Snowflake', 
      description: 'Data Cloud Platform',
      logo: '/logos/snowflake.png',
      color: 'from-blue-500 to-blue-600',
      fallbackColor: 'bg-blue-500'
    },
    { 
      name: 'Vertica', 
      description: 'Analytics Database',
      logo: '/logos/vertica.png',
      color: 'from-green-500 to-green-600',
      fallbackColor: 'bg-green-500'
    },
    { 
      name: 'Jaspersoft', 
      description: 'Business Intelligence',
      logo: '/logos/jaspersoft.png',
      color: 'from-purple-500 to-purple-600',
      fallbackColor: 'bg-purple-500'
    },
  ]

  // Slideshow logic - show 2 partners at a time
  const itemsPerSlide = 2
  const totalSlides = Math.ceil(partners.length / itemsPerSlide)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [totalSlides])

  const getCurrentSlideItems = () => {
    const startIndex = currentSlide * itemsPerSlide
    return partners.slice(startIndex, startIndex + itemsPerSlide)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const handleImageError = (partnerName) => {
    setImageErrors(prev => ({ ...prev, [partnerName]: true }))
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
    <section className="py-20 bg-white">
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
            Strategic Technology Partners
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            We collaborate with industry-leading technology partners to deliver cutting-edge solutions and maximize your business potential.
          </motion.p>

          <div className="relative overflow-hidden">
            {/* Left Arrow */}
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl rounded-full p-4 hover:bg-gray-50 transition-colors border border-gray-200"
              style={{ transform: 'translateY(-50%)' }}
            >
              <ChevronLeft size={28} className="text-gray-600" />
            </motion.button>

            {/* Right Arrow */}
            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl rounded-full p-4 hover:bg-gray-50 transition-colors border border-gray-200"
              style={{ transform: 'translateY(-50%)' }}
            >
              <ChevronRight size={28} className="text-gray-600" />
            </motion.button>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ x: 400, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -400, opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto px-20"
              >
                {getCurrentSlideItems().map((partner, index) => (
                  <motion.div
                    key={`${currentSlide}-${partner.name}`}
                    initial={{ y: 60, opacity: 0, scale: 0.9 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    whileHover={{ scale: 1.05, y: -8 }}
                    className="group p-10 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="w-24 h-24 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg overflow-hidden bg-gray-50">
                      {!imageErrors[partner.name] ? (
                        <img
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className="w-full h-full object-contain p-3"
                          onError={() => handleImageError(partner.name)}
                          onLoad={() => console.log(`✅ Loaded partner: ${partner.name}`)}
                        />
                      ) : (
                        <div className={`w-full h-full ${partner.fallbackColor} rounded-2xl flex items-center justify-center`}>
                          <span className="text-3xl font-bold text-white">
                            {partner.name.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors text-center">
                      {partner.name}
                    </h3>
                    <p className="text-gray-600 text-center text-lg">{partner.description}</p>
                    
                    {/* Partner Features */}
                    <div className="mt-6 flex justify-center">
                      <div className={`px-4 py-2 bg-gradient-to-r ${partner.color} text-white rounded-full text-sm font-medium shadow-md`}>
                        Trusted Partner
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Slide Navigation */}
            <div className="flex justify-center mt-10 space-x-3">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-primary-600 scale-125 shadow-lg' 
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

export default Partners