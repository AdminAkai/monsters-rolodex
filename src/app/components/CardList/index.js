import Card from '../Card'

import './styles.css'

const CardList = ({ monsters }) => {
  return (
    <div className='card-list'>
      {
        monsters.map(({ id, name, email }) => (
          <Card 
            key={id}
            id={id}
            name={name}
            email={email}
          />
        ))
      }
    </div>
  )
}

export default CardList