
import React,{useEffect} from 'react';
import { useForm } from "react-hook-form";
import FormGroup from '../Components/FormGroup';
import Button from 'react-bootstrap/Button'
import firebase from '../Config/firebase'
import {useParams, useNavigate} from "react-router-dom"
import {getByIdProductos} from  "../Services/ProductosServices";
function ProductosModificar() {
     const { register, handleSubmit,setValue, formState: { errors } } = useForm();
     const {id} = useParams();
     const navigate = useNavigate()
    const onSubmit = async (data) => {
      try{
        const document = await firebase.db.doc("productos/"+id)
        .set(data)// actualiza la lista "productos"
        console.log(document)
        navigate("/")
      }catch(e){
        console.log(e.code)
      }
      
    }
    useEffect(
      ()=>{
        const request = async ()=>{
          try{
            const response = await getByIdProductos(id)
            if(response){
              setValue("name",response.data().name)
              setValue("price",response.data().price)
              setValue("description",response.data().description)
              setValue("sku",response.data().sku)
            }
          }catch(e){
            console.log(e)
          }
        }
        request()
      },
      [id,setValue]
    )
    const hanldeDelete = async ()=>{
      // borra el documento
        try{
            const document = await firebase.db.doc("productos/"+id)
            .delete()
            console.log(document)
            navigate("/")
        }catch(e){
            console.log(e)
        }
    }
    return (
      <div>
          <Button onClick={hanldeDelete} variant="danger">Eliminar</Button>
          <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup label="Nombre" register={{...register("name",{required:true})}} placeholder="Ingrese su nombre" helpText="El nombre de tener al menos 1 caracter" />
          {errors.name && <div>El campo nombre es obligatorio</div>}
          <FormGroup label="Precio" register={{...register("price",{required:true})}} />
          {errors.price && <div>El campo nombre es obligatorio</div>}
          <FormGroup label="Descripcion" register={{...register("description",{required:true})}} />
          {errors.description && <div>El campo nombre es obligatorio</div>}
          <FormGroup label="SKU" register={{...register("sku",{required:true})}} />
          {errors.description && <div>El campo nombre es obligatorio</div>}
          <Button type="submit" variant="primary">Guardar</Button>
        </form>
  
      </div>
    );
  
  
}

export default ProductosModificar;