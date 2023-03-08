export const putPublicacion = async (body, id) => {
  let crear = await fetch("http://localhost:3000/publicaciones/" + id, {
    method: "PUT",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(body),
  });
  return crear.json();
};
