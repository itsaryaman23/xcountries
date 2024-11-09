const url = "https://xcountries-backend.azurewebsites.net/all";

const fetchData = async () => {
    const res = await fetch(url);
    const jsData = await res.json();
    return res;
}

export default fetchData;