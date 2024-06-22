import { useState, useEffect } from 'react';  // Importa hooks do React: useState para gerenciar estados e useEffect para efeitos colaterais.
import api from '../services/api';  // Importa a instância de API configurada para fazer requisições HTTP.

const useFetchPokemonData = (pokemonName) => {  // Define um hook personalizado que recebe o nome do Pokémon.
    const [pokemonData, setPokemonData] = useState(null);  // Estado para armazenar os dados do Pokémon.

    useEffect(() => {  // Hook useEffect que executa a função de busca dos dados do Pokémon quando o componente é montado ou quando 'pokemonName' muda.
        const fetchPokemonData = async () => {  // Função assíncrona para buscar os dados do Pokémon.
            try {
                const response = await api.get(`/pokemon/${pokemonName}`);  // Faz a requisição para a API para obter os dados do Pokémon.
                const pokemon = response.data;  // Armazena os dados do Pokémon na variável 'pokemon'.

                const speciesResponse = await api.get(pokemon.species.url);  // Faz a requisição para a API para obter os dados da espécie do Pokémon.
                const speciesData = speciesResponse.data;  // Armazena os dados da espécie na variável 'speciesData'.

                const evolutionChainResponse = await api.get(speciesData.evolution_chain.url);  // Faz a requisição para a API para obter os dados da cadeia de evolução.
                const evolutionChainData = evolutionChainResponse.data;  // Armazena os dados da cadeia de evolução na variável 'evolutionChainData'.

                const typesData = await Promise.all(pokemon.types.map(async (type) => {  // Faz requisições para obter os dados de cada tipo do Pokémon.
                    const typeResponse = await api.get(type.type.url);  // Faz a requisição para a API para obter os dados de um tipo específico.
                    return typeResponse.data;  // Retorna os dados do tipo.
                }));

                setPokemonData({  // Atualiza o estado 'pokemonData' com todos os dados obtidos.
                    ...pokemon,  // Inclui os dados básicos do Pokémon.
                    species: speciesData,  // Inclui os dados da espécie.
                    evolution_chain: evolutionChainData,  // Inclui os dados da cadeia de evolução.
                    types: typesData,  // Inclui os dados dos tipos.
                });
            } catch (error) {
                console.error('Error fetching Pokémon data:', error);  // Loga o erro no console em caso de falha.
            }
        };

        fetchPokemonData();  // Chama a função para buscar os dados do Pokémon.
    }, [pokemonName]);  // Dependência do useEffect, a função é executada novamente se 'pokemonName' mudar.

    return pokemonData;  // Retorna os dados do Pokémon para serem usados pelo componente que chama o hook.
};

export default useFetchPokemonData;  // Exporta o hook personalizado para ser utilizado em outros componentes.
