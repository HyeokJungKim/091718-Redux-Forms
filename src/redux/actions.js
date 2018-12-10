export const addWizard = (wizardObj) => {
  return {
    type: "ADD_WIZARD",
    payload: wizardObj
  }
}

export const removeWizard = (wizardObj) => {
  return {
    type: "REMOVE_WIZARD",
    payload: wizardObj
  }
}
