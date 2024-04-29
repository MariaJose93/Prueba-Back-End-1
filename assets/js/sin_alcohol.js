import getDrinks from "./cocteles.js";


const BoxDrinks = document.querySelector("#sin_alcoholBox");

async function renderDrinks() {
    const coctel = await getDrinks();
    let template = "";

    coctel.drinks.forEach((coctel) => {
        if (coctel.strDrinkThumb){
            if (coctel.strAlcoholic === "Non alcoholic") {
                template += `
                <div id="cocteles">
                <img src="${coctel.strDrinkThumb}" alt="imagen_Cóctel">
                <h2>${coctel.strDrink}</h2>
                <p> Código:${coctel.idDrink}</p>
                <p>"${coctel.strCategory}"</p>
                <h4>Ingredientes:</h4> 
                <p>- ${coctel.strIngredient1}</p>
                <p>- ${coctel.strIngredient2}</p>
                <p>${coctel.strAlcoholic}</p>
                </div>
                `;
            }
        }
    });
    BoxDrinks.innerHTML = template;
}

renderDrinks();