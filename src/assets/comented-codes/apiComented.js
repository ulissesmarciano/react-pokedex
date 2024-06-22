import axios from "axios"; //Import da biblioteca

const api = axios.create({// Faz a requizição para a renderização dos elementos
    baseURL: "https://pokeapi.co/api/v2",//Url que é utilizada como base para as requisições
});

export default api;//Exportação da função