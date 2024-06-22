import { useState } from "react";
import './Country.css'


const Country = ({country, handleMarkVisited, handleFlags}) => {
    console.log(handleFlags)
    const {name, flags, cca3} = country;
    /* visited  */
    const [visited, setVisited] = useState(false);
    const handleVisitedCountries = () => {
        setVisited(!visited)
    }
    
    return (
        <div className={`border ${visited ? 'mark-visited' : 'going'}`}>
            <h4>Name: {name.common}</h4>
            <img src={flags.png} alt="" />
            <h5>Code: {cca3}</h5>
            <hr />
            <div className="flex">
            <button onClick={handleVisitedCountries}>{visited ? 'visited' : 'Going'}</button>
            <p className="text-border">{visited ? 'i already visited that country' : 'i wan to visit that country'}</p>
            </div>
            <br />
            <hr />
            <div>
                 <button onClick={()=>handleMarkVisited(country)} className="width">Mark Visited</button>
            </div>
            <br />
            <hr />
            <div className="add-flags">
                <button onClick={()=>handleFlags(flags)}>Add Flags</button>
                <button>Remove Flags</button>
            </div>
        </div>
    );
};

export default Country;