import { motion } from 'framer-motion'
import { 
  Brain, 
  TrendingUp, 
  Users, 
  Target, 
  Zap, 
  Shield,
  BarChart3,
  Clock
} from 'lucide-react'

const Platform = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms analyze player behavior and predict trends.'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Analytics',
      description: 'Monitor gaming metrics and performance indicators in real-time.'
    },
    {
      icon: Users,
      title: 'Player Segmentation',
      description: 'Automatically segment players based on behavior, preferences, and value.'
    },
    {
      icon: Target,
      title: 'Personalized Experiences',
      description: 'Deliver tailored gaming experiences that increase engagement and retention.'
    },
    {
      icon: Zap,
      title: 'Instant Recommendations',
      description: 'Generate personalized game and content recommendations instantly.'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Identify and mitigate risks with advanced fraud detection and responsible gaming tools.'
    },
    {
      icon: BarChart3,
      title: 'Performance Optimization',
      description: 'Optimize game performance and user experience based on data-driven insights.'
    },
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Continuous monitoring and alerting for critical gaming metrics and anomalies.'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-primary-900 to-secondary-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-primary-500/5 to-secondary-500/5" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-6 py-3 bg-primary-500/20 rounded-full text-primary-300 text-sm font-medium mb-6 backdrop-blur-sm border border-primary-500/30"
          >
            <Brain className="mr-2" size={20} />
            Featured Platform
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
              AI-Driven Gaming Analytics
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Revolutionize your casino and iGaming operations with our cutting-edge AI analytics platform. 
            Gain unprecedented insights into player behavior, optimize experiences, and maximize revenue.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl text-white font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              Explore Platform
            </button>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-primary-300">
                Powerful Features for Gaming Success
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Our AI-driven platform combines advanced analytics, machine learning, and real-time 
                processing to deliver actionable insights that drive growth and player satisfaction.
              </p>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 p-2 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg">
                      <IconComponent size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-3xl" />
              
              <div className="relative">
                <div className="bg-gray-900/80 rounded-2xl p-6 mb-6 border border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-white">Live Gaming Analytics</h4>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Active Players</span>
                      <motion.span 
                        className="text-primary-400 font-bold"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        12,847
                      </motion.span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Revenue (24h)</span>
                      <motion.span 
                        className="text-green-400 font-bold"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      >
                        $2.1M
                      </motion.span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Player Retention</span>
                      <motion.span 
                        className="text-secondary-400 font-bold"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      >
                        94.2%
                      </motion.span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary-500/20 rounded-xl p-4 text-center border border-primary-500/30">
                    <div className="text-2xl font-bold text-primary-400 mb-1">AI</div>
                    <div className="text-xs text-gray-300">Powered</div>
                  </div>
                  <div className="bg-secondary-500/20 rounded-xl p-4 text-center border border-secondary-500/30">
                    <div className="text-2xl font-bold text-secondary-400 mb-1">24/7</div>
                    <div className="text-xs text-gray-300">Monitoring</div>
                  </div>
                </div>
              </div>
            </div>
            
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-500/30 to-secondary-500/30 rounded-full blur-xl"
            />
            
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-secondary-500/20 to-primary-500/20 rounded-full blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Platform