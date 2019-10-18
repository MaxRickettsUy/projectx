export default (state = {}, action) => {
  switch(action.type) {
    case 'GET_BANDS':
    return {
      ...state,
      bands: action.payload
    }
    case 'GET_BAND_NAME':
      return{
        ...state,
        band: action.payload
      }
    default: return state
  }
}