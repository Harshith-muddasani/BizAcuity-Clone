import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  link = null,
  gradient = false,
  delay = 0 
}) => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: 'easeOut'
      }
    }
  }

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  }

  const arrowVariants = {
    hover: {
      x: 5,
      transition: {
        duration: 0.2,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: 'easeOut' }
      }}
      className={`group relative card p-8 h-full cursor-pointer overflow-hidden ${
        gradient ? 'bg-gradient-to-br from-primary-50 to-secondary-50' : ''
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <motion.div
          variants={iconVariants}
          whileHover="hover"
          className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
            gradient 
              ? 'bg-gradient-to-br from-primary-500 to-secondary-500 text-white' 
              : 'bg-primary-100 text-primary-600 group-hover:bg-primary-500 group-hover:text-white'
          } transition-colors duration-300`}
        >
          <Icon size={28} />
        </motion.div>

        <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-600 leading-relaxed mb-6">
          {description}
        </p>

        {link && (
          <motion.div
            className="flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-300"
            whileHover="hover"
          >
            <span className="mr-2">{link.text}</span>
            <motion.div variants={arrowVariants}>
              <ArrowRight size={16} />
            </motion.div>
          </motion.div>
        )}
      </div>

      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-100/20 to-transparent rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500" />
    </motion.div>
  )
}

export default FeatureCard