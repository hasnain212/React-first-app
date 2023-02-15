import "./App.css";
import Appbar from "./components/Appbar/ResponsiveAppBar";
import Services from "./components/Services/Services";
import Description from './components/Description/Description';
import Herosection from "./components/Herosection/Herosection";
import Team from "./components/Team/Team";

function App() {
  return (
    <>
      <Appbar />
      <Herosection />
      <Description/>
      <Team/>
      <Services/>
    </>
  );
}

export default App;
