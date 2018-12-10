import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addWizard} from '../redux/actions'

class Header extends Component {

  handleClick = () => {
    let {addWizard} = this.props
    addWizard({
      name: "091718",
      house: "Flatiron",
      redux: "Masters/Wizards"
    })
  }

  render() {
    return (
      <header className="App-header">
        <img src={"https://image.flaticon.com/icons/svg/135/135869.svg"} className="App-logo" alt="logo" />
        <p>Harry Potter of Redux</p>
        <button onClick={this.handleClick}>Click to add a Wizard</button>
      </header>
    );
  }

}

export default connect(null, {addWizard})(Header);
