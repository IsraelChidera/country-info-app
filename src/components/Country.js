import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import axios from 'axios';


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
        Country
    </section>
  )
}

export default Country