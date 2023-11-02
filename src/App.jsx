// import './App.css';
// import { createElement } from "react";
import Nav from './components/Navigation';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div className="root">
      <Nav />
      <Header />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
