import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import BeyContainer from "./BeyContainer"
import Favorites from "./Favorites"

class App extends React.Component {
  state = { allBeys: [] }

  componentDidMount() {
    fetch("http://localhost:4000/beys")
      .then(resp => resp.json())
      .then(json => {
        this.setState({ allBeys: json })
      })
  }

  handleClick = bey => {
    fetch(`http://localhost:4000/beys/${bey.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        favorite: !bey.favorite
      })
    })
      .then(resp => resp.json())
      .then(json => {
        const allFavs = this.state.allBeys.map(beyInstance =>
          beyInstance.id == json.id ? json : beyInstance
        )
        this.setState({ allBeys: allFavs })
      })
  }

  render() {
    const favs = this.state.allBeys.filter(bey => bey.favorite)
    return (
      <div className="container">
        <BeyContainer allBeys={this.state.allBeys} clicked={this.handleClick} />
        <Favorites favBeys={favs} clicked={this.handleClick} />
      </div>
    )
  }
}

export default App
