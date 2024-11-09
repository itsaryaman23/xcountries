import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards/Cards';
import {useState, useEffect} from 'react';
import './App.css';
import Container from '@mui/material/Container';
import fetchData from './components/ApiData/ApiData';

function App() {
  const [countryList, setCountryList] = useState([]);

  useEffect(()=>{
    let jsData;
    const fetchCountry = async () => {
      try{

        const url = 'https://xcountries-backend.azurewebsites.net/all';
        const res = await fetch('https://xcountries-backend.azurewebsites.net/all');
        jsData = await res.json();
        // console.log(jsData);
        setCountryList(jsData);
      }
      catch(e)
      {
        console.error("Error fetching data: ", e);
      }
    }

    fetchCountry();


  },[]);

  console.log(countryList);



  // const setData = async () => {
  //   const d = await fetchCountry();
  //   console.log(d);
  //   if(d)
  //   {
  //     setCountryList(d);
  //     console.log(countryList);

  //   }
  // }
  //deciding factor of the code is the input that the user is givig ot the user this can vary onbased on different types of user and code will work accordignly

  

  return (<>
  <Container fluid>

  <div className="cardCont">
    {countryList.map(m=>
      <Cards title={m.name} url ={m.flag} key={m.abbr} />
    )}
  </div>
  </Container>
  </>)
}

export default App;
