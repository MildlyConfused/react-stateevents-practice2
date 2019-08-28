import React from "react"
import BeyCard from "./BeyCard"

class BeyContainer extends React.Component {
  render() {
    const allBeys = this.props.allBeys.map(bey => (
      <BeyCard key={"bey-" + bey.id} info={bey} clicked={this.props.clicked} />
    ))

    return (
      <div className="index">
        <h1>All Beys</h1>
        {allBeys}
      </div>
    )
  }
}

export default BeyContainer
