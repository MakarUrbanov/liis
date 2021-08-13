import React, { useEffect, useState } from 'react'
import svg1 from '@/assets/img/Vector1.svg'
import svg2 from '@/assets/img/Vector3.svg'
import svg3 from '@/assets/img/Vector2.svg'
import ListItem from '@components/list/listItem'
import { useDispatch, useSelector } from 'react-redux'
import { FETCH_FLIGHTS, setNewDate } from '@/store/flightsReducer'

interface DefaultRootState {
  flightsData: []
  date: string
  followsCount: number
}

interface IFlightsProps {
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
}

const ListPage: React.FC = () => {
  const dispatch = useDispatch()
  const [flightsList, setFlightsList] = useState<any>([])
  const [date, setDate] = useState<any>('')
  const flightData = useSelector<DefaultRootState>((state) => state.flightsData)
  const departureDate = useSelector<DefaultRootState>((state) => state.date)
  const followsCount = useSelector<DefaultRootState>(
    (state) => state.followsCount
  )

  useEffect(() => {
    dispatch({ type: FETCH_FLIGHTS })
    setDate(departureDate)
  }, [])

  useEffect(() => {
    return setFlightsList(flightData)
  }, [flightData])

  function logout() {
    dispatch({ type: 'LOGIN', login: '0' })
  }

  function handleDate(e: React.ChangeEvent<HTMLDataElement>) {
    setDate(e.target.value)
    dispatch(setNewDate(e.target.value))
    dispatch({ type: FETCH_FLIGHTS })
  }

  function handleFollow(idProp: any) {
    let currentFollow = false
    setFlightsList([
      ...flightsList.map((item: any, id: any) => {
        if (id === idProp) {
          currentFollow = !item.follow
          return { ...item, follow: !item.follow }
        }
        return item
      }),
    ])
    if (currentFollow) {
      return dispatch({ type: 'FOLLOWS_INCREMENT' })
    }
    dispatch({ type: 'FOLLOWS_DECREMENT' })
  }

  return (
    <div className="list__wrapper">
      <header>
        <div onClick={() => logout()} className="list__header-exit">
          <span>Выйти</span>
          <div className="list__header-exit-svg">
            <img src={svg1} alt="exit part 1" />
            <img src={svg2} alt="exit part 1" />
            <img src={svg3} alt="exit part 1" />
          </div>
        </div>
      </header>
      <div className="list__body">
        <div className="list__field">
          <div className="list__field-description">
            <span>Вылеты {'>'} SVO - JFK</span>
            <input type="date" value={date} onChange={(e) => handleDate(e)} />
          </div>
          <div className="list__slider">SLIDER</div>
          <div className="list__result-wrapper">
            <div className="list__result-favorite">
              Добавлено в Избранное: <span>{followsCount}</span> рейсов
            </div>
            <div className="list__result-list">
              {flightsList.map((item: IFlightsProps, id: number) => {
                return (
                  <ListItem
                    key={id}
                    symbol={item.symbol}
                    price={item.price}
                    from={item.from}
                    to={item.to}
                    carrier={item.carrier}
                    follow={item.follow}
                    departure={item.departure}
                    handleFollow={handleFollow}
                    id={id}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListPage
