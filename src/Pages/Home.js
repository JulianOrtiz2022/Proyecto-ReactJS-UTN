import React,{useState,useEffect} from 'react';
import Producto from '../Components/Producto';
import {getAllProductos} from "../Services/ProductosServices";
import {getAllProductos1} from "../Services/ProductosServices1";
import {getAllProductos2} from "../Services/ProductosServices2";
import {getAllProductos3} from "../Services/ProductosServices3";
import firebase from "../Config/firebase";
import Spinner from 'react-bootstrap/Spinner'

console.log(firebase)
function Home() {
  const [productos,setProductos] = useState([])
  const [productosByke,setProductosByke] = useState([])
  const [productosTv, setProductosTv] =useState([])
  const [productosNotebook, setProductosNotebook] =useState([])
  const [loading,setLoading] = useState(true)
  useEffect(
    ()=>{
      const request = async ()=>{
        try{
          const response = await getAllProductos()
          if(response.data.results) {
            setProductos(response.data.results)
            setLoading(false)
          }
        }catch(e){
          console.log(e)
        }
      }
      request()
  },
  []
  )
  useEffect(
    ()=>{
      const request = async ()=>{
        try{
          const response = await getAllProductos1()
          if(response.data.results) {
            setProductosTv(response.data.results)
            setLoading(false)
          }
        }catch(e){
          console.log(e)
        }
      }
      request()
  },
  []
  )
  useEffect(
    ()=>{
      const request = async ()=>{
        try{
          const response = await getAllProductos2()
          if(response.data.results) {
            setProductosByke(response.data.results)
            setLoading(false)
          }
        }catch(e){
          console.log(e)
        }
      }
      request()
  },
  []
  )
  useEffect(
    ()=>{
      const request = async ()=>{
        try{
          const response = await getAllProductos3()
          if(response.data.results) {
            setProductosNotebook(response.data.results)
            setLoading(false)
          }
        }catch(e){
          console.log(e)
        }
      }
      request()
  },
  []
  )
  if(loading){
    return (
      <Spinner animation="border" role="status"  variant="info">
        <span className="visually-hidden">Cargando..</span>
      </Spinner>
    );
  }else{
    return (
      <div>
        {productos.map(producto=><Producto datos={producto} />)}
        {productosTv.map(producto=><Producto datos={producto} />)}
        {productosByke.map(producto=><Producto datos={producto} />)}
        {productosNotebook.map(producto=><Producto datos={producto} />)}
      </div>
    );
  }
}

export default Home;
