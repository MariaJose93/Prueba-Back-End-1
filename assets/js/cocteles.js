const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=c"

export default async function getDrinks() {
    const res = await fetch(apiUrl);
    const coctel = await res.json();
    return coctel;
}