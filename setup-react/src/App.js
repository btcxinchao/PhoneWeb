import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Allrouters from "./routes/Allrouters"

function App() {
  return (
    <>
      <BrowserRouter>
      <Allrouters/>
      </BrowserRouter>
    </>
  );
}

export default App;
