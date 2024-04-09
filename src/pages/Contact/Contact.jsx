import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Contact.css";
import { db } from "../../firebase/config";
import { collection, addDoc } from 'firebase/firestore';
import { motion } from "framer-motion";
import Button from "../../components/Button/Button";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null);

  const enviar = async (data) => {
    try {
      const projectsRef = collection(db, 'contacto');
      await addDoc(projectsRef, { ...data });
      console.log('Datos agregados correctamente a Firebase');
    } catch (error) {
      console.error('Error al agregar los datos a Firebase:', error);
      setError(error.message);
    }
  };

  return (
    <div className="container">
      <motion.h1 
        className="mainTitle"
        initial={{ opacity: 0, x: -90 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >Contacto
      </motion.h1>
      <motion.h4 
        className="mainSubtitle"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        >Solicita una llamada, descubre todos mis sevicios.
      </motion.h4>
      <form className="form" onSubmit={handleSubmit(enviar)}>

        <div className="inputBox">
          <input 
            type="text" 
            className="input" 
            placeholder="Nombre"
            required
            {...register("name")}
          />
        </div>

        <div className="inputBox">
          <input 
            type="email" 
            className="input" 
            placeholder="Email"
            required
            {...register("email")}
          />
        </div>

        <div className="inputBox">
          <input 
            type="tel" 
            className="input" 
            placeholder="Telefono"
            required
            {...register("phone")}
          />
        </div>

        <div className="inputBox">
          <input 
            type="textarea" 
            className="textArea" 
            placeholder="Mensaje"
            required 
            {...register("message")}
          />
        </div>

        <Button className="send" type="submit">ENVIAR</Button>
      </form>
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default Contact;
