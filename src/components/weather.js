import React from 'react'
import { Card } from 'semantic-ui-react'

// const CardExample = ({weatherData}) => (
//     <Card>
//         <Card.Content>
//             <Card.Header className="header">{weatherData.name}</Card.Header>
//                 <Card.Content>Feels like: {weatherData.main.feels_like}</Card.Content>
//                 <Card.Content>temp: {weatherData.main.temp}</Card.Content>
//                 <Card.Content>Max: {weatherData.main.temp_max}</Card.Content>
//                 <Card.Content>Min: {weatherData.main.temp_min}</Card.Content>
//                 <Card.Content>Humidity: {weatherData.main.humidity}</Card.Content>
//                 <Card.Content>pressure: {weatherData.main.pressure}</Card.Content>
//         </Card.Content>
//     </Card>
// )

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const current = new Date()
let day = weekday[`${current.getDay()}`]
let date = `${current.getDate()} ${current.getFullYear()}`

const Weather = ({weatherData, locationData}) => {
  console.log(locationData, ' is location data');
  return (
    <div className='widget'>
      <div className='left-panel panel'>
        <div className='date'>
          <h1>{day} {date}</h1>
        </div>
        <div className='city'>
          <h2>{locationData.addresses && locationData.addresses[0].city}</h2>
        </div>
        <div className='temp'>
          <h2>{weatherData.main.temp}</h2>
        </div>
      </div>
    </div>
  )
}

export default Weather
