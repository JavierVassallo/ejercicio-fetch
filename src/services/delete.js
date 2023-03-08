export const deletePublicacion = async (id) => {
  let crear = await fetch("http://localhost:3000/publicaciones/" + id, {
    method: "DELETE",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: null,
  });
  return crear.json();
};
