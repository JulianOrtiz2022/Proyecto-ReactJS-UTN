import React,{useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import {getByIdProductos} from  "../Services/ProductosServices";
import {getByIdProductos1} from "../Services/ProductosServices1";
import {getByIdProductos2} from "../Services/ProductosServices2";
import {getByIdProductos3} from "../Services/ProductosServices3"

function Detalle() {
  const [producto,setProducto] = useState({})
  const [loading,setLoading] = useState(true)
  const {id} = useParams();
  console.log("id",id)
  useEffect(
    ()=>{
      const request = async ()=>{
        try{
          const response = await getByIdProductos(id);
          if(response.data){
            setProducto(response.data)
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
  useEffect(
    ()=>{
      const request = async ()=>{
        try{
          const response = await getByIdProductos1(id);
          if(response.data){
            setProducto(response.data)
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
  useEffect(
    ()=>{
      const request = async ()=>{
        try{
          const response = await getByIdProductos2(id);
          if(response.data){
            setProducto(response.data)
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
  useEffect(
    ()=>{
      const request = async ()=>{
        try{
          const response = await getByIdProductos3(id);
          if(response.data){
            setProducto(response.data)
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
  if(loading){
    return (
      <div>
        Cargando ...
  
      </div>
    );
  }else{
    return (
      <div>
        <p>{producto.title}</p>
        <p>{producto.id}</p>
      </div>
    );
  }
  
}

export default Detalle;