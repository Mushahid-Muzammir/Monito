import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pets from "./components/Pets";
import Card from "./components/Card";
import Banner from "./components/Banner";
import Products from "./components/Products";
import Sellers from "./components/Sellers";
import PetKnowledge from "./components/PetKnowledge";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#FCEED5]">
      <Navbar/>
      <Hero/>
      <Pets/>
      <Card/>
      <Banner/>
      <Products/>
      <Sellers/>
      <PetKnowledge/>
      <Footer/>
    </div>
  );
}

export default App;
