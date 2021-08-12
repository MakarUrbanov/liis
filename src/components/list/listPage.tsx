import React from 'react'
import svg1 from '@/assets/img/Vector1.svg'
import svg2 from '@/assets/img/Vector3.svg'
import svg3 from '@/assets/img/Vector2.svg'
import svgPlane from '@/assets/img/Vector_plane.svg'
import svg4 from '@/assets/img/Vector4.svg'
import svg5 from '@/assets/img/Vector5.svg'
import followFalse from '@/assets/img/Vector-follow_false.svg'
import followTrue from '@/assets/img/Vector-follow_true.svg'
import ListItem from '@components/list/listItem'

const ListPage: React.FC = () => {
  return (
    <div className="list__wrapper">
      <header>
        <div className="list__header-exit">
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
