import React,{useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import Loading from '../Components/Loading';
import {getByIdProductos} from  "../Services/ProductosServices";

function Detalle() {
  const [producto,setProducto] = useState({})
  const [loading,setLoading] = useState(true)
  const {id} = useParams();
  console.log("id",id)
  useEffect(
    ()=>{
      const request = async ()=>{
        try{
         const document = await getByIdProductos(id)
          if(document){
            setProducto(document.data()) // con data acceso a la informacion
            setLoading(false)
          }
        }catch(e){
          console.log(e)
        }
      }
      request()
    },
    [id]
  )
    return (
      <Loading loading={loading} configuration={{animation:"grow", variant:"primary"}}>
        <p><b>Nombre:</b></p>
        <p>{producto.name}</p>
        <p><b>Descripcion:</b></p>
        <p>{producto.description}</p>
        <p><b>Precio:</b></p>
        <p>$ {producto.price}</p>
        <p><b>SKU:</b></p>
        <p>{producto.sku}</p>
      </Loading>
    );
  }

export default Detalle;