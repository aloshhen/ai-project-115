import Navigation from './components/Navigation'
import Hero from './components/Hero'
import MenuSection from './components/MenuSection'
import Gallery from './components/Gallery'
import BookingForm from './components/BookingForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Navigation />
      <Hero />
      <MenuSection />
      <Gallery />
      <BookingForm />
      <Footer />
    </div>
  )
}

export default App