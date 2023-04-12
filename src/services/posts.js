export const postPublicacion = async (body) => {
  let crear = await fetch("http://localhost:3000/publicaciones", {
    method: "POST",
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

export const login = async () => {
  let log = await fetch("http://localhost:5000/login", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      user: "jose789",
      password: "123456",
    }),
  });
  return log.json();
};

export const fabricas = async (token) => {
  let fab = await fetch("http://localhost:5000/fabricas", {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Baerer " + token,
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });
  return fab.json();
};
