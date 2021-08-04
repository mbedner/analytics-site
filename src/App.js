import './App.css'
import 'tailwindcss/tailwind.css'
import Nav from './components/Nav'
import Hero from './components/Hero'

function App() {
  return (
    <div className="bg-blue-light">
      <Nav />
      <Hero />
    </div>
  );
}

export default App;
