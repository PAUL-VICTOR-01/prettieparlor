import AnnouncementBar from './components/AnnouncementBar.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Gallery from './components/Gallery.jsx'
import Feature from './components/Feature.jsx'
import About from './components/About.jsx'
import Training from './components/Training.jsx'
import Testimonial from './components/Testimonial.jsx'
import Booking from './components/Booking.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

export default function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Feature />
        <About />
        <Training />
        <Testimonial />
        <Booking />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
