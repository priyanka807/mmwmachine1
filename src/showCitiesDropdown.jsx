import React from 'react'
import { useState } from 'react'

const ShowCitiesDropdown = () => {
    const countries = [{country:'India',cities:['delhi','mumbai']},{country:'Bangladesh',cities:['dhakha','chittagong']},
    {country:'Pakistan',cities:['lohare','krachi']}]

    
    const [countriesList,setCountriesList]  = useState(countries)
    const [countryValue,setCountryValue]  = useState('India')

    const filterCities = countriesList.find((items,i)=>items.country===countryValue)
    const [cities,setCities]  = useState(filterCities)
    console.log(filterCities.cities,'filterCities')


  return (
    <div  style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>

<select   value={countryValue}  onChange={(e)=>setCountryValue(e.target.value)}>
        {countriesList.length>0&&countriesList.map((countrylist,index)=>(
      
                <option value={countrylist.country}  key={countrylist.country}   >{countrylist.country}</option>
             
        ))}
           </select>

           <select   value={cities}  onChange={(e)=>setCities(e.target.value)}>
        {filterCities.cities.length>0&&countriesList.map((cities,index)=>(
      
                <option value={cities}  key={index}   >{cities}</option>
             
        ))}
           </select>
    </div>
  )
}

export default ShowCitiesDropdown