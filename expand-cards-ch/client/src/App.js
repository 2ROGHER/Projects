import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import ExpandCardsContainer from './expand-cards-ch/src/components/container/ExpandCardsContainer';
import StepContainer from './step-progress/components/container/StepContainer';

function App() {
  return (
    <div className="App">
      {/* Esta es el componente que se va a encargar de renderizar las componentes */}
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route exact path='/client/expand-cards' element={<ExpandCardsContainer/>}/>
        <Route exact path='/client/step-progress' element={<StepContainer/>}/>
      </Routes>
    </div>
  );
}

export default App;
