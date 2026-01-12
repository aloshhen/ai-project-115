import { motion } from 'framer-motion'
import { Coffee, Menu } from 'lucide-react'

function Navigation() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className="fixed top-0 left-0 right-0 z-50 bg-dark-900/50 backdrop-blur-md"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <Coffee className="text-blue-500" />
          <span className="text-xl font-bold tracking-tight">CoffeeHouse</span>
        </div>
        
        <div className="flex space-x-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg"
          >
            Меню
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-lg"
          >
            Бронь
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation