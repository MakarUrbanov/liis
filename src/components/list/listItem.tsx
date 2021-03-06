import React from 'react'
import svgPlane from '@/assets/img/Vector_plane.svg'
import svg4 from '@/assets/img/Vector4.svg'
import svg5 from '@/assets/img/Vector5.svg'
import followFalse from '@/assets/img/Vector-follow_false.svg'
import followTrue from '@/assets/img/Vector-follow_true.svg'
import { IProps } from '@components/list/listInterfaces'

const ListItem: React.FC<IProps> = ({
  symbol,
  price,
  from,
  to,
  carrier,
  follow,
  departure,
  handleFollow,
  id,
  departureTime,
}) => {
  price = price.toString().split('')
  price.splice(-3, 0, ' ')

  const year = departure.split('-')[0]
  let month = departure.split('-')[1]
  const day = departure.split('-')[2]

  let tempDate = new Date(2021, +month - 1, 10)
  month = tempDate.toString().split(' ')[1]

  return (
    <div className="list__result-item">
      <div className="list__result-item-image">
        <img src={svgPlane} alt="" />
      </div>
      <div className="list__result-item-body">
        <div className="list__result-item-body-direction">
          {from}
          <span>
            <img src={svg4} alt="exit part 1" />
            <img src={svg5} alt="exit part 1" />
          </span>
          {to}
        </div>
        <div className="list__result-item-body-date">
          {`${day} ${month}, ${year}`} - {departureTime}
        </div>
        <div className="list__result-item-body-company">{carrier}</div>
      </div>
      <div className="list__result-item-price">
        <div className="list__result-item-follow">
          <img
            onClick={() => handleFollow(id)}
            src={follow ? followTrue : followFalse}
            alt="follow heart"
          />
        </div>
        <span>
          <span>Price: </span>
          <span>
            {price} {symbol}
          </span>
        </span>
      </div>
    </div>
  )
}

export default ListItem
