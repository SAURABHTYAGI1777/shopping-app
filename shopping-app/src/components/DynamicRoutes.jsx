import {useRoutes} from 'react-router-dom'
import { Home } from './Home'
import { Caps } from './Caps'
export const DynamicRoutes = ()=>{
    const getDataFromNetwork=()=>{
        return [{
            'path':'/' , element :<Home/>
        },{
            'path':'/caps' , element:<Caps/>
        }];
    }
    const routes = useRoutes(getDataFromNetwork());
    return routes;
}