import { useState, useEffect } from 'react';  // Importa hooks do React: useState para gerenciar estados e useEffect para efeitos colaterais.
import api from '../services/api';  // Importa a instância de API configurada para fazer requisições HTTP.

const useFetchPokemonList = (limit) => {  // Define um hook personalizado que recebe um limite de quantidade de Pokémons a serem buscados.
    const [pokemonList, setPokemonList] = useState([]);  // Estado para armazenar a lista de Pokémons.

    useEffect(() => {  // Hook useEffect que executa a função de busca da lista de Pokémons quando o componente é montado ou quando 'limit' muda.
        const fetchPokemonList = async () => {  // Função assíncrona para buscar a lista de Pokémons.
            try {
                const response = await api.get(`/pokemon?limit=${limit}`);  // Faz a requisição para a API para obter a lista de Pokémons com o limite especificado.
                setPokemonList(response.data.results);  // Atualiza o estado 'pokemonList' com os resultados obtidos da API.
            } catch (error) {
                console.error('Error fetching Pokémon list:', error);  // Loga o erro no console em caso de falha.
            }
        };

        fetchPokemonList();  // Chama a função para buscar a lista de Pokémons.
    }, [limit]);  // Dependência do useEffect, a função é executada novamente se 'limit' mudar.

    return pokemonList;  // Retorna a lista de Pokémons para serem usados pelo componente que chama o hook.
};

export default useFetchPokemonList;  // Exporta o hook personalizado para ser utilizado em outros componentes.
