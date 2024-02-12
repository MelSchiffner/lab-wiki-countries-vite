import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
    const [countries, setCountries] = useState([])
    const [error, setError] = useState(null); 

    const baseUrl = "https://ih-countries-api.herokuapp.com";

    useEffect(() => {
        axios
        .get(`${baseUrl}/countries`)
        .then((response) => {
            setCountries(response.data);
        })
        .catch((error) => {
            setError("Error. Please try again later.")
            console.log("Error");
          });

    }, []);

  return (
    <div
      className="container"
      style={{ maxheight: "90vh", overflow: "scroll" }}
    >
      <h1 style={{ fontsize: "24px" }}>
        WikiCountries: Your Guide to the World
      </h1>
      <div className="list-group">
        <ul>
            {countries.map((countryDetails, index) => (
                <li key={index} 
                className="list-group-item list-group-item-action">
                    <Link to={`/countries/${countryDetails.alpha3code}`}>
                        {countryDetails.flag}
                 
                        {countryDetails.name.common}
                    </Link>
                </li>

            ))}
        </ul>



      </div>
    </div>
  );
}

export default HomePage;
