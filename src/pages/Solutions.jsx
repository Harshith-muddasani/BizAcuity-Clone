import { motion } from 'framer-motion'
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Zap,
  Shield,
  Globe,
  Brain,
  Target,
  Database,
  Cog,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import ServiceCard from '../components/ServiceCard'

const Solutions = () => {
  const solutions = [
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Transform raw data into meaningful insights with our comprehensive BI platform featuring real-time dashboards and advanced analytics.",
      features: [
        "Interactive dashboards",
        "Real-time data visualization", 
        "Custom reporting tools",
        "Data warehouse integration",
        "Mobile-responsive design"
      ],
      price: "$299",
      popular: false
    },
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Leverage machine learning and artificial intelligence to predict trends, identify patterns, and automate decision-making processes.",
      features: [
        "Predictive modeling",
        "Automated insights",
        "Pattern recognition",
        "Anomaly detection",
        "Natural language queries"
      ],
      price: "$499",
      popular: true
    },
    {
      icon: TrendingUp,
      title: "Growth Optimization",
      description: "Accelerate business growth with data-driven strategies, market analysis, and performance optimization recommendations.",
      features: [
        "Growth strategy planning",
        "Market opportunity analysis",
        "Conversion optimization",
        "Performance benchmarking",
        "ROI tracking & analysis"
      ],
      price: "$399",
      popular: false
    },
    {
      icon: Users,
      title: "Workforce Analytics",
      description: "Optimize team performance and productivity through comprehensive workforce analytics and talent management insights.",
      features: [
        "Employee performance tracking",
        "Skill gap analysis",
        "Talent retention insights",
        "Productivity optimization",
        "Team collaboration metrics"
      ],
      price: "$249",
      popular: false
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Seamlessly connect and integrate data from multiple sources to create a unified view of your business operations.",
      features: [
        "Multi-source data integration",
        "Real-time data synchronization",
        "API connectivity",
        "Data quality management",
        "Automated data pipelines"
      ],
      price: "$349",
      popular: false
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Protect your business with advanced security analytics, threat detection, and compliance monitoring solutions.",
      features: [
        "Threat detection & analysis",
        "Compliance monitoring",
        "Security risk assessment",
        "Incident response planning",
        "Data privacy protection"
      ],
      price: "$599",
      popular: false
    }
  ]

  const industries = [
    {
      icon: Globe,
      name: "E-commerce",
      description: "Optimize sales, inventory, and customer experience"
    },
    {
      icon: Zap,
      name: "Technology",
      description: "Drive innovation and product development insights"
    },
    {
      icon: Target,
      name: "Marketing",
      description: "Enhance campaign performance and ROI"
    },
    {
      icon: Cog,
      name: "Manufacturing",
      description: "Streamline operations and supply chain"
    }
  ]

  const benefits = [
    "Reduce decision-making time by up to 60%",
    "Increase operational efficiency by 45%", 
    "Improve customer satisfaction scores by 35%",
    "Generate 3x faster insights from your data",
    "Achieve 25% cost reduction through optimization",
    "Scale analytics capabilities without limits"
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
              Intelligent <span className="text-gradient">Solutions</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Comprehensive suite of analytics and intelligence solutions designed to transform 
              your business operations and drive sustainable growth.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight size={20} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Schedule Demo
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Solution Suite</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of solutions or combine multiple services 
              for maximum impact on your business performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <ServiceCard
                key={solution.title}
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
                features={solution.features}
                price={solution.price}
                popular={solution.popular}
                delay={index * 0.1}
              />
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
                Proven <span className="text-gradient">Results</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our solutions deliver measurable impact across all aspects of your business, 
                from operational efficiency to customer satisfaction and revenue growth.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="text-primary-600 flex-shrink-0" size={24} />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="text-3xl font-bold text-primary-600 mb-2">60%</div>
                    <div className="text-gray-600">Faster Decisions</div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="text-3xl font-bold text-secondary-600 mb-2">45%</div>
                    <div className="text-gray-600">Efficiency Gain</div>
                  </div>
                </div>
                <div className="space-y-6 mt-8">
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="text-3xl font-bold text-accent-600 mb-2">35%</div>
                    <div className="text-gray-600">Higher Satisfaction</div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="text-3xl font-bold text-primary-600 mb-2">3x</div>
                    <div className="text-gray-600">Faster Insights</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industry <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our solutions are tailored to meet the unique challenges and opportunities 
              across different industries and business sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="text-center p-8 card group cursor-pointer"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <industry.icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {industry.name}
                </h3>
                <p className="text-gray-600">
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Ready to Get Started?
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl mb-8 max-w-2xl mx-auto opacity-90"
            >
              Choose the solution that fits your needs or contact us for a custom package 
              tailored to your specific requirements.
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
                <span>Start Free Trial</span>
                <ArrowRight size={20} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                Contact Sales
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Solutions