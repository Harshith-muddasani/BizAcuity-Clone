import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock,
  ArrowRight,
  ExternalLink,
  Play,
  Award
} from 'lucide-react'

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "TechCorp's Revenue Transformation",
      client: "TechCorp Solutions",
      industry: "Technology",
      challenge: "Struggling with declining revenue and inefficient sales processes",
      solution: "Implemented AI-powered analytics and sales optimization platform",
      results: {
        revenue: "340% increase",
        efficiency: "65% improved",
        time: "6 months"
      },
      description: "TechCorp was facing significant challenges with their sales process and revenue growth. Our comprehensive analytics solution helped them identify bottlenecks, optimize their sales funnel, and implement data-driven strategies that resulted in exceptional growth.",
      image: "/api/placeholder/600/400",
      featured: true,
      testimonial: {
        quote: "BizAcuity transformed our entire approach to sales and marketing. The insights we gained were game-changing.",
        author: "Sarah Mitchell",
        role: "CEO, TechCorp Solutions"
      }
    },
    {
      id: 2,
      title: "RetailMax Operational Excellence",
      client: "RetailMax Chain",
      industry: "Retail",
      challenge: "High operational costs and inventory management issues",
      solution: "Deployed workforce analytics and inventory optimization system",
      results: {
        costs: "45% reduction",
        efficiency: "78% improvement",
        time: "4 months"
      },
      description: "RetailMax needed to streamline their operations across 200+ stores. Our solution provided real-time insights into inventory levels, staff productivity, and customer patterns, enabling them to optimize operations and significantly reduce costs.",
      image: "/api/placeholder/600/400",
      featured: false,
      testimonial: {
        quote: "The operational insights helped us make smarter decisions and improve our bottom line dramatically.",
        author: "Michael Johnson",
        role: "COO, RetailMax Chain"
      }
    },
    {
      id: 3,
      title: "StartupXYZ Scale-up Success",
      client: "StartupXYZ",
      industry: "SaaS",
      challenge: "Rapid scaling challenges and team productivity issues",
      solution: "Implemented comprehensive business intelligence and team analytics",
      results: {
        growth: "500% team growth",
        productivity: "94% retention",
        time: "12 months"
      },
      description: "StartupXYZ was scaling rapidly but struggling to maintain productivity and culture. Our analytics platform helped them optimize team performance, improve retention, and maintain high productivity during their growth phase.",
      image: "/api/placeholder/600/400",
      featured: true,
      testimonial: {
        quote: "BizAcuity's platform was instrumental in helping us scale efficiently while maintaining our company culture.",
        author: "Alex Chen",
        role: "Founder, StartupXYZ"
      }
    },
    {
      id: 4,
      title: "Manufacturing Plus Optimization",
      client: "Manufacturing Plus",
      industry: "Manufacturing",
      challenge: "Supply chain inefficiencies and quality control issues",
      solution: "Deployed predictive analytics for supply chain and quality management",
      results: {
        efficiency: "60% improvement",
        quality: "85% fewer defects",
        time: "8 months"
      },
      description: "Manufacturing Plus faced complex supply chain challenges and quality control issues. Our predictive analytics solution helped them anticipate problems, optimize their supply chain, and dramatically improve product quality.",
      image: "/api/placeholder/600/400",
      featured: false,
      testimonial: {
        quote: "The predictive capabilities have revolutionized our manufacturing process and quality control.",
        author: "David Rodriguez",
        role: "VP Operations, Manufacturing Plus"
      }
    },
    {
      id: 5,
      title: "FinanceFirst Digital Transformation",
      client: "FinanceFirst Bank",
      industry: "Financial Services",
      challenge: "Legacy systems and customer experience issues",
      solution: "Implemented customer analytics and digital transformation platform",
      results: {
        satisfaction: "92% customer satisfaction",
        digital: "300% digital adoption",
        time: "10 months"
      },
      description: "FinanceFirst needed to modernize their customer experience and migrate from legacy systems. Our analytics platform helped them understand customer behavior, optimize digital channels, and successfully complete their digital transformation.",
      image: "/api/placeholder/600/400",
      featured: false,
      testimonial: {
        quote: "BizAcuity made our digital transformation seamless and customer-focused.",
        author: "Jennifer Liu",
        role: "Chief Digital Officer, FinanceFirst Bank"
      }
    },
    {
      id: 6,
      title: "HealthcareNet Efficiency Boost",
      client: "HealthcareNet",
      industry: "Healthcare",
      challenge: "Patient flow optimization and resource allocation",
      solution: "Deployed healthcare analytics and resource optimization system",
      results: {
        efficiency: "55% operational efficiency",
        satisfaction: "88% patient satisfaction",
        time: "6 months"
      },
      description: "HealthcareNet wanted to improve patient care while optimizing resource allocation. Our healthcare-specific analytics solution helped them streamline patient flow, optimize staff scheduling, and improve overall patient satisfaction.",
      image: "/api/placeholder/600/400",
      featured: false,
      testimonial: {
        quote: "The insights into patient flow and resource optimization have transformed our operations.",
        author: "Dr. Maria Santos",
        role: "Chief Medical Officer, HealthcareNet"
      }
    }
  ]

  const stats = [
    { icon: TrendingUp, value: "340%", label: "Average Revenue Increase" },
    { icon: Users, value: "500+", label: "Successful Projects" },
    { icon: DollarSign, value: "$50M+", label: "Client Savings Generated" },
    { icon: Clock, value: "6 Mo", label: "Average Implementation Time" }
  ]

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const FeaturedCaseStudy = ({ study }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 mb-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            <Award size={16} className="mr-2" />
            Featured Case Study
          </div>
          
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            {study.title}
          </h3>
          
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            {study.description}
          </p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            {Object.entries(study.results).map(([key, value]) => (
              <div key={key} className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-primary-600 mb-1">{value}</div>
                <div className="text-sm text-gray-500 capitalize">{key}</div>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-gray-600 italic mb-4">"{study.testimonial.quote}"</p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                <Users size={20} className="text-primary-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">{study.testimonial.author}</div>
                <div className="text-sm text-gray-500">{study.testimonial.role}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center">
            <Play className="text-primary-600" size={64} />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
            <div className="text-sm text-gray-500">{study.industry}</div>
            <div className="font-semibold text-gray-900">{study.client}</div>
          </div>
        </div>
      </div>
    </motion.div>
  )

  return (
    <div className="pt-20">
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-5xl font-bold text-gray-900 mb-6"
            >
              Success <span className="text-gradient">Stories</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Real businesses, real results. Discover how our solutions have transformed 
              operations and driven exceptional growth for companies across industries.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg mb-4">
                    <stat.icon className="text-primary-600" size={28} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {caseStudies.find(study => study.featured) && (
            <FeaturedCaseStudy study={caseStudies.find(study => study.featured)} />
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              More <span className="text-gradient">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore additional case studies showcasing the diverse impact of our solutions 
              across different industries and business challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.filter(study => !study.featured).map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group card p-6 cursor-pointer h-full"
              >
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
                  <Play className="text-primary-600 group-hover:scale-110 transition-transform duration-300" size={40} />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 rounded-full text-xs font-medium text-gray-700">
                    {study.industry}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {study.title}
                </h3>

                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {study.description.substring(0, 120)}...
                </p>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {Object.entries(study.results).map(([key, value]) => (
                    <div key={key} className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-primary-600 mb-1">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900 text-sm">{study.client}</div>
                      <div className="text-xs text-gray-500">{study.testimonial.author}</div>
                    </div>
                    <motion.div
                      whileHover={{ x: 3 }}
                      className="text-primary-600"
                    >
                      <ArrowRight size={20} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ready to Write Your <span className="text-gradient">Success Story</span>?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Join the growing list of successful businesses that have transformed their 
                operations with BizAcuity's intelligent solutions. Let's discuss how we 
                can help you achieve similar results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center space-x-2"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight size={20} />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary flex items-center space-x-2"
                >
                  <span>Download Case Studies</span>
                  <ExternalLink size={20} />
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-gradient mb-2">98%</div>
                  <div className="text-gray-600">Client Success Rate</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Revenue Growth</span>
                    <span className="font-semibold text-primary-600">+340%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Efficiency Improvement</span>
                    <span className="font-semibold text-secondary-600">+65%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Cost Reduction</span>
                    <span className="font-semibold text-accent-600">-45%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Implementation Time</span>
                    <span className="font-semibold text-primary-600">6 Months</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies