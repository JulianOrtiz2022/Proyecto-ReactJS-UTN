import React,{useState} from 'react';

function Compra() {
    const [mensaje,setMensaje]=useState('')
    const handleClick =() =>{
        setMensaje('"Gracias Por su Compra"')
    }
    return(
        <div>
            <h1>Producto</h1>
            <p>Nombre:Nike Js</p>
            <p>Descripcion:Zapatilla Nike modelo Js</p>
            <p>Precio:1500$</p>
            <p>SKU:12345678</p>
            <p>Cantidad disponible:1</p>
            <button onClick={handleClick}>Comprar</button>
            <div>
            {mensaje}
            </div>
        </div>
    )
    }

export default Compra;