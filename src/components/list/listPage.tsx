import React, { useEffect, useState } from 'react'
import svg1 from '@/assets/img/Vector1.svg'
import svg2 from '@/assets/img/Vector3.svg'
import svg3 from '@/assets/img/Vector2.svg'
import ListItem from '@components/list/listItem'
import { useDispatch, useSelector } from 'react-redux'
import { FETCH_FLIGHTS, setNewDate } from '@/store/flightsReducer'
import ListSlider from '@components/list/listSlider'
import {
  DefaultRootState,
  IFlightsProps,
} from '@components/list/listInterfaces'

const ListPage: React.FC = () => {
  const dispatch = useDispatch()
  const [flightsList, setFlightsList] = useState<any>([])
  const [date, setDate] = useState<any>('')
  const flightData = useSelector<DefaultRootState>((state) => state.flightsData)
  const departureDate = useSelector<DefaultRootState>((state) => state.date)
  const followsCount: any = useSelector<DefaultRootState>(
    (state) => state.followsCount
  )
  const isLoading = useSelector<DefaultRootState>((state) => state.isLoading)
  const [minDate, setMinDate] = useState<any>('')

  useEffect(() => {
    dispatch({ type: FETCH_FLIGHTS })
    setMinDate(departureDate)
    setDate(departureDate)
  }, [])

  useEffect(() => {
    setDate(departureDate)
  }, [departureDate])

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
            <input
              min={minDate}
              type="date"
              value={date}
              onChange={(e) => handleDate(e)}
            />
          </div>
          <ListSlider />
          <div className="list__result-wrapper">
            <div className="list__result-favorite">
              Добавлено в Избранное: <span>{followsCount}</span> рейсов
            </div>
            <div className="list__result-list">
              {isLoading ? (
                <div className="list__loader">
                  <span>Loading...</span>
                </div>
              ) : (
                flightsList.map((item: IFlightsProps, id: number) => {
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
                      departureTime={item.departureTime}
                    />
                  )
                })
              )}
              {!flightsList.length && !isLoading
                ? 'Рейсов на выбранный день нет'
                : ''}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListPage
