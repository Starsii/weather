import './App.css';
import React, {useEffect, useState} from 'react'
import Weather from './components/weather'

function App() {

  const [lat, setLat] = useState([])
  const [long, setLong] = useState([])
  const [data, setData] = useState([])
  const [city, setCity] = useState([])
  const key = 'cae900f3dff9e564570009fe5903ac15'

  
  useEffect(() => {
    /////////////////////////////////////////call back function on success
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude)
        setLong(position.coords.longitude)

      })

      await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=imperial`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result)
      })
    }
    fetchData()
    console.log("lat is", lat)
    console.log("long is", long)
  },[lat,long,])

  useEffect(() => {
    const fetchCity = async () => {
      await fetch('https://api.radar.io/v1/geocode/reverse?coordinates=41.7852654,-87.6973214', {
        headers: {
          'Authorization' : 'prj_live_sk_62a5d1002fe62967aa211826d3a3c4c190fd4f88'
        }
      })
      .then(res => res.json())
      .then(result => {
        setCity(result)
        console.log(result)
      })
    }
    fetchCity()
  },[lat,long])


  return (
   <div>
    {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data} locationData={city}/>
      ): (
        <div></div>
      )}
   </div>
  );
}

export default App;

//  useEffect(() => {
//     const fetchData = async () => {
//       navigator.geolocation.getCurrentPosition(function(position) {
//         setLat(position.coords.latitude);
//         setLong(position.coords.longitude);
//       });

//       await fetch(`${url}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${key}`)
//       .then(res => res.json())
//       .then(result => {
//         setData(result)
//         console.log(result);
//       });
//     }
//     fetchData();
//   }, [lat,long])

  // const fetechWeatherData = () => {
  //   fetch(`${url}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${key}`)
  //   .then(response=>{
  //     return response.json()
  //   })
  //   .then(data => {
  //     setData(data)
  //   })
  // }

  // useEffect(() => {
  //   fetechWeatherData()
  // }, [])
