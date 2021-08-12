interface IFlightsData {
  status: number
  data: object
}

interface IActionProps {
  type: string
  data: any
  login: '1' | '0'
}

const flightsStates = {
  flightsData: {},
  isAuth: '0',
  isLoading: false,
}
const GET_FLIGHTS = 'GET_FLIGHTS'
const LOGIN = 'LOGIN'

export const flightsReducer = (state = flightsStates, action: IActionProps) => {
  switch (action.type) {
    case GET_FLIGHTS:
      localStorage.setItem('flights', action.data)
      return {
        ...state,
        flightsData: action.data,
      }
    case LOGIN:
      localStorage.setItem('login', action.login)
      return {
        ...state,
        isAuth: action.data,
      }
    default:
      return state
  }
}

// export const setLogin = (data: IFlightsData) => {
//   if (data.status === 200) {
//     return {
//       type: GET_FLIGHTS,
//       data: data.data,
//     }
//   } else if (data.status > 400) {
//     throw new Error('Something went wrong')
//   }
// }
