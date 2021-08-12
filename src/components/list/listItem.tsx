import React from 'react'
import svgPlane from '@/assets/img/Vector_plane.svg'
import svg4 from '@/assets/img/Vector4.svg'
import svg5 from '@/assets/img/Vector5.svg'
import followFalse from '@/assets/img/Vector-follow_false.svg'

const ListItem: React.FC = () => {
  return (
    <div className="list__result-item">
      <div className="list__result-item-image">
        <img src={svgPlane} alt="" />
      </div>
      <div className="list__result-item-body">
        <div className="list__result-item-body-direction">
          Moscow (SVO)
          <span>
            <img src={svg4} alt="exit part 1" />
            <img src={svg5} alt="exit part 1" />
          </span>
          New York City (JFK)
        </div>
        <div className="list__result-item-body-date">28 June, 2020 - 14:50</div>
        <div className="list__result-item-body-company">Aeroflot</div>
      </div>
      <div className="list__result-item-price">
        <div className="list__result-item-follow">
          <img src={followFalse} alt="follow heart" />
        </div>
        <span>
          <span>Price: </span>
          <span>23 924 P</span>
        </span>
      </div>
    </div>
  )
}

export default ListItem
