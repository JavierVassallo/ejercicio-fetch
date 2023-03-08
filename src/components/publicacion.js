import { useState } from "react";
import { deletePublicacion } from "../services/delete";
import { putPublicacion } from "../services/put";

const Publicacion = ({ publicacion, index }) => {
  const [contenido, setContenido] = useState(publicacion.contenido);
  const Actualizar = async () => {
    try {
      let body = {
        creador: publicacion.creador,
        titlulo: publicacion.titulo,
        contenido: contenido,
      };
      let actualizar = await putPublicacion(body, index);
      console.log("actualizar", actualizar);
    } catch (error) {
      console.log("error", error);
    }
  };
  const Borrar = async () => {
    try {
      let borrar = await deletePublicacion(index);
      console.log("borrar", borrar);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div>
      <h6>{publicacion.creador}</h6>
      <h4>{publicacion.titulo}</h4>
      <textarea
        onChange={(event) => {
          setContenido(event.target.value);
        }}
        rows="10"
        cols="50"
        value={contenido}
      />
      <button onClick={Actualizar}>Actualizar</button>
      <button onClick={Borrar}>Borrar Post</button>
    </div>
  );
};

export default Publicacion;
