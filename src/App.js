import "./App.css";
import image from "./images/logo.svg";
import about from "./images/about.jpeg";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import ServiceList from "./components/ServiceList";
import Footer from "./components/Footer";
import Featured from "./components/Featured";

const data = [
  {
    id: 1,
    icon: "wallet",
    title: "saving money",
    text: "Saving your money with discounts!",
  },
  {
    id: 2,
    icon: "tree",
    title: "endless hiking",
    text: "You will never be bored with hiking all day long",
  },
  {
    id: 3,
    icon: "socks",
    title: "amazing comfort",
    text: "Happy for you and your family",
  },
];

function App() {
  return (
    <div>
      <Navbar image={image} />
      <Hero
        slogan="Continue Exploring"
        subSlogan={"We have the best travel tour in the world"}
      />
      <AboutUs about={about} />
      <ServiceList services={data} />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
