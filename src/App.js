import { Redirect, Route, Router, Switch } from 'react-router-dom';
import Movies from './Components/Movies';
import FormMovie from './Components/FormMovie';
import Buy from './Components/Buy';
import notFound from './Components/notFound';
import Customers from './Components/Customers';
import './App.css';
import Homepage from './Pages/Homepage';
import Detail from './Pages/Detail';

function App() {
  return (
    <Switch>
      <Route path="/:id" component={Detail}></Route>
      <Route path="/movies/:id" component={FormMovie}></Route>
      <Route path="/movies" component={Movies}></Route>
      <Route path="/customers" component={Customers}></Route>
      <Route path="/buy" component={Buy}></Route>
      <Route path="/" component={Homepage}></Route>
      <Route path="/not-found" component={notFound}></Route>
      <Router path="/payment" component={Buy}></Router>
      <Redirect to="not-found" />
    </Switch>
  );
}

export default App;
