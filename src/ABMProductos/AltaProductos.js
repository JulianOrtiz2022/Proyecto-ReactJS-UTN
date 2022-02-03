
import React from 'react';
import { useForm } from "react-hook-form";
import FormGroup from '../Components/FormGroup';
import Button from 'react-bootstrap/Button'
import {crearProducto} from "../Services/ProductosServices";
import {useNavigate} from "react-router-dom";

function AltaProducto() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()
  const onSubmit = async (data) => {
   try{
     const document = await crearProducto(data)
     console.log(document)
     navigate("/")
   }catch(e){
     console.log(e.code)
   }
   
 }
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup label="Nombre" register={{...register("name",{required:true})}} placeholder ="Ingrese su nombre" helpText="El nombre debe tener al menos un caracter" />
          {errors.name && <div>El campo nombre es obligatorio</div>}
          <FormGroup label="Precio" register={{...register("price",{required:true})}} />
          {errors.price && <div>El campo precio es obligatorio</div>}
          <FormGroup label="SKU" register={{...register("sku",{required:true,minLength:9})}} />
          {errors.sku?.type==="required" &&  <div>El campo SKU es obligatorio</div>}
          {errors.sku?.type==="minLength" &&  <div>Debe completar al menos 9 caracteres</div>}
          <FormGroup label="Descripcion" register={{...register("description",{required:true})}} />
          {errors.description && <div>El campo descripcion es obligatorio</div>}
          <Button type="submit" variant="primary">Guardar</Button>
       
        </form>
      </div>
    );
  
  
}

export default AltaProducto;