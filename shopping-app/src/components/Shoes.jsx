import { useEffect } from "react";
import { useParams } from "react-router-dom"

export const Shoes = ()=>{
    const {type, price} = useParams();
    useEffect(()=>{
            console.log('Type of Shoe ', type);
      
    },[])
    return (<h2>Shoes.... {type} {price}</h2>)
}