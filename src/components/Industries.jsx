import { motion } from 'framer-motion'
import { 
  DollarSign, 
  Dice6, 
  Home, 
  Phone, 
  Gamepad2, 
  Calendar, 
  Target,
  TrendingUp,
  BarChart3,
  Zap
} from 'lucide-react'

const Industries = () => {
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
    hidden: { opacity: 0, y: 60, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut'
      }
    }
  }

  const industries = [
    {
      icon: DollarSign,
      title: 'Financial Services',
      subtitle: 'Real-time Risk Management',
      description: 'Leverage Event-Driven Architecture (EDA) and Machine Learning for comprehensive risk assessment and fraud detection.',
      features: ['Real-time Fraud Detection', 'Risk Assessment Models', 'Regulatory Compliance', 'Portfolio Analytics'],
      gradient: 'from-green-600 to-emerald-600',
      accentColor: 'text-green-600',
      bgPattern: 'bg-green-50'
    },
    {
      icon: Dice6,
      title: 'Online Casino',
      subtitle: 'Personalized Player Experience',
      description: 'Enhance player engagement with AI-driven analytics that deliver personalized gaming experiences and increase lifetime value.',
      features: ['Player Behavior Analysis', 'Personalized Recommendations', 'Churn Prevention', 'Revenue Optimization'],
      gradient: 'from-purple-600 to-pink-600',
      accentColor: 'text-purple-600',
      bgPattern: 'bg-purple-50'
    },
    {
      icon: Home,
      title: 'Real Estate',
      subtitle: 'Customer & Tenant Relationships',
      description: 'Strengthen relationships through data-driven insights that improve customer satisfaction and optimize property management.',
      features: ['Property Analytics', 'Customer Insights', 'Market Trends', 'Predictive Maintenance'],
      gradient: 'from-blue-600 to-cyan-600',
      accentColor: 'text-blue-600',
      bgPattern: 'bg-blue-50'
    },
    {
      icon: Phone,
      title: 'Telecom',
      subtitle: 'Enhanced Data Analytics',
      description: 'Improve operational efficiency and customer experience with advanced analytics capabilities and network optimization.',
      features: ['Network Optimization', 'Customer Analytics', 'Service Quality Monitoring', 'Predictive Maintenance'],
      gradient: 'from-orange-600 to-red-600',
      accentColor: 'text-orange-600',
      bgPattern: 'bg-orange-50'
    },
    {
      icon: Gamepad2,
      title: 'Land-Based Casino',
      subtitle: 'Analytics & Player Development',
      description: 'Enhance integrations and player development programs with comprehensive analytics and operational insights.',
      features: ['Player Development', 'Operational Analytics', 'System Integration', 'Performance Tracking'],
      gradient: 'from-indigo-600 to-purple-600',
      accentColor: 'text-indigo-600',
      bgPattern: 'bg-indigo-50'
    },
    {
      icon: Calendar,
      title: 'Event Technologies',
      subtitle: 'Real-time Event Analytics',
      description: 'Optimize event logistics and operations with real-time analytics for attendee management and resource allocation.',
      features: ['Attendee Analytics', 'Resource Optimization', 'Real-time Monitoring', 'Event Performance'],
      gradient: 'from-teal-600 to-green-600',
      accentColor: 'text-teal-600',
      bgPattern: 'bg-teal-50'
    },
    {
      icon: Target,
      title: 'Sports Betting',
      subtitle: 'Player Engagement & LTV',
      description: 'Increase player engagement and lifetime value through advanced analytics and personalized betting experiences.',
      features: ['Engagement Analytics', 'Lifetime Value Optimization', 'Betting Patterns', 'Risk Management'],
      gradient: 'from-red-600 to-pink-600',
      accentColor: 'text-red-600',
      bgPattern: 'bg-red-50'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Industries & <span className="text-gradient">Use Cases</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how BizAcuity transforms businesses across diverse industries with 
            tailored analytics solutions and proven results.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {industries.map((industry, index) => {
            const IconComponent = industry.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  rotateY: 5,
                  boxShadow: '0 25px 50px rgba(0,0,0,0.15)'
                }}
                className="relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group cursor-pointer transform-gpu"
                style={{ perspective: '1000px' }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${industry.gradient}`} />
                
                <div className="relative p-8">
                  <div className="flex items-center mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${industry.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={28} />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {industry.title}
                      </h3>
                      <p className={`text-sm font-medium ${industry.accentColor}`}>
                        {industry.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {industry.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {industry.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center text-sm text-gray-600 group-hover:text-gray-700"
                      >
                        <div className={`w-2 h-2 rounded-full mr-3 bg-gradient-to-r ${industry.gradient}`} />
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 group-hover:border-gray-200">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`text-sm font-medium ${industry.accentColor} hover:underline`}
                    >
                      Learn More
                    </motion.button>
                    
                    <motion.div
                      className="flex space-x-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {[TrendingUp, BarChart3, Zap].map((Icon, iconIndex) => (
                        <Icon 
                          key={iconIndex} 
                          size={16} 
                          className="text-gray-400 group-hover:text-gray-600 transition-colors" 
                        />
                      ))}
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 border-2 border-transparent group-hover:border-primary-200 rounded-2xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                />
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Don't See Your Industry?
            </h3>
            <p className="text-gray-600 mb-6">
              We work with businesses across all sectors. Contact us to discuss how 
              BizAcuity can transform your specific industry challenges.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Contact Us Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Industries