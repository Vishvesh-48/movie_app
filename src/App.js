import './App.css';
import { AllRouts } from './routers/AllRouts';
import { Header,Footer } from './componets';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <AllRouts/>
      <Footer/>
    </div>
  );
}

export default App;
