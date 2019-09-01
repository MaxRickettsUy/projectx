import axios from 'axios'

export const getBands = () => {
  return (dispatch) => {
    return axios.get('http://localhost:5000/bands/')
    .then(response => {
      dispatch(createGetSuccess('GET_BANDS', response.data))
    })
    .catch(error => {
      throw(error)
    })
  }
}

export const getBandName = (bandName) => {
  return (dispatch) =>{
    return axios.get('http://localhost:5000/bands/' +  bandName)
    .then(response => {
      dispatch(createGetSuccess('GET_BAND_NAME', response.data))
    })
    .catch(error => {
      throw(error)
    })
  }
}

export const createGetSuccess = (actionType, data) => {
  let actionData = {};
  console.log(actionType)
  console.log(data)
  switch(actionType){
    case 'GET_BANDS': 
      actionData = data;
      break;
    case 'GET_BAND_NAME':
      break;
    default: 

  }

  return {
    type: actionType,
    payload: actionData
  }

}