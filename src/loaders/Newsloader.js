import axios from "axios";

export async function NewsLoader(){
    const key=process.env.REACT_APP_API_KEY;
    const url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${key}`;
    const responce=await axios.get(url);

    return responce.data;
};