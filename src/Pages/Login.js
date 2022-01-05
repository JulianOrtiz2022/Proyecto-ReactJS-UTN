
import React from 'react';
import { useForm } from "react-hook-form";
import FormGroup from '../Components/FormGroup'
import Button from 'react-bootstrap/Button';

function Login() {
  const { register, handleSubmit} = useForm();
  const onSubmit = data => console.log("Datos",data);
  
    return (
      <div>
         <form onSumit= {handleSubmit(onSubmit)}>
         <FormGroup label="Usuario" register= {{...register("user")}} />
         <FormGroup label="Contraseña" type="password" register= {{...register("password")}} />
         <Button type="submit" variant="primary">Ingresar</Button>
         </form>
      </div>
    );
}
export default Login;