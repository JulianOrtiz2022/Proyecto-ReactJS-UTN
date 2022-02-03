
import React, {useState, useContext} from 'react';
import { useForm } from "react-hook-form";
import FormGroup from '../Components/FormGroup';
import firebase from "../Config/firebase";
import AlertCustom from '../Components/AlertCustom';
import ButtonWithLoading from '../Components/ButtonWithLoading';
import {loginMessage} from "../Utils/errorMessage";
import AuthContext from '../Context/AuthContext';
import {useNavigate} from "react-router-dom";

function Login() {
  const { register, handleSubmit, formState:{errors}} = useForm();
  const [loading,setLoading] = useState(false)
  const [alert,setAlert] = useState({variant:"",text:""})
  const context = useContext(AuthContext)
  const navigate = useNavigate()
  const onSubmit = async (data) => {
    try{
      setLoading(true)
      const responseUser = await
     firebase.auth.signInWithEmailAndPassword(data.email, data.password)
     // metodo para verificar email y password
      setLoading(false)
      context.loginUser()
      console.log(responseUser.user.uid)
      navigate("/")
    }catch(e){
      console.log(e.code)
      setAlert({variant:"danger",text:loginMessage[e.code]})
      setLoading(false)
    }
  }
  
    return (
      <div>
         <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup label="Email" type="email" register={{...register("email")}} />
          <FormGroup label="Contraseña" type="password" register={{...register("password",{required:true,minLength:6})}} />
          {errors.password?.type==="required" &&  <div>El campo Contraseña es obligatorio</div>}
          {errors.password?.type==="minLength" &&  <div>Debe completar al menos 6 caracteres</div>}
          <ButtonWithLoading loading={loading} type="submit" variant="primary">Ingresar</ButtonWithLoading>
          <AlertCustom {...alert}  />
        </form>
      </div>
    );
}
export default Login;