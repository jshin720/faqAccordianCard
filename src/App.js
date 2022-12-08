
import './App.css';
import Faqs from "./components/faqs"
import boxPicture from "./images/illustration-box-desktop.svg"
import womenDesktop from "./images/illustration-woman-online-desktop.svg"
import womenMobile from "./images/illustration-woman-online-mobile.svg";
function App() {
  return (
    <div className="App">
      <div>
        <img src={boxPicture} />
        <img src={womenDesktop} />
        <img src={womenMobile} />
      </div>
      <Faqs />
    </div>
  );
}

export default App;
