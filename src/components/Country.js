import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import axios from 'axios';
import './Country.css';

const Country = () => {
    const [country, setCountry] = useState([]);
    const {name} = useParams();

    useEffect(()=>{
        axios(`https://restcountries.com/v2/name/${name}`)
            .then((response)=> {
                setCountry(response.data);
                console.log(response.data);               
            })
    }, [])

  return (
    <section>
        <div>
            <Link to="/">
                <AiOutlineArrowLeft/> {" "} Back
            </Link>
        </div>

        <div className="singleCountryPage">
            {country.map((count, i)=> {
                const {flag, name, nativeName,
                    population, region, subregion, capital,
                    latlng, currencies, languages,
                    timezones
                } = count

                return (
                    <div
                        className="singleCountry" 
                        key={i}
                    >
                        <div className="countryFlag">
                            <img src={flag}/>
                        </div>

                        <div>
                            <h1>
                                {name}
                            </h1>

                            <div className="countryDetailsFlexed">
                                <div>
                                    <p>
                                        <span className="spanTopic">
                                            Native Name:
                                        </span>{" "} 
                                        {nativeName}
                                    </p>

                                    <p>
                                        <span className="spanTopic">
                                            Population:
                                        </span>{" "}
                                        {population}
                                    </p>

                                    <p>
                                        <span className="spanTopic">
                                            Region:
                                        </span>{" "}
                                        {region}
                                    </p>

                                    <p>
                                        <span className="spanTopic">
                                            Sub Region:
                                        </span>{" "}
                                        {subregion}
                                    </p>

                                    <p>
                                        <span className="spanTopic">
                                            Capital:
                                        </span>{" "}
                                        {capital}
                                    </p>
                                </div>

                                <div>
                                    <p>
                                        <span className="spanTopic">
                                            Lat. & Long.:
                                        </span>{" "}
                                        {latlng.map((l)=>(
                                            <span>
                                                {l}{" "}
                                            </span>
                                        ))}
                                    </p>

                                    <p>
                                        <span className="spanTopic">
                                            Currencies:
                                        </span>{" "}
                                        {currencies.map((c)=>(
                                            <span>
                                                {c.name}
                                            </span>
                                        ))}
                                    </p>

                                    <p>
                                        <span className="spanTopic">
                                            Languages:
                                        </span>{" "}
                                        {languages.map((l)=>(
                                            <span className="spanTopic">
                                                {l.name}{" "}
                                            </span>
                                        ))}
                                    </p>
                                </div>
                            </div>

                            <div>
                                <p>
                                    <span className="spanTopic">
                                        Timezones: 
                                    </span> {" "}
                                    {timezones}
                                </p>
                            </div>
                        </div>
                        
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Country