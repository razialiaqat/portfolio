
// import './App.css';
// import Home from './components/pages/Home';
// import Header from './layout/Header';

// function App() {
//   return (
//     <>
//       <Header/>
//       <div className='container'>

//       <Home/>
//       </div>
//     </>
//   );
// }

// export default App;
import React from "react";
import Header from "./layout/Header";

import Home from "./components/pages/Home";
import Skills from "./components/pages/Skills";
import Experience from "./components/pages/Experience";
import Contact from "./components/pages/Contact";
import Footer from "./layout/Footer";


const App = () => {
  return (
    <div>
      <Header />
      <Home/>
      <Skills/>
      <Experience/>
      <Contact/>
      <Footer/>
      
    </div>
  );
};

export default App;
