import { motion } from 'framer-motion'
import { 
  BarChart3, 
  Cloud, 
  Zap, 
  Settings, 
  Users, 
  Database, 
  Code 
} from 'lucide-react'

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: 'easeOut'
      }
    }
  }

  const services = [
    {
      icon: BarChart3,
      title: 'BI Reporting Services',
      description: 'Transform raw data into actionable insights with our comprehensive business intelligence and reporting solutions.',
      features: ['Interactive Dashboards', 'Real-time Analytics', 'Custom Reports', 'Data Visualization'],
      gradient: 'from-blue-600 to-cyan-600',
      delay: 0.1
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Leverage the power of cloud computing with scalable, secure, and cost-effective data solutions.',
      features: ['Cloud Migration', 'Data Warehousing', 'Scalable Infrastructure', 'Security & Compliance'],
      gradient: 'from-purple-600 to-pink-600',
      delay: 0.2
    },
    {
      icon: Zap,
      title: 'Power BI Services',
      description: 'Maximize your Microsoft Power BI investment with expert implementation and optimization services.',
      features: ['Power BI Implementation', 'Dashboard Development', 'Data Modeling', 'Training & Support'],
      gradient: 'from-yellow-500 to-orange-600',
      delay: 0.3
    },
    {
      icon: Settings,
      title: 'Managed Services',
      description: 'Focus on your core business while we manage your data infrastructure and analytics operations.',
      features: ['24/7 Monitoring', 'Performance Optimization', 'Maintenance & Updates', 'Technical Support'],
      gradient: 'from-green-600 to-emerald-600',
      delay: 0.4
    },
    {
      icon: Users,
      title: 'BI Consulting',
      description: 'Strategic guidance and expertise to help you make informed decisions about your data initiatives.',
      features: ['Data Strategy', 'Technology Assessment', 'ROI Analysis', 'Best Practices'],
      gradient: 'from-indigo-600 to-blue-600',
      delay: 0.5
    },
    {
      icon: Database,
      title: 'Data Management Services',
      description: 'Comprehensive data management solutions to ensure data quality, governance, and accessibility.',
      features: ['Data Integration', 'Quality Management', 'Master Data Management', 'Data Governance'],
      gradient: 'from-red-500 to-pink-600',
      delay: 0.6
    },
    {
      icon: Code,
      title: 'Application Development Services',
      description: 'Custom application development tailored to your specific business requirements and workflows.',
      features: ['Custom Applications', 'API Development', 'System Integration', 'Mobile Solutions'],
      gradient: 'from-teal-600 to-cyan-600',
      delay: 0.7
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive data and analytics services designed to transform your business 
            and drive measurable results across all industries.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.slice(0, 6).map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.03,
                  y: -10,
                  boxShadow: '0 25px 50px rgba(0,0,0,0.15)'
                }}
                className="relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative p-8">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={32} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors duration-300 group-hover:bg-primary-600"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {services.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-md mx-auto">
              {services.slice(6).map((service, index) => {
                const IconComponent = service.icon
                return (
                  <motion.div
                    key={index + 6}
                    whileHover={{ 
                      scale: 1.03,
                      y: -10,
                      boxShadow: '0 25px 50px rgba(0,0,0,0.15)'
                    }}
                    className="relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group cursor-pointer"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="relative p-8">
                      <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent size={32} />
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors duration-300 group-hover:bg-primary-600"
                      >
                        Learn More
                      </motion.button>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Services