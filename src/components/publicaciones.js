import { useEffect, useState } from "react";
import { getPublicaciones } from "../services/gets";
import Publicacion from "./publicacion";

const Publicaciones = () => {
  const [publicaciones, setPublicaciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({
    error: false,
    mensaje: "",
  });

  const obtenerPublicaciones = async () => {
    try {
      let respuesta = await getPublicaciones();
      console.log("respuesta", respuesta);
      if (respuesta.length > 0) {
        setPublicaciones(respuesta);
      } else {
        setPublicaciones([]);
      }
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setError({
        error: true,
        mensaje: error,
      });
      setLoading(false);
    }
  };
  useEffect(() => {
    obtenerPublicaciones();
  }, []);
  return loading ? (
    <p>.....loading</p>
  ) : error.error ? (
    <p>error</p>
  ) : (
    publicaciones.map((publicacion, key) => {
      return (
        <span key={key}>
          <Publicacion publicacion={publicacion} index={publicacion.id} />
        </span>
      );
    })
  );
};

export default Publicaciones;
