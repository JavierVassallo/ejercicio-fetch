import { useState } from "react";
import { postPublicacion } from "../services/posts";

const Form = () => {
  const [formulario, setFormulario] = useState({
    creador: "",
    titulo: "",
    contenido: "inserta aqui tu contenido",
  });
  const [loadingPost, setLoadingPost] = useState(false);

  const handleChangeForm = (event) => {
    let clave = event.target.name;
    let valor = event.target.value;
    let nuevoForm = { ...formulario };
    nuevoForm[clave] = valor;
    setFormulario(nuevoForm);
  };

  const crearPublicacion = async () => {
    try {
      setLoadingPost(true);
      let crear = await postPublicacion(formulario);
      console.log("crear", crear);
      setFormulario({
        creador: "",
        titulo: "",
        contenido: "inserta aqui tu contenido",
      });
      setLoadingPost(false);
    } catch (error) {
      alert("ubo un inconveniente");
      setLoadingPost(false);
    }
  };

  return (
    <div style={{ marginTop: "4vh", marginBottom: "4vh" }}>
      <input
        type="text"
        name="creador"
        onChange={(event) => {
          handleChangeForm(event);
        }}
        value={formulario.creador}
      />
      <input
        type="text"
        name="titulo"
        onChange={(event) => {
          handleChangeForm(event);
        }}
        value={formulario.titulo}
      />
      <textarea
        name="contenido"
        rows="10"
        cols="50"
        value={formulario.contenido}
        onChange={(event) => {
          handleChangeForm(event);
        }}
      />
      <button
        onClick={
          loadingPost
            ? () => {}
            : () => {
                crearPublicacion();
              }
        }
      >
        {loadingPost ? "Publicando" : "Publicar"}
      </button>
    </div>
  );
};
export default Form;
