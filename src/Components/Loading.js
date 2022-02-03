import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
function Loading(props) {
    const {loading,children,configuration} = props
    
    if(loading){
      return (
        <Spinner animation={configuration?.animation || "border"} role="status" 
        variant={configuration?.variant || "warning"}>
        <span className="visually-hidden">Cargando...</span>
        </Spinner>
      );
    }else{
      return(
        <>
          {children}
        </>
      )
    }
  
  
}

export default Loading;