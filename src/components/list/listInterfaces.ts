export interface IProps {
  symbol: string
  price: number | string | string[]
  from: string
  to: string
  carrier: string
  follow: boolean
  departure: string
  handleFollow: any
  id: any
  departureTime: string
}

export interface DefaultRootState {
  isLoading: boolean
}

export interface DefaultRootState {
  flightsData: []
  date: string
  followsCount: number | string
  isLoading: boolean
}

export interface IFlightsProps {
  symbol: string
  price: number
  from: string
  to: string
  carrier: string
  follow: boolean
  departure: string
  key: any
  handleFollow: any
  id: any
  departureTime: string
}

export interface IStatesProps {
  cityPictures: string[]
}
