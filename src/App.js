import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Card from './components/Card'



function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<Card/>}/>
    </Routes>
   </Router>
   </>
  );
}

export default App;
