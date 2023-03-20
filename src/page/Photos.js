
import React, { useState,useEffect } from 'react'

import CardAlbem from '../components/CardAlbem';
import CardList from '../components/CardList';

export default function Photos() {
    //add click
    const [isAdd, toAdd] = useState(false);

    //phots list
    const [dataa,setDataa] = useState([]);

    //photos id
    const [data, setData] = useState({});
    const [id, setId] = useState(1);

    const apiGet = () =>{

        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            setDataa(json)
        });
    };

    useEffect(() => {
      apiGet();
    }, [])


  
    const fetchData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
      const json = await response.json();
      setData(json);
    };
  
    
  
    const handleButtonClick = () => {
      fetchData();
    
    };

    


  return (
     <div>
        <div> { isAdd ? <CardList data={data}/> :<CardAlbem  
          dataa={dataa} 
          handleButtonClick={handleButtonClick} 
          toAdd={toAdd} isAdd={isAdd} />  }
        </div>
    </div>
  )
}
