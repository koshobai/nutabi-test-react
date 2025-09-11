import { BrowserRouter, Switch, Route } from "react-router-dom"

// page components
import Home from "./pages/home/Home"
import Create from "./pages/create/Create"
import Search from "./pages/search/Search"
import Entry from "./pages/entry/Entry"
import Navbar from "./components/Navbar"
// styles
import "./App.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/entries/:id">
            <Entry />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
