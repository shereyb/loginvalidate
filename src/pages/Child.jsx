import React, { useEffect, useState } from "react";
import "../App.css";

function Api (){
  const [alls, setAlls] = useState(null);
  useEffect(() => {
          fetch(' https://restcountries.com/v2/all?fields=name,region,flag')
          .then(data => data.json())
          .then(data => {
            console.log(data);
            setAlls(data);
          });
  }, []);
   return(
    <div className="Api">
      {
        (alls) ? 
        (<ul>
          {
            alls.map(all =>{
              return <li>{alls.all}</li>
            })
          }
        </ul>) : (<h3>Loading.......</h3>)
      }

    </div>
   )
    }










export default Api
