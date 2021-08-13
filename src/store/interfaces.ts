export type CurrenciesType = {
  Symbol: string
}

export type PlacesType = {
  CityName: string
  IataCode: string
}

export type QuotesType = {
  MinPrice: number
  OutboundLeg: OutboundLeg
}

export type OutboundLeg = {
  DepartureDate: string
}

export type CarriersType = {
  Name: string
}

export interface IFlightsProps {
  Carriers: CarriersType[]
  Quotes: QuotesType[]
  Currencies: CurrenciesType[]
  Places: PlacesType[]
}

export interface IFligthDto {
  symbol: string
  price: number
  from: string
  to: string
  carrier: string
  follow: boolean
  departure: string
  departureTime: string
}

export interface IFlightsData {
  status: number
  data: object
}

export interface IActionProps {
  type: string
  data: any
  login: '1' | '0'
  isLoading: boolean
  newDate: string
  followsCount: number
}

export interface IStateSelector {
  date: string
}
