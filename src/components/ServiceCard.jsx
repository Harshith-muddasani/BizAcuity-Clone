import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features = [],
  price = null,
  popular = false,
  delay = 0 
}) => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: 'easeOut'
      }
    }
  }

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: delay + 0.3 + (i * 0.1),
        duration: 0.4
      }
    })
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      whileHover={{ 
        y: -12,
        scale: 1.02,
        transition: { duration: 0.3, ease: 'easeOut' }
      }}
      className={`group relative card p-8 h-full overflow-hidden ${
        popular 
          ? 'ring-2 ring-primary-500 bg-gradient-to-br from-primary-50 to-white' 
          : 'hover:shadow-2xl'
      }`}
    >
      {popular && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 0.2 }}
          className="absolute -top-3 -right-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1"
        >
          <Star size={14} fill="currentColor" />
          <span>Popular</span>
        </motion.div>
      )}

      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <motion.div
          whileHover={{ 
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.3 }
          }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-primary-500 to-secondary-500 text-white mb-6 group-hover:shadow-lg group-hover:shadow-primary-500/25 transition-shadow duration-300"
        >
          <Icon size={32} />
        </motion.div>

        <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-600 leading-relaxed mb-6 text-lg">
          {description}
        </p>

        {features.length > 0 && (
          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                custom={index}
                variants={featureVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center text-gray-700"
              >
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        )}

        {price && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: delay + 0.4 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <div className="text-3xl font-bold text-gray-900">
              {price}
              <span className="text-lg text-gray-500 font-normal">/month</span>
            </div>
          </motion.div>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-full flex items-center justify-center space-x-2 py-4 px-6 rounded-xl font-semibold transition-colors duration-300 group ${
            popular
              ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:from-primary-700 hover:to-secondary-700'
              : 'bg-gray-100 text-gray-700 hover:bg-primary-50 hover:text-primary-700 border-2 border-transparent hover:border-primary-200'
          }`}
        >
          <span>Get Started</span>
          <motion.div
            whileHover={{ x: 3 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight size={18} />
          </motion.div>
        </motion.button>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  )
}

export default ServiceCard