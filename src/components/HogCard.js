import React, { Component } from "react";

class HogCard extends Component {

    nameToUrl = (name) => {
        return name.replaceAll(" ", "_").toLowerCase() + ".jpg"
    }

    state = { isActive: false}

    handleToggle = () => {
        this.setState({ isActive: !this.state.isActive })
    }

    render() {
        const isActive = this.state.isActive
        const pigImage = require(`../hog-imgs/${this.nameToUrl(this.props.name)}`)
        return (
            <div onClick={this.handleToggle} className="ui card eight wide column pigTile">
                <div className="image">
                    <img src={pigImage} />
                </div>
                <div className="content">
                    <a className="header">{this.props.name}</a>
                    <div className="meta">
                        <span className="date">Joined in 2013</span>
                    </div>
                    <div className={`description ${isActive ? null : "hidden"}`}>
                        Specialty: {this.props.specialty}
                        <br></br>
                        Greased: {this.props.greased ? 'You Betcha' : 'Negative'}
                        <br></br>
                        Weight: {this.props.weight}
                        <br></br>
                        Highest Medal Achieved: {this.props.highestMedalAchieved}
                    </div>
                </div>
            </div>
        );
    } 
}

export default HogCard;