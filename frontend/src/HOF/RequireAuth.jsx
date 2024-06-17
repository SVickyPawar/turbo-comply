import React,{useContext} from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';


const RequireAuth = ({children}) => {
    const {isLoggedIn} = useContext(AuthContext);

    if(isLoggedIn==false){
       return <Navigate to='/login' />
    }else{
      return (children);

    }

}

export default RequireAuth