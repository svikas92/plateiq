import './App.css';
import LeftComponent from './components/common/left/LeftComponent';
import RightComponent from "./components/common/right/RightComponent"

function App() {
  return (
    <div className="main-container">
      <LeftComponent />
      <RightComponent />
    </div>
  );
}

export default App;
