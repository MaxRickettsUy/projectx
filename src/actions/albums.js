import axios from 'axios'

export const getAlbums = () => {
  return (dispatch) => {
    return axios.get('http://localhost:5000/albums/').then(
      (response) => {
        dispatch(createGetSuccess('GET_ALBUMS', response.data))
      }
    ).catch((error) => {
      throw(error)
    })
  }
}

export const getAlbumsForBand = (bandName) => {
  return (dispatch) => {
    return axios.get(`http://localhost:5000/albums/${bandName}`).then(
      (response) => {
        dispatch(createGetSuccess('GET_ALBUMS_FOR_BAND', response.data))
      }
    ).catch((error) => {
      throw(error)
    })
  }
}

export const createGetSuccess = (actionType, data) => {
  let actionData = {}
  switch(actionType) {
    case 'GET_ALBUMS':
      actionData = data;
      break;
    case 'GET_ALBUMS_FOR_BAND':
      actionData = data;
      break;
    default:
  }

  return {
    type: actionType,
    payload: actionData
  }
}