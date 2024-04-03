 import Activities from "./components/Activities";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import ImageSlider from "./components/ImageSlider";
import Plan from "./components/Plan";
import Rooms from "./components/Rooms";
import Topbar from "./components/Topbar";

export default function App() {
  return (
     <>
     <Topbar></Topbar>
     <Hero></Hero>
      <Activities></Activities>
      <Plan></Plan>
      <Booking></Booking>
      <ImageSlider></ImageSlider>
      <Rooms></Rooms>
      <Gallery></Gallery>
      <Footer></Footer>
     </>
  )
}