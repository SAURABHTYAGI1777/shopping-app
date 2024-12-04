import { all } from "axios";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom"

export const Shirts = ()=>{
    const [params] =  useSearchParams();
    const getData=()=>{
        let allData = "";
        for(let p of params.entries()){
            //console.log('P is ', p[1]);
            allData =allData+ p[1]+" ";
        }
        return allData;

    }
    useEffect(()=>{
        getData();  
    },[])
    return (<h2>Shirts.... {getData()}</h2>)
}