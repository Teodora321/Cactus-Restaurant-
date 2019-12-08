import React, {useState, createContext} from 'react';

export const AuthContext = createContext();

export function AuthProvider(props) {

  const [user, setUser] = useState( {isLogged: false, userId: ''} );
 
  return(
    <AuthContext.Provider value={[user, setUser]}>
      {props.children}
    </AuthContext.Provider>  
  )
}
