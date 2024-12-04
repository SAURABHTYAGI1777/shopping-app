import { useEffect } from "react"

export const Discount = ({per})=>{
    useEffect(()=>{
        return ()=>{
            console.log('Good Bye Discount Component....')
        }
    },[])
    return (<p>Discount is {per} %</p>)
}