import React, { Component } from "react";

import hogs from "../porkers_data";
import HogCard from "./HogCard.js"

class HogContainer extends Component {

  state = {
    hogsData: hogs,
    filterGreased: false,
    sort: 'A to Z'
  }

  sortAbc = () => {
    console.log('test')
    if(this.state.sort == 'A to Z') {
      console.log('test2')
      this.state.sort == 'Z to A'
      this.setState({
        hogsData: this.state.hogsData.sort((a, b) => a.name < b.name)
      })
    }
  }

  generateHogCards = () => {
    return this.state.hogsData.map(hog => {
      return [
        <HogCard
          name={hog.name}
          specialty={hog.specialty}
          greased={hog.greased}
          weight={hog.weight}
          highestMedalAchieved={hog['highest medal achieved']}
        />
      ]
    })
  }

  render() {
    return (
      <div>
        <div className='button-row'>
          <button className='filter-greased'>Filter by Greasy Bois</button>
          <button onClick={this.sortAbc} className='sort-abc'>Sort by Name</button>
          <button className='sort-weight'>Sort by Weight</button>
        </div>
        <div className='ui grid container'>
          {this.generateHogCards()}
        </div>
      </div>
    );
  }
}

export default HogContainer;
