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
  newDate: string
  followsCount: number
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
  flightsData: [],
  isAuth: localStorage.getItem('login') || '0',
  isLoading: false,
  date: setDate(),
  followsCount: 0,
  cityPictures: [
    'https://cdn.pixabay.com/photo/2016/11/06/17/17/north-america-1803504__480.jpg',
    'https://static5.depositphotos.com/1030808/402/i/600/depositphotos_4025773-stock-photo-new-york-city.jpg',
    'https://www.interactive-english.ru/imagesforsite/for-descriptions/ny1.jpg',
    'https://lh3.googleusercontent.com/7Sz3C3F4SctBO9m55QhpUr1t-k6-xkwyTaNCM5Nf-oQLfutc8qg3ag-tlxM-DOOIp6LofCb0E-zwYtEvC-ImawvMFYI=w640-h400-e365-rj-sc0x00ffffff',
    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2021%2F02%2F19%2Fnew-york-city-evening-NYCTG0221.jpg&w=450&h=302&c=sc&poi=face&q=85',
    'https://www.telegraph.co.uk/content/dam/Travel/Destinations/North%20America/USA/New%20York/new-york-central-park-aerial.jpg?imwidth=450',
  ],
}

const SET_FLIGHTS = 'SET_FLIGHTS'
const LOGIN = 'LOGIN'
export const FETCH_FLIGHTS = 'FETCH_FLIGHTS'
const SET_ISLOADING = 'SET_ISLOADING'
const SET_DATE = 'SET_DATE'
const FOLLOWS_INCREMENT = 'FOLLOWS_INCREMENT'
const FOLLOWS_DECREMENT = 'FOLLOWS_DECREMENT'

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
      return {
        ...state,
        isLoading: action.isLoading,
      }
    case SET_DATE:
      return {
        ...state,
        date: action.newDate,
      }
    case FOLLOWS_INCREMENT:
      return { ...state, followsCount: state.followsCount + 1 }
    case FOLLOWS_DECREMENT:
      return { ...state, followsCount: state.followsCount - 1 }
    default:
      return state
  }
}

export const fetchFlights = () => ({ type: FETCH_FLIGHTS })
export const setNewDate = (newDate: string) => ({
  type: SET_DATE,
  newDate,
})
export const handleIsLoading = (isLoading: boolean) => ({
  type: SET_ISLOADING,
  isLoading: isLoading,
})
export const dateSelector = (state: IStateSelector) => state.date

export const setFlights = (data: IFlightsData) => {
  if (!data) {
    alert("We don't fly in the past :D")
    return setNewDate(setDate())
  }

  if (data.status === 200) {
    return {
      type: SET_FLIGHTS,
      data: data.data,
    }
  } else {
    throw new Error('Something went wrong')
  }
}
