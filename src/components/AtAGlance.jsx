import { motion } from 'framer-motion'
import { 
  Users, 
  Award, 
  UserCheck, 
  Users2, 
  Calendar, 
  Heart 
} from 'lucide-react'

const AtAGlance = () => {
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

  const cardVariants = {
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

  const glanceItems = [
    {
      icon: Users,
      title: 'About BizAcuity',
      description: 'Learn about our mission to transform businesses through data-driven insights and innovative analytics solutions.',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-blue-600',
      link: '#about'
    },
    {
      icon: Award,
      title: 'Leadership Team',
      description: 'Meet our experienced executives and industry experts who drive innovation and deliver exceptional value.',
      gradient: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-600',
      link: '#leadership'
    },
    {
      icon: UserCheck,
      title: 'Customers',
      description: 'Discover how leading organizations across industries trust BizAcuity for their analytics needs.',
      gradient: 'from-green-500/20 to-emerald-500/20',
      iconColor: 'text-green-600',
      link: '#customers'
    },
    {
      icon: Users2,
      title: 'Partners',
      description: 'Explore our strategic partnerships that enable us to deliver comprehensive solutions.',
      gradient: 'from-orange-500/20 to-red-500/20',
      iconColor: 'text-orange-600',
      link: '#partners'
    },
    {
      icon: Calendar,
      title: 'Events',
      description: 'Stay updated with our latest events, webinars, and industry conferences.',
      gradient: 'from-indigo-500/20 to-blue-500/20',
      iconColor: 'text-indigo-600',
      link: '#events'
    },
    {
      icon: Heart,
      title: 'Corporate Social Responsibility',
      description: 'Learn about our commitment to making a positive impact in communities and the environment.',
      gradient: 'from-pink-500/20 to-rose-500/20',
      iconColor: 'text-pink-600',
      link: '#csr'
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
            At A <span className="text-gradient">Glance</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover BizAcuity through different perspectives - from our story and leadership 
            to our valued customers and community impact.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {glanceItems.map((item, index) => {
            const IconComponent = item.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }}
                className={`relative p-8 bg-gradient-to-br ${item.gradient} backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group`}
              >
                <div className="absolute inset-0 bg-white/60 rounded-2xl" />
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-xl ${item.iconColor} bg-white/80 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={32} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="mt-6 flex items-center text-primary-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span>Learn More</span>
                    <motion.svg 
                      className="ml-2 w-4 h-4"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      whileHover={{ x: 5 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default AtAGlance