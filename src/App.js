import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import Gallary from "./components/Gallery/Gallary";
import ContactPage from "./components/ContactPage/ContactPage";
import NavbarTwo from "./components/common/NavbarTwo/NavbarTwo";
import Notice from "./components/Notice/Notice";
import Vision from "./components/AboutUs/Vision/Vision";
import Governance from "./components/AboutUs/Governance/Governance";
import WhoAreWe from "./components/AboutUs/WhoAreWe/WhoAreWe";
import UnderConstruction from "./components/UnderConstruction/UnderConstruction";

function App() {
  return (
    <>
      <div className="bg-red-600 mx-auto text-center text-white">
        *Website still under construction
      </div>
      <Navbar />
      <div style={{ width: "80%", margin: "0 auto" }}>
        <NavbarTwo />
        {/* <UnderConstruction /> */}
      </div>
      <div className="min-h-screen" style={{ width: "80%", margin: "0 auto" }}>
        <Switch>
          <Route exact path="/gallery" component={Gallary} />
          {/* <Route exact path="/contact" component={ContactPage} /> */}
          <Route exact path="/notice" component={Notice} />
          <Route exact path="/about/vision" component={Vision} />
          <Route exact path="/about/governance" component={Governance} />
          <Route exact path="/about/whoarewe" component={WhoAreWe} />
          <Route exact path="/" component={Home} />
          <Route exact component={UnderConstruction} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
