import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

const Homepage = ({data}) => {

  return (
    <section className="homepage">        

        <div className="countryDetails">
            {data.map((datum, i) => (
                <div className="countryData" key={i}>
                    <div className="flag">
                        <img src={datum.flags.png} />
                    </div>
                    <div className="dataDetails">
                        <p className="countryName">
                            {datum.name}
                        </p>

                        <ul>
                            <li>
                                Population: {" "} {datum.population}
                            </li>
                            <li>
                                Region: {" "} {datum.region}
                            </li>
                            <li>
                                <p>
                                    Capital: {" "} {datum.capital}
                                </p> 

                                {/* {datum.capital?.map((da, i)=> 
                                    (<p key={i}>
                                        Capital: {" "} {da}
                                    </p>))
                                } */}
                            </li>
                        </ul>

                        <p>
                            <Link to={`/countries/${datum.name}`}>
                                Learn more    
                            </Link>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Homepage