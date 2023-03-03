export const obtainListDogs = async () => {
  let a = await fetch("https://dog.ceo/api/breeds/list/all");

  return a.json();
};
