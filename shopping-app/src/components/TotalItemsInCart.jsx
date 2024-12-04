import {useLocation} from 'react-router-dom';
export const TotalItemsInCart= ()=>{
    const params = useLocation();
    console.log('Params are ', params);
    return (<h3>Total Items in Cart {params.state.discount} {params.state.offers}</h3>)
}