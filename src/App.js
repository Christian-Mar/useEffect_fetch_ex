import { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [price, setPrice] = useState(); //[]
    
    
    
      useEffect(() => {

      const fetchData = async () => {

        const response = await fetch(
          "https://api.coindesk.com/v1/bpi/currentprice.json"
        );
        const data = await response.json();
        //console.log(data.bpi.EUR.rate);
        setPrice(data); 
        //price.push(data);
      }
        fetchData();
        setInterval(fetchData, 60000);
       
    }, []);
    
    

    return (
			<>
				<div style={{ color: 'DarkBlue', margin: '4rem'}}>
					Bitcoin = {price?.bpi.EUR.rate} EUR on {price?.time.updated}
				</div>
			</>
		);
  };

export default App;

/* 

The optional chaining operator ?. permits reading the value of a property located deep within a chain of connected objects without having to expressly validate that each reference in the chain is valid. The ?. operator functions similarly to the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined. When used with function calls, it returns undefined if the given function does not exist.

This results in shorter and simpler expressions when accessing chained properties when the possibility exists that a reference may be missing. It can also be helpful while exploring the content of an object when there's no known guarantee as to which properties are required.

*/