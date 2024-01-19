import Experties from "./components/experties/Experties";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import css from "./styles/app.module.scss";
import Alert from "./components/alert/Alert";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/footer";
import NewServices from "./components/newServices/NewServices";

const App = () => {
  return <div className={`bg-primary ${css.container}`}>
    <Header/>
    <Alert/>
    <Hero/>
    <Experties/>
    <Services/>
    <NewServices/>
    <Contact/>
    <Footer/>
  </div>
};

export default App;
