import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Project from "./components/Project";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
