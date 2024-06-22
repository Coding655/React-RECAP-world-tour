import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {
    const [countries, setCountries] = useState([]);
    /* mark visited */
    const [visitedCountries, setVisitedCountries] = useState([]);
    /* mark visited */
    const handleMarkVisited = country =>{
        console.log('mark visited clicked')
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries)
    }
    const [visitedFlags, setVisitedFlags] = useState([]);
    const handleFlags = flags =>{
        const newVisitedFlags = [...visitedFlags, flags];
        setVisitedFlags(newVisitedFlags)
    }


    useEffect(()=> {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
        // console.log(setCountries)

    }, [])
    return (
        <div>
            <h3>Total Countries: {countries.length} </h3>
            <h3>Visited Countries: {visitedCountries.length} </h3>
            <div >
                {
                    visitedFlags.map(flags=> <img className="flags-width" key={flags} src={flags.png}></img>)
                }
            </div>
            <div>
                {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
            </div>
            <div className="countries-container">
                {
                    countries.map(country => 
                    <Country key={country.cca3} 
                    handleMarkVisited ={handleMarkVisited}
                    handleFlags={handleFlags}
                    country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;