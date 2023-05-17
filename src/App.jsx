import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Course from './components/Courses/Course';
import Join from './components/JoinUs/Join';
import Benefits from './components/Benefits/Benefits';
import OurPosts from './components/OurPosts/OurPosts';
import Contact from './components/ContactUs/Contact';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';

function App() {

  return ( 
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Course/>
      <Join/>
      <Benefits/>
      <OurPosts/>
      <Contact/>
      <Footer/>
    </div>
  
  );
}


export default App; 

