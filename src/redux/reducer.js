//state is an object
import wizardsArr from './wizards'

const defaultState = {
  wizards: wizardsArr,
}

//Reducer should always return an object
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    
    case "ADD_WIZARD":
      const wizardObj = action.payload
      const wizardsArr = [...state.wizards, wizardObj]
      return {...state, wizards: wizardsArr}

    case "REMOVE_WIZARD":
      const newArray = state.wizards.filter((wizard) => {
        return wizard !== action.payload
      })
      return {...state, wizards: newArray}

    default:
      return state
  }
}

export default reducer
