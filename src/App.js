import "./App.css";
import About from "./Web/About";
import Contact from "./Web/Contact";
import Footer from "./Web/Footer";
import Home from "./Web/Home";
import Navbar from "./Web/Navbar";
import Portfolio from "./Web/Portfolio";
import PricingPlan from "./Web/PricingPlan";
import PricingTable from "./Web/PricingTable";
import Services from "./Web/Services";
import Team from "./Web/Team";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Team />
      <PricingTable />
      <PricingPlan />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
