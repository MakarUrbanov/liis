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
  isAuth: localStorage.getItem('login') || '0',
  isLoading: false,
  date: new Date(),
}

const SET_FLIGHTS = 'SET_FLIGHTS'
const LOGIN = 'LOGIN'
export const FETCH_FLIGHTS = 'FETCH_FLIGHTS'

export const flightsReducer = (state = flightsStates, action: IActionProps) => {
  switch (action.type) {
    case SET_FLIGHTS:
      localStorage.setItem('flights', action.data)
      return {
        ...state,
        flightsData: action.data,
      }
    case LOGIN:
      localStorage.setItem('login', action.login)
      return {
        ...state,
        isAuth: action.login,
      }
    default:
      return state
  }
}

export const fetchFlights = () => ({ type: FETCH_FLIGHTS })

export const setFlights = (data: IFlightsData) => {
  if (data.status === 200) {
    return {
      type: SET_FLIGHTS,
      data: data.data,
    }
  } else {
    throw new Error('Something went wrong')
  }
}
