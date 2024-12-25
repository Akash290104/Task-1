import "./App.css";
import Navbar from "./components/Navbar";
import DoctorSearch from "./components/DoctorSearch";
import Filters from "./components/Filters";
import Last from "./components/Last";

function App() {
  return (
    <>
      <Navbar />
      <DoctorSearch />
      <Filters />
      <Last/>
    </>
  );
}

export default App;
