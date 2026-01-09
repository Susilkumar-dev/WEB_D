// frontend/src/pages/Contact.jsx - UPDATED (With Team Leader Photo)
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, Award, Briefcase } from 'lucide-react'
import { useState } from 'react'
import toast from 'react-hot-toast'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  // Team leader info with photo
  const teamLeader = {
    name: 'Alex Johnson',
    role: 'Lead Developer & Instructor',
    bio: 'Full-stack developer with 8+ years of experience. Passionate about teaching and creating exceptional learning experiences.',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    email: 'alex@devroadmap.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    social: {
      linkedin: 'https://linkedin.com/in/alexjohnson',
      github: 'https://github.com/alexjohnson',
      twitter: 'https://twitter.com/alexj_dev'
    },
    achievements: [
      '10+ Open Source Projects',
      '5+ Years Teaching Experience',
      '1000+ Students Taught',
      'AWS Certified Developer'
    ]
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      toast.success('Message sent successfully! We will get back to you soon.')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold text-center mb-6">
            Contact <span className="gradient-text">Our Team</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Get in touch with our expert instructors and support team. We're here to help you succeed!
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Team Leader Card */}
          <div className="lg:col-span-1">
            <div className="glass-card p-8 mb-8">
              <div className="text-center mb-8">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur-xl" />
                  <img
                    src={teamLeader.photo}
                    alt={teamLeader.name}
                    className="relative w-48 h-48 rounded-full object-cover border-4 border-white dark:border-gray-800"
                  />
                </div>
                <h2 className="text-2xl font-bold mb-2">{teamLeader.name}</h2>
                <p className="text-primary-600 dark:text-primary-400 mb-4">{teamLeader.role}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{teamLeader.bio}</p>
                
                {/* Social Links */}
                <div className="flex justify-center space-x-4 mb-8">
                  <a href={teamLeader.social.linkedin} className="p-3 glass-effect rounded-xl hover:shadow-lg transition-all">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href={teamLeader.social.github} className="p-3 glass-effect rounded-xl hover:shadow-lg transition-all">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href={teamLeader.social.twitter} className="p-3 glass-effect rounded-xl hover:shadow-lg transition-all">
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>

                {/* Achievements */}
                <div className="space-y-3">
                  {teamLeader.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center glass-effect p-3 rounded-xl">
                      <Award className="h-5 w-5 text-yellow-500 mr-3" />
                      <span className="text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-6">Direct Contact</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 rounded-xl bg-primary-500/10 text-primary-600 dark:text-primary-400 mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <a href={`mailto:${teamLeader.email}`} className="text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors">
                      {teamLeader.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <a href={`tel:${teamLeader.phone}`} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                      {teamLeader.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 rounded-xl bg-green-500/10 text-green-600 dark:text-green-400 mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Location</h4>
                    <span className="text-gray-600 dark:text-gray-400">{teamLeader.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass-card p-8 mb-8">
              <div className="flex items-center mb-8">
                <Briefcase className="h-8 w-8 text-primary-600 dark:text-primary-400 mr-3" />
                <h2 className="text-3xl font-bold">Send us a message</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-3">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl glass-effect focus:ring-4 focus:ring-primary-500/30 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl glass-effect focus:ring-4 focus:ring-primary-500/30 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-3">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl glass-effect focus:ring-4 focus:ring-primary-500/30 focus:border-transparent"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="8"
                    className="w-full px-6 py-4 rounded-2xl glass-effect focus:ring-4 focus:ring-primary-500/30 focus:border-transparent"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center py-5 text-lg"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="h-6 w-6 mr-3" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="p-6 glass-effect rounded-2xl">
                  <h3 className="font-bold text-lg mb-3">How long does it take to get a response?</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We typically respond within 24 hours during business days. For urgent inquiries, you can reach Alex directly via the contact information provided.
                  </p>
                </div>
                <div className="p-6 glass-effect rounded-2xl">
                  <h3 className="font-bold text-lg mb-3">Do you offer one-on-one mentoring?</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Yes! Alex offers personalized mentoring sessions. Mention your interest in the message, and we'll schedule a consultation call.
                  </p>
                </div>
                <div className="p-6 glass-effect rounded-2xl">
                  <h3 className="font-bold text-lg mb-3">Can I contribute to DevRoadmap?</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Absolutely! We welcome contributions from the community. Check our GitHub repository or contact us with your ideas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact