import React from "react"

class BeyCard extends React.Component {
  render() {
    const beyInfo = this.props.info
    return (
      <div onClick={() => this.props.clicked(this.props.info)}>
        <h3>{beyInfo.name}</h3>
        {<img src={beyInfo.img} alt={beyInfo.name} />}
      </div>
    )
  }
}

export default BeyCard
