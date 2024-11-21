async function getData(url) {
  const res = await fetch(url);
  const post = await res.json();
  return post;
}

export default getData;
