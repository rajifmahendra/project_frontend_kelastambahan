import { Redirect, Route, Router, Switch } from "react-router-dom";
import Movies from './Components/Movies';
import FormMovie from "./Components/FormMovie";
import Buy from './Components/Buy';
import notFound from './Components/notFound';
import Customers from './Components/Customers';
import Header from './Components/Header';
import './App.css';

function App() {
  return (
  <>
  <Header />
   <main className='container'>
      <div className="row">
        <div className="col-md-12">
        <Switch>
          <Route path="/movies/:id" component={FormMovie}></Route>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/buy" component={Buy}></Route>
          <Route path="/not-found" component={notFound}></Route>
          <Redirect from="/" exact to="/movies" />
          <Router path="/payment" component={Buy}></Router>
          <Redirect to="not-found" />

        </Switch>
        </div>
      </div>
   </main>
  </>
  
  );
}

export default App;
