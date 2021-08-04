import './App.css'
import 'tailwindcss/tailwind.css'
import Nav from './components/Nav'
import Header from './components/Header'

function App() {
  return (
    <div className="">
      <Nav />
      <Header 
        classes = "bg-blue-400 p-20"
      />
    </div>
  );
}

export default App;
