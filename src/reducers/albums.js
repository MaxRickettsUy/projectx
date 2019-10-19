export default (state = {}, action) => {
  switch(action.type) {
    case 'GET_ALBUMS': 
    return {
      ...state,
      albums: action.payload
    }
    case 'GET_ALBUMS_FOR_BAND':
      return {
        ...state,
        albums: action.payload
      }
    default: return state
  }
}