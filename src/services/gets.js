export const getPublicaciones = async () => {
  let publicaciones = await fetch("http://localhost:3000/publicaciones");
  return publicaciones.json();
};

export const getPublicacion = async (id) => {
  let publicaciones = await fetch("http://localhost:3000/publicaciones/" + id);
  return publicaciones.json();
};
