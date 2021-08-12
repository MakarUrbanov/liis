import React, { useEffect } from 'react'
import svg1 from '@/assets/img/Vector1.svg'
import svg2 from '@/assets/img/Vector3.svg'
import svg3 from '@/assets/img/Vector2.svg'
import ListItem from '@components/list/listItem'
import { useDispatch, useSelector } from 'react-redux'
import { FETCH_FLIGHTS } from '@/store/flightsReducer'

interface DefaultRootState {
  flightsData: object
}

const ListPage: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: FETCH_FLIGHTS })
  }, [])

  const flightData = useSelector<DefaultRootState>((state) => state.flightsData)

  function logout() {
    dispatch({ type: 'LOGIN', login: '0' })
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
            <input type="date" />
          </div>
          <div className="list__slider">SLIDER</div>
          <div className="list__result-wrapper">
            <div className="list__result-favorite">
              Добавлено в Избранное: <span>10</span> рейсов
            </div>
            <div className="list__result-list">
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListPage
