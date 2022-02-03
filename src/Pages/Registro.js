
import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import FormGroup from '../Components/FormGroup';
import firebase from "../Config/firebase";
import AlertCustom from '../Components/AlertCustom';
import ButtonWithLoading from '../Components/ButtonWithLoading';
import {registroMessage} from "../Utils/errorMessage";
import {useNavigate} from "react-router-dom";

function Registro() {
    const { register, handleSubmit, formState:{ errors } } = useForm();
    const [loading,setLoading] = useState(false);
    const [alert,setAlert] = useState({variant:"",text:""});
    const navigate = useNavigate()
    const onSubmit = async (data) => {
      try{
      console.log("Estos sons los datos",data,data.email, data.password);
      const responseUser = await 
      firebase.auth.createUserWithEmailAndPassword
      // metodo para crear email y password
      (data.email, data.password)
      console.log(responseUser)
      if(responseUser.user.uid)
      // El usuario se inserto bien con su id
      {
        const document = await firebase.db.collection("usuarios")
        .add({
          // crea una "lista" de usuarios en firestore database
          name: data.name,
          lastname: data.lastname,
          userId: responseUser.user.uid,
        })
        console.log(document)
        setAlert({variant:"success",text:"Registro exitoso"})
        setLoading(false)
        navigate("/ingresar")
      }
      }catch(e){
        console.log(e.code)
      setAlert({variant:"danger",text:registroMessage[e.code]})
      setLoading(false)
      }
    }
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
          <ButtonWithLoading loading={loading} type="submit" variant="primary">Registrarse</ButtonWithLoading>
          <AlertCustom {...alert}  />
          
        </form>
  
      </div>
    );
  
  
}

export default Registro;
