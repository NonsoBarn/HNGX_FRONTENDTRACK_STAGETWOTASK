import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <div className="App font-Roboto">
      <Navbar />
      <Home />
      {/* <MovieDetails /> */}
      <Footer />
    </div>
  );
}

export default App;
