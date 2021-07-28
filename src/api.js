//apiye yapilacak istekler icin
//axios import
import axios from'axios'
//istek yapacagimiz api
const baseEndPoint="https://api.covid19api.com"

export const fetchCountries= async ()=>{
const {data} = await axios.get(`${baseEndPoint}/countries`);
return data;
}

export const fetchDailyData= async (country)=>{
    const {data} = await axios.get(`${baseEndPoint}/dayone/country/${country}`);
    return data;

}