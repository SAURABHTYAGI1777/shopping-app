import {NavLink, Link, Outlet } from "react-router-dom"
import './Caps.css';
export const Caps = ()=>{
    return (<h2>Caps....
        <NavLink  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }  to="formal">Formal Caps</NavLink>
        &nbsp; &nbsp; &nbsp;
        <NavLink style={({isActive})=>isActive?{color:'red'}:{color:'green'}} to="sports">Sports Caps</NavLink>
        <Outlet/>
    </h2>)
}