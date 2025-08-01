import { motion } from 'framer-motion'
import { 
  FileText, 
  BookOpen, 
  Video, 
  Newspaper, 
  PenTool,
  Download,
  Calendar,
  ExternalLink,
  Clock,
  Users
} from 'lucide-react'

const Resources = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  const resources = [
    {
      icon: FileText,
      title: 'Case Studies',
      description: 'Explore real-world success stories and learn how BizAcuity has transformed businesses across industries.',
      count: '25+',
      gradient: 'from-blue-600 to-cyan-600',
      bgGradient: 'from-blue-50 to-cyan-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      items: [
        'Financial Services Transformation',
        'Casino Revenue Optimization',
        'Real Estate Analytics Success'
      ]
    },
    {
      icon: BookOpen,
      title: 'White Papers',
      description: 'Deep-dive into industry insights, best practices, and technical knowledge from our experts.',
      count: '15+',
      gradient: 'from-purple-600 to-pink-600',
      bgGradient: 'from-purple-50 to-pink-50',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      items: [
        'AI in Gaming Analytics',
        'Data Governance Best Practices',
        'Cloud Migration Strategies'
      ]
    },
    {
      icon: Video,
      title: 'Webinars',
      description: 'Join our live sessions and on-demand webinars featuring industry experts and thought leaders.',
      count: '30+',
      gradient: 'from-green-600 to-emerald-600',
      bgGradient: 'from-green-50 to-emerald-50',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      items: [
        'Weekly Data Insights Sessions',
        'Industry Expert Panels',
        'Technical Deep Dives'
      ]
    },
    {
      icon: Newspaper,
      title: 'Press Release',
      description: 'Stay updated with the latest company news, product launches, and partnership announcements.',
      count: '20+',
      gradient: 'from-orange-600 to-red-600',
      bgGradient: 'from-orange-50 to-red-50',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      items: [
        'Product Launch Announcements',
        'Partnership News',
        'Industry Recognition'
      ]
    },
    {
      icon: PenTool,
      title: 'Blogs',
      description: 'Read insights, tips, and industry trends from our data scientists and analytics experts.',
      count: '100+',
      gradient: 'from-indigo-600 to-blue-600',
      bgGradient: 'from-indigo-50 to-blue-50',
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
      items: [
        'Analytics Best Practices',
        'Industry Trend Analysis',
        'Technical Tutorials'
      ]
    }
  ]

  const featuredContent = [
    {
      type: 'Case Study',
      title: 'How Online Casino Increased Revenue by 45%',
      description: 'A comprehensive look at how AI-driven analytics transformed player engagement',
      date: 'January 2024',
      readTime: '8 min read',
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      type: 'White Paper',
      title: 'The Future of Gaming Analytics',
      description: 'Exploring emerging trends and technologies in the gaming industry',
      date: 'December 2023',
      readTime: '15 min read',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      type: 'Webinar',
      title: 'Real-time Risk Management in Financial Services',
      description: 'Expert panel discussion on modern risk management strategies',
      date: 'February 2024',
      readTime: '45 min watch',
      gradient: 'from-green-600 to-teal-600'
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
            Knowledge <span className="text-gradient">Resources</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our comprehensive library of resources to stay informed about 
            industry trends, best practices, and innovative solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {resources.map((resource, index) => {
            const IconComponent = resource.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.03,
                  y: -8,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.12)'
                }}
                className={`relative bg-gradient-to-br ${resource.bgGradient} rounded-2xl p-8 border border-gray-100 cursor-pointer group overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${resource.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-4 ${resource.iconBg} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={28} className={resource.iconColor} />
                    </div>
                    <div className={`px-3 py-1 bg-white rounded-full text-sm font-bold ${resource.iconColor}`}>
                      {resource.count}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {resource.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {resource.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center text-sm text-gray-600">
                        <div className={`w-1.5 h-1.5 rounded-full mr-3 bg-gradient-to-r ${resource.gradient}`} />
                        {item}
                      </div>
                    ))}
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 bg-gradient-to-r ${resource.gradient} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2`}
                  >
                    <span>Explore {resource.title}</span>
                    <ExternalLink size={16} />
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Featured <span className="text-gradient">Content</span>
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.02,
                  y: -5
                }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group cursor-pointer"
              >
                <div className={`h-2 bg-gradient-to-r ${content.gradient}`} />
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${content.gradient} text-white text-xs font-semibold rounded-full`}>
                      {content.type}
                    </span>
                    <div className="flex items-center text-xs text-gray-500 space-x-4">
                      <div className="flex items-center">
                        <Calendar size={12} className="mr-1" />
                        {content.date}
                      </div>
                      <div className="flex items-center">
                        <Clock size={12} className="mr-1" />
                        {content.readTime}
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {content.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {content.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors flex items-center"
                    >
                      Read More
                      <motion.div className="ml-2">
                        <ExternalLink size={14} />
                      </motion.div>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 text-gray-400 hover:text-primary-600 transition-colors"
                    >
                      <Download size={16} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-12 border border-primary-100"
        >
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary-100 rounded-full">
                <Users size={32} className="text-primary-600" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Updated with Our Newsletter
            </h3>
            
            <p className="text-gray-600 mb-8">
              Get the latest insights, case studies, and industry trends delivered 
              directly to your inbox every month.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resources