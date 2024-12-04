import { useEffect, useState } from "react"
import { getProducts } from "../utils/api-client"
import { Discount } from "./Discount";
import { Product } from "./Product";

export const Home = ()=>{
    // const [count, setCount] = useState(0);
    // const [count2, setCount2] = useState(10);
    const [discount, setDiscount] = useState(10.0);
    const [allProducts, setAllProducts] = useState([]);
    useEffect(()=>{
        console.log('Component Mounting Phase...');
        // API Call
        // LocalStorage Fetch
        loadProducts();
      

    },[])

    const loadProducts = async ()=>{
        const products =  await getProducts();
        setAllProducts(products);
        console.log('All Products are ', products);
    }

    // useEffect(()=>{
    //     console.log('Component UPdation Phase')
    // })
    //getProducts();
    return (<><h1 className='alert alert-info text-center'>Welcome to the Shopping App</h1>
        {discount>0?<Discount per={discount}/>:<p>No Discount</p>}
        {allProducts.length==0 && <h3>No Product....</h3>}   
        <div className='d-flex flex-wrap'>
        {allProducts.length>0 && allProducts.map(product=><Product product={product}/>)} 
        </div>
        {/* <button onClick={()=>{
            setDiscount(0.0);
        }}>Change Discount</button> */}
        {/* Count2 {count2}
        <button onClick={()=>{
            setCount2(count2+1)
        }}>Count2 Call</button>
        &nbsp;
        <button onClick={()=>{
            setCount(count+1)
        }}>{count}</button> */}
    </>
    )
}