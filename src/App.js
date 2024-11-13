import logo from './logo.svg';
import './App.css';
import Header from "./layouts/Header";
import Banner from "./pages/Banner";
import About from "./pages/About";
import WhyUs from './pages/Why';
import Skills from './pages/Skills';
import Services from './pages/Services';
import CTA from './components/CTA';
import Portfolio from './pages/Portfolio';
import ContactUs from './pages/ContactUs';
import Footer from './layouts/Footer';

function App() {
  return (
    <div className="App">
      <Header/>

      <main className='main'>
        <Banner/>
        <About/>
        {/* <WhyUs/> */}
        <Skills/> 
        <Services/>
        <CTA />
        <Portfolio/>
        <ContactUs/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
