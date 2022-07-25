import React from 'react'

function ReactList() {

    const cars = [{name:'ABC'},{name:'CDE'},{name:'FGH'}]
  return (
    <div>
        <ul>
            {cars.map((car)=><li>{car.name}</li>
            )
            }
       </ul>

    {/* Hello */}
    </div>
  )
}

export default ReactList