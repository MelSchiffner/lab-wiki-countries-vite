import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <>
    <div className="App">
      <Navbar />
    </div>

    <div>
      <HomePage />
    </div>
    </>
  );
  
}

export default App;
