
import React from 'react';
import { useForm } from "react-hook-form";
import FormGroup from '../Components/FormGroup';
import Button from 'react-bootstrap/Button';

function Registro() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log("Estos sons los datos",data);

    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup label="Nombre" register={{...register("name",{required:true})}} placeholder ="Ingrese su nombre" helpText="El nombre debe tener al menos un caracter" />
          {errors.name && <div>El campo nombre es obligatorio</div>}
          <FormGroup label="Apellido" register={{...register("lastname")}} />
          <FormGroup label="Email" type="email" register={{...register("email")}} />
          <FormGroup label="Contraseña" type="password" register={{...register("password",{required:true,minLength:6})}} />
          {errors.password?.type==="required" &&  <div>El campo Contraseña es obligatorio</div>}
          {errors.password?.type==="minLength" &&  <div>Debe completar al menos 6 caracteres</div>}
          <Button type="submit" variant="primary">Registrarme</Button>
        </form>
  
      </div>
    );
  
  
}

export default Registro;
