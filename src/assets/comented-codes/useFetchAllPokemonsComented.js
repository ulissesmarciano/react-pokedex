import { useState, useEffect } from 'react';  // Importa hooks do React, useState para gerenciar estados e useEffect para efeitos colaterais.
import api from '../services/api';  // Importa a instância de API configurada para fazer requisições HTTP.

const useFetchAllPokemons = (limit = 300) => {  // Define um hook personalizado que recebe um limite padrão de 300 Pokémons.
    const [pokemons, setPokemons] = useState([]);  // Estado para armazenar a lista de Pokémons.
    const [loading, setLoading] = useState(true);  // Estado para indicar se os dados estão sendo carregados.
    const [error, setError] = useState(null);  // Estado para armazenar possíveis erros durante a requisição.

    useEffect(() => {  // Hook useEffect que executa a função de busca dos Pokémons quando o componente é montado ou quando 'limit' muda.
        const getAllPokemons = async () => {  // Função assíncrona para buscar todos os Pokémons.
            try {
                const response = await api.get(`/pokemon?limit=${limit}`);  // Faz a requisição para a API de Pokémons com o limite especificado.
                const { results } = response.data;  // Desestrutura o resultado da requisição para obter a lista de Pokémons.

                const payloadPokemons = await Promise.all(  // Aguarda a resolução de todas as promessas retornadas pelo mapeamento dos Pokémons.
                    results.map(async (pokemon) => {  // Mapeia sobre cada Pokémon na lista de resultados.
                        const { id, types, sprites } = await getMoreInfo(pokemon.url);  // Busca mais informações detalhadas sobre cada Pokémon.
                        return {  // Retorna um objeto contendo as informações necessárias para cada Pokémon.
                            name: pokemon.name,
                            id,
                            types,
                            sprites,
                        };
                    })
                );
                setPokemons(payloadPokemons);  // Atualiza o estado 'pokemons' com os dados obtidos.
            } catch (err) {
                setError('Erro ao carregar os Pokémons');  // Define a mensagem de erro em caso de falha na requisição.
                console.error(err);  // Loga o erro no console para depuração.
            } finally {
                setLoading(false);  // Define 'loading' como false para indicar que a requisição terminou.
            }
        };

        const getMoreInfo = async (url) => {  // Função assíncrona para buscar mais informações sobre um Pokémon específico.
            const response = await api.get(url);  // Faz a requisição para a API usando a URL específica do Pokémon.
            const { id, types, sprites } = response.data;  // Desestrutura os dados da resposta para obter id, tipos e sprites.
            return { id, types, sprites };  // Retorna os dados necessários.
        };

        getAllPokemons();  // Chama a função que busca todos os Pokémons.
    }, [limit]);  // Dependência do useEffect, a função é executada novamente se 'limit' mudar.

    return { pokemons, loading, error };  // Retorna os estados 'pokemons', 'loading' e 'error' para serem usados pelo componente que chama o hook.
};

export default useFetchAllPokemons;  // Exporta o hook personalizado para ser utilizado em outros componentes.
