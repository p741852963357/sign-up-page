import './App.css'
import NavBar from "./components/NavBar/NavBar.jsx";
import Menu from "./components/Menu/Menu.jsx";

function App() {

  return (
    <div className="container">
      <NavBar/>
        <div className={"content"}>
            <div className={"menu"}>
                <Menu/>
            </div>
            <div className={"cover"}>
            </div>
        </div>
    </div>
  )
}

export default App
