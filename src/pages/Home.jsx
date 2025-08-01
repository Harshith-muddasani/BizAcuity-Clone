import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import Customers from '../components/Customers'
import Partners from '../components/Partners'

const Home = () => {
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
    <div className="overflow-hidden">
      <HeroSection
        title="Seeing the big picture in small details"
        subtitle="🚀 Welcome to BizAcuity"
        description="Transform your business with cutting-edge analytics, AI-driven insights, and comprehensive data solutions. We've built 1000+ data pipelines, delivered 75+ AI analytical models, and completed 50+ end-to-end BI projects with 85% revenue from long-term clients."
        primaryCTA="Get Started"
        secondaryCTA="Watch Demo"
        showVideo={true}
        gradient={true}
      />

      <Customers />
      <Partners />

      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl font-bold mb-4"
            >
              Ready to Transform Your Business?
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl mb-8 max-w-2xl mx-auto opacity-90"
            >
              Join industry leaders who trust BizAcuity to drive their data initiatives and business success.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight size={20} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                Schedule Consultation
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home