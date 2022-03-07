import { useEffect, useState } from 'react';
import './App.css';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import axios from 'axios';
import Filter from './components/Filter';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Country from './components/Country';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    axios("https://restcountries.com/v2/all")
        .then ((response) => {
            console.log(response.data);
            setData(response.data);
            // console.log("dta", setData());            
        })
  },[])

  return (
    <div className="App">

      < Navbar />
      < Filter />
      <Routes>
        <Route exact path="/" element={< Homepage data={data} />  }/>  
        <Route path="/countries/:name" element={ <Country/> } />               
      </Routes>

    </div>
  );
}

export default App;
