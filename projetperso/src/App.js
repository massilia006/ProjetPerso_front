import {Routes,Route} from 'react-router-dom';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Home from './Components/Home';
import Login from './Components/Login';
import NotFound from './Components/NotFound';
import Register from './Components/Register';
import AllUsers from './Components/AllUsers';
import Profile from './Components/Profile';
import Formulaire from './Components/Formulaire';
import AllForms from './Components/AllForms';
import AddVoitures from './Components/AddVoitures';
import AllVoiture from './Components/AllVoiture';
import Voiture from './Components/Voiture';



function App() {
  return (
    <div className="App">
     <Routes>

     <Route path='/' element={<Home/>} />
     <Route path='/users/:name' element={<Profile/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/formulaire' element={<Formulaire/>} />
      <Route path='/allforms' element={<AllForms/>} />
      <Route path='/cars/' element={<AllVoiture/>} />
      <Route path='/cars/:id' element={<Voiture/>} />
      <Route path='/cars/addcars' element={<AddVoitures/>} />
    
      <Route path='/*' element={<NotFound/>} />
      <Route path='/allusers' element={<AllUsers/>} />
      

     </Routes>
    </div>
  );
}

export default App;
