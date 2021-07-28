import React,{useState,useEffect} from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import CovidLogo from './covid-19.svg'
import { fetchCountries } from './api';
import AreaChart from './components/AreaCharts';
import { makeStyles } from '@material-ui/core/styles';

import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin:"50px auto",
    width: "50%",
  },
}));


const App = () => {
  

const[countries,setCountries]=useState([]);
const[country,setCountry]=useState("turkey");
  
useEffect(() => {
  //bir fonksiyon yaziyoruz apideki fonksiyonu kullanicak


  const fetchCountriesData=async()=>{
    const countries=await fetchCountries();
    setCountries(countries)
  }
fetchCountriesData();
  
}, [])


  
const classes = useStyles();
return (
    
       <React.Fragment>
        <CssBaseline/>

        <Container maxWidth="lg"  >
<Grid container>

<img src={CovidLogo} alt="covid-19"  style={{marginTop:20, width:90,height:90}}></img>

<FormControl className={classes.formControl}>
        
        <Select
          
          value={country}
          onChange={(event)=>setCountry(event.target.value)}
        >
        {
          countries.map(country =>(
           < MenuItem value={country.Slug}>{country.Country}</MenuItem>
          ))
        }
        </Select>
      </FormControl>

<Grid Item xs={12}></Grid>
<AreaChart country={country}/>
</Grid>


        </Container>
      </React.Fragment>
    
  )
}

export default App
