import { Header } from "./components/Header";
import { Home } from "./components/Home";
import {Routes, Route, Navigate} from 'react-router-dom';
import { Shoes } from "./components/Shoes";
import { Shirts } from "./components/Shirts";
import { Caps } from "./components/Caps";
import { Error } from "./components/Error";
import { TotalItemsInCart } from "./components/TotalItemsInCart";
import { Formal } from "./components/Formal";
import { Sports } from "./components/Sports";
import { DynamicRoutes } from "./components/DynamicRoutes";
const App = ()=>{
  return (<>
  <Header/>
  <DynamicRoutes/>
    {/* <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/shoes/:type/:price"  element={<Shoes/>}/>
      <Route path="/shirts"  element={<Shirts/>}/>
      <Route  path='/capping' element={<Navigate replace to="/caps" />} >
        
      </Route>
      <Route path="/caps"  element={<Caps/>}>
        <Route path="formal" element={<Formal/>}/>
        <Route path="sports" element={<Sports/>}/>
        </Route>
      <Route path="/total-cart"  element={<TotalItemsInCart/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes> */}
  
  </>);
}
export default App;