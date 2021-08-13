import { IFlightsProps, IFligthDto } from '@/store/interfaces'

export function flightsDto(object: IFlightsProps): IFligthDto[] {
  let newArr = []
  let flightsCount = object.Quotes.length

  const getRandomTime = () => {
    const time: any = new Date(
      2021,
      6,
      10,
      Math.random() * 24,
      Math.random() * 60
    )

    let hour = time.getHours()

    let minutes = time.getMinutes()

    if (hour.toString().length < 2) {
      hour = '0' + hour
    }

    if (minutes.toString().length < 2) {
      minutes = '0' + minutes
    }
    return `${hour}:${minutes}`
  }

  for (let i = 0; i < flightsCount; i++) {
    let departureDate = object.Quotes[i].OutboundLeg.DepartureDate.split('T')

    newArr[i] = {
      symbol: object.Currencies[0].Symbol,
      price: object.Quotes[i].MinPrice,
      from: `${object.Places[0].CityName} (${object.Places[0].IataCode})`,
      to: `${object.Places[1].CityName} (${object.Places[1].IataCode})`,
      carrier: object.Carriers[i].Name,
      follow: false,
      departure: departureDate[0],
      departureTime: getRandomTime(),
    }
  }
  return newArr
}
