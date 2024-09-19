import React, { useEffect } from 'react'
import { useState } from 'react'

const ShowCitiesDropdown = () => {
    const countries = [{country:'India',cities:['delhi','mumbai']},{country:'Bangladesh',cities:['dhakha','chittagong']},
    {country:'Pakistan',cities:['lohare','krachi']}]

    
    const [countriesList,setCountriesList]  = useState(countries)
    const [countryValue,setCountryValue]  = useState('India')
    const filterCities = countriesList.find((items,i)=>items.country===countryValue)
        // const changeCities = filterCities.cities[0]
    const [citiesValue,setCitiesValue]  = useState('delhi')
// console.log(citiesValue,'citiesValue')



    const [cities,setCities]  = useState([])


    useEffect(()=>{
        if(filterCities){
                setCities(filterCities.cities)
                     const changeCities = filterCities.cities[0]
                setCitiesValue(changeCities)
            
        }
    },[countryValue])

    console.log(citiesValue,'...........cities value')


  return (
    <div  style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
{`my selected country is ${countryValue}  and my selected cities is    ${citiesValue}`}

<select   value={countryValue}  onChange={(e)=>setCountryValue(e.target.value)}>
        {countriesList.length>0&&countriesList.map((countrylist,index)=>(
      
                <option value={countrylist.country}  key={countrylist.country}   >{countrylist.country}</option>
             
        ))}
           </select>

           <select  value={citiesValue} onChange={(e)=>setCitiesValue(e.target.value)}>
        {cities.length>0&&cities.map((cities,index)=>(
      
                <option   key={index}   >{cities}</option>
             
        ))}
           </select>
    </div>
  )
}

export default ShowCitiesDropdown