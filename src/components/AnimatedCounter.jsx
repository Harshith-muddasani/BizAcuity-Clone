import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const AnimatedCounter = ({ 
  end, 
  duration = 2, 
  prefix = '', 
  suffix = '', 
  decimals = 0,
  label = '',
  delay = 0 
}) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return

    const timer = setTimeout(() => {
      let startTime
      const startValue = 0
      const endValue = typeof end === 'string' ? parseFloat(end) : end

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentCount = startValue + (endValue - startValue) * easeOutQuart
        
        setCount(currentCount)
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      
      requestAnimationFrame(animate)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [end, duration, isInView, delay])

  const formatNumber = (num) => {
    if (decimals > 0) {
      return num.toFixed(decimals)
    }
    return Math.floor(num).toString()
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: 'easeOut'
      }
    }
  }

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 group"
    >
      <motion.div
        variants={pulseVariants}
        animate={isInView ? "animate" : ""}
        className="relative"
      >
        <div className="text-4xl md:text-5xl font-bold text-gradient mb-2 font-mono">
          {prefix}
          <motion.span
            key={count}
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 1 }}
            className="inline-block"
          >
            {formatNumber(count)}
          </motion.span>
          {suffix}
        </div>
        
        {label && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.5 }}
            className="text-gray-600 font-medium text-lg group-hover:text-primary-600 transition-colors duration-300"
          >
            {label}
          </motion.p>
        )}
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-secondary-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  )
}

export default AnimatedCounter