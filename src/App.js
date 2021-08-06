import './App.css'
import 'tailwindcss/tailwind.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";




function App() {
  return (
    <div className="bg-blue-light">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
