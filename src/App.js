import { BrowserRouter, Switch, Route } from "react-router-dom"

// page components
import Navbar from "./components/Navbar"
import Navbar2 from "./components/Navbar2"
import Navbar3 from "./components/Navbar3"
import Home from "./pages/home/Home"
import Create from "./pages/create/Create"
import Search from "./pages/search/Search"
import Entry from "./pages/entry/Entry"
import Futon from "./components/Futon"
import Makura from "./components/Makura"
import Footer from "./components/Footer"
import Homepage from "./pages/Homepage"
import Articles from "./pages/Articles"
// styles
import "./App.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div id="top" className="scroll-to-top"></div>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Navbar2 />
            <Navbar3 />
            <Home />
          </Route>
          <Route path="/homepage">
            <Homepage />
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
          <Route path="/articles">
            <Articles />
          </Route>
        </Switch>
        <Futon />
        <Makura />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
