import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from "./components/Navbar/Navbar"
import { Route, Switch} from "react-router-dom"
import Gallary from './components/Gallery/Gallary';
import ContactPage from './components/ContactPage/ContactPage';
import NavbarTwo from './components/common/NavbarTwo/NavbarTwo';
import Notice from './components/Notice/Notice';

function App() {

  return (
    <>
     <Navbar />
     <div style={{width: '80%', margin: '0 auto'}}>
     <NavbarTwo />
     </div>
     <div className="min-h-screen" style={{width:'80%', margin: '0 auto'}}>
       <Switch>
       <Route exact path="/gallery" component={Gallary} />
       {/* <Route exact path="/contact" component={ContactPage} /> */}
       <Route exact path="/notice" component={Notice} />
       <Route exact path="/" component={Home} />
       </Switch>
     </div>
     <Footer />
    </>
  );
}

export default App;
