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
import Ngo from "./components/Partnership/Ngo";
import Ingos from "./components/Partnership/Ingos";
import Gov from "./components/Partnership/Gov";
import Programmes from "./components/Programmes/Programmes";
import NoticeDetails from "./components/Notice/NoticeDetails";
import Test from "./components/Test/Test";
import AddNotice from "./components/AddNotice/AddNotice";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ width: "80%", margin: "0 auto" }}>
        <NavbarTwo />
      </div>
      <div
        className="sm:w-full md:w-4/5 md:min-h-screen"
        style={{ margin: "0 auto" }}
      >
        <Switch>
          <Route exact path="/gallery" component={Gallary} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/notice" component={Notice} />
          <Route exact path="/notice/newnotice" component={AddNotice} />
          <Route exact path="/about/vision" component={Vision} />
          <Route exact path="/about/governance" component={Governance} />
          <Route exact path="/Partnership/NGOs" component={Ngo} />
          <Route exact path="/Partnership/INGOs" component={Ingos} />
          <Route exact path="/Partnership/gov" component={Gov} />
          <Route exact path="/about/whoarewe" component={WhoAreWe} />
          <Route exact path="/programmes" component={Programmes} />
          <Route exact path="/notice/details" component={NoticeDetails} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/" component={Home} />
          <Route exact component={UnderConstruction} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
