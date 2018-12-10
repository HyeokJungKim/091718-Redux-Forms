import React from 'react'
import Wizard from './Wizard'
import {connect} from 'react-redux'

class WizardDisplay extends React.Component{
  render(){
    console.log("WizardDisplay", this.props);
    return(
      <div>
        <h2>Welcome to the Wizarding World of Harry Potter!</h2>
        <ul>
          {this.props.wizards.map((wizardObj) => {
              return <Wizard wizard={wizardObj} key={wizardObj.name}></Wizard>
          })}
        </ul>
      </div>
    )
  }
}

//mapStateToProps is a function that returns an object
const mapStateToProps = (state) => {
  return {
    wizards: state.wizards
  }
}

const someFunction = connect(mapStateToProps)
const someComponent = someFunction(WizardDisplay)


//connect()(WizardDisplay)
export default someComponent
