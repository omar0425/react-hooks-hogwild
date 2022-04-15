import React from 'react'
import Tile from './Tile'
import Filters from './Filters'

const Tiles = ({hogData}) => {

  const renderHogTiles = hogData.map((hog) => {
    return (
    <>
  <Filters />
    <Tile key={hog.image}
        name={hog.name}
        image={hog.image}
        specialty={hog.specialty}
        highestMedalAchieved={hog["highest medal achieved"]}
        gr={hog.greased}
        weight={hog.weight} />
        </>)
  } )
  return (
    <div className='tileContainer'>
      {renderHogTiles}
    </div>

  )
}

export default Tiles
