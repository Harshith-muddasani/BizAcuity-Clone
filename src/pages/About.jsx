import { motion } from 'framer-motion'
import { 
  Users, 
  Award, 
  Globe, 
  Heart,
  Lightbulb,
  Shield,
  TrendingUp
} from 'lucide-react'
import AnimatedCounter from '../components/AnimatedCounter'

const About = () => {
  const stats = [
    { number: 500, suffix: '+', label: 'Happy Clients', delay: 0.2 },
    { number: 98, suffix: '%', label: 'Success Rate', delay: 0.4 },
    { number: 50, suffix: '+', label: 'Expert Team', delay: 0.6 },
    { number: 5, suffix: ' Years', label: 'Experience', delay: 0.8 }
  ]

  const values = [
    {
      icon: Heart,
      title: "Customer-Centric",
      description: "Every decision we make is guided by what's best for our clients and their success."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We constantly push boundaries and embrace cutting-edge technologies to stay ahead."
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Your data and privacy are paramount. We maintain the highest security standards."
    },
    {
      icon: TrendingUp,
      title: "Results Driven",
      description: "We measure our success by the tangible results and growth we deliver to clients."
    }
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Former McKinsey consultant with 15+ years in business strategy and digital transformation.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "David Chen",
      role: "CTO",
      bio: "Ex-Google engineer specializing in machine learning and scalable data architectures.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Maria Rodriguez",
      role: "Head of Analytics",
      bio: "PhD in Data Science with expertise in predictive modeling and business intelligence.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "James Wilson",
      role: "VP of Sales",
      bio: "20+ years in B2B sales with a track record of building high-performing teams.",
      image: "/api/placeholder/300/300"
    }
  ]

  const timeline = [
    {
      year: "2019",
      title: "Founded",
      description: "BizAcuity was founded with a vision to democratize business intelligence."
    },
    {
      year: "2020", 
      title: "First 100 Clients",
      description: "Reached our first major milestone during the challenging pandemic year."
    },
    {
      year: "2021",
      title: "Series A Funding",
      description: "Secured $10M in Series A funding to accelerate product development."
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Expanded operations to Europe and Asia, serving clients worldwide."
    },
    {
      year: "2023",
      title: "AI Integration",
      description: "Launched AI-powered analytics platform with predictive capabilities."
    },
    {
      year: "2024",
      title: "500+ Clients",
      description: "Celebrated serving over 500 businesses across 25+ countries."
    }
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
              About <span className="text-gradient">BizAcuity</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              We're on a mission to empower businesses with intelligent solutions that transform 
              data into actionable insights, driving sustainable growth and competitive advantage.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat) => (
                <AnimatedCounter
                  key={stat.label}
                  end={stat.number}
                  suffix={stat.suffix}
                  label={stat.label}
                  delay={stat.delay}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2019 by a team of former consultants and tech veterans, BizAcuity 
                  emerged from a simple observation: most businesses were drowning in data but 
                  starving for insights.
                </p>
                <p>
                  We set out to bridge this gap by creating intelligent solutions that transform 
                  complex data into clear, actionable strategies. Today, we're proud to serve over 
                  500 businesses worldwide, from innovative startups to Fortune 500 companies.
                </p>
                <p>
                  Our commitment to excellence, innovation, and client success has made us a 
                  trusted partner for organizations looking to harness the power of data-driven 
                  decision making.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center">
                <Globe className="text-primary-600" size={120} />
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary-500 rounded-full flex items-center justify-center">
                <Award className="text-white" size={40} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 text-white rounded-2xl mb-6">
                  <value.icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
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
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The brilliant minds behind BizAcuity's innovative solutions and exceptional service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center overflow-hidden">
                    <Users className="text-primary-600" size={80} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From startup to industry leader - here's how we've grown and evolved.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full" />
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <div className="text-2xl font-bold text-primary-600 mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full border-4 border-white shadow-lg" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About