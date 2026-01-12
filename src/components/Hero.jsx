import { motion } from 'framer-motion'
import { BackgroundBeams } from './ui/background-beams'

function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <BackgroundBeams />
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="text-center z-10 px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 bg-clip-text text-transparent">
          Вкус Настоящего Кофе
        </h1>
        
        <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
          Уютное место, где каждый глоток — это путешествие в мир изысканных вкусов
        </p>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-3 bg-blue-500 text-white rounded-full text-lg font-semibold"
        >
          Забронировать Столик
        </motion.button>
      </motion.div>
    </div>
  )
}

export default Hero