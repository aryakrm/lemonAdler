import Navbar from "../components/navBar/Navbar";
import Body from "../components/body/Body";
import "./Home.scss";
import Slide from "../components/slide/Slide";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Slide />
      <Body />
    </div>
  );
}

export default Home;
