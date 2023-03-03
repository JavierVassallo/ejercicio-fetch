import { useEffect, useState } from "react";
import { obtainListDogs } from "../services/getDogs";

const ListDogs = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const getPerros = async () => {
    try {
      const result = await obtainListDogs();

      setList(result.message.hound);
      setLoading(false);
    } catch (error) {
      console.log("e:", error);
    }
  };
  useEffect(() => {
    getPerros();
  }, []);
  return loading
    ? "......  cargando"
    : list.map((perro, key) => {
        return (
          <div key={key}>
            <p>{perro}</p>
          </div>
        );
      });
};

export default ListDogs;
