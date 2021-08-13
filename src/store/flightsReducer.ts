import { flightsDto } from '@/store/flightsDto'

interface IFlightsData {
  status: number
  data: object
}

interface IActionProps {
  type: string
  data: any
  login: '1' | '0'
  isLoading: boolean
}

interface IStateSelector {
  date: string
}

function setDate() {
  let date: any = new Date().toLocaleDateString()
  date = date.split('.')
  if (date[date.length - 1].length > date[0].length) {
    date = date.reverse()
  }
  return date.join('-')
}

const flightsStates = {
  flightsData: {},
  isAuth: localStorage.getItem('login') || '0',
  isLoading: false,
  date: setDate(),
}

const SET_FLIGHTS = 'SET_FLIGHTS'
const LOGIN = 'LOGIN'
export const FETCH_FLIGHTS = 'FETCH_FLIGHTS'
const SET_ISLOADING = 'SET_ISLOADING'

export const flightsReducer = (state = flightsStates, action: IActionProps) => {
  switch (action.type) {
    case SET_FLIGHTS:
      const data = flightsDto(action.data)
      return {
        ...state,
        flightsData: data,
      }
    case LOGIN:
      localStorage.setItem('login', action.login)
      return {
        ...state,
        isAuth: action.login,
      }
    case SET_ISLOADING:
      console.log(action.isLoading)
      return {
        ...state,
        isLoading: action.isLoading,
      }
    default:
      return state
  }
}

export const fetchFlights = () => ({ type: FETCH_FLIGHTS })
export const handleIsLoading = (isLoading: boolean) => ({
  type: SET_ISLOADING,
  isLoading: isLoading,
})
export const dateSelector = (state: IStateSelector) => state.date

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
