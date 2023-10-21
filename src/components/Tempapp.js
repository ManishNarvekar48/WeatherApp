import React, { useEffect, useState } from 'react'

const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState('mumbai');

    useEffect(() => {
        const fetchData = () => {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9ac40f74cb5cc5b91676c0dfd892b8b2`)
                .then(response => {
                    return response.json()
                })
                .then(data => {

                    setCity(data.main)
                })
        }
        fetchData();

    }, [search])

    return (
        <>

            <div className='main'>

                <div id='row'>
                    <div className='inp'>
                        <input type='search' onChange={(event) => {
                            setSearch(event.target.value)
                        }} placeholder='Search...'></input>
                    </div>


                    {!city ? (
                        <p>no data found</p>
                    ) : (

                        <><div className='sol'>


                            <h2><i class="fa-solid fa-location-dot fa-bounce"></i> - {search}</h2>
                            <h1><i class="fa-solid fa-temperature-low"></i> {city.temp}°C</h1>
                            <h5>Max :{city.temp_max}°C  | Min :{city.temp_min}°C</h5>

                        </div>


                        </>


                    )

                    }

                </div>

                <div className='wave'>

                </div>
            </div>
        </>
    )
}


export default Tempapp;