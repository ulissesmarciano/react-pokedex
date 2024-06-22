import { useState, useEffect } from 'react';  // Importa hooks do React, useState para gerenciar estados e useEffect para efeitos colaterais.
import api from '../services/api';  // Importa a instância de API configurada para fazer requisições HTTP.

const useFetchEvolutionData = (evolutionChainUrl) => {  // Define um hook personalizado que recebe a URL da cadeia de evolução.
    const [evolutionDataList, setEvolutionDataList] = useState([]);  // Estado para armazenar a lista de dados de evolução.

    const fetchImage = async (name) => {  // Função assíncrona para buscar a imagem de um Pokémon pelo nome.
        try {
            const response = await api.get(`/pokemon/${name}`);  // Faz a requisição para a API para obter os dados do Pokémon.
            return response.data.sprites.front_default;  // Retorna a URL da imagem frontal do Pokémon.
        } catch (error) {
            console.error('Error fetching evolution image:', error);  // Loga o erro no console em caso de falha.
            return null;  // Retorna null em caso de erro.
        }
    };

    const fetchPokemonTypes = async (name) => {  // Função assíncrona para buscar os tipos de um Pokémon pelo nome.
        try {
            const response = await api.get(`/pokemon/${name}`);  // Faz a requisição para a API para obter os dados do Pokémon.
            return response.data.types.map(type => type.type.name);  // Retorna uma lista de nomes dos tipos do Pokémon.
        } catch (error) {
            console.error('Error fetching Pokémon types:', error);  // Loga o erro no console em caso de falha.
            return null;  // Retorna null em caso de erro.
        }
    };

    useEffect(() => {  // Hook useEffect que executa a função de busca dos dados de evolução quando o componente é montado ou quando 'evolutionChainUrl' muda.
        const fetchEvolutionData = async (chain) => {  // Função assíncrona para buscar os dados de evolução.
            const evolutionDataList = [];  // Lista temporária para armazenar os dados de evolução.

            const fetchChainData = async (chain) => {  // Função assíncrona para buscar os dados de uma cadeia de evolução específica.
                const image = await fetchImage(chain.species.name);  // Busca a imagem do Pokémon atual.
                const types = await fetchPokemonTypes(chain.species.name);  // Busca os tipos do Pokémon atual.
                evolutionDataList.push({ Name: chain.species.name, Types: types, Photo: image });  // Adiciona os dados do Pokémon atual na lista de evolução.

                if (chain.evolves_to.length > 0) {  // Verifica se há evoluções subsequentes.
                    for (const evo of chain.evolves_to) {  // Itera sobre cada evolução subsequente.
                        const evoImage = await fetchImage(evo.species.name);  // Busca a imagem da evolução subsequente.
                        const evoTypes = await fetchPokemonTypes(evo.species.name);  // Busca os tipos da evolução subsequente.
                        evolutionDataList.push({ Name: evo.species.name, Types: evoTypes, Photo: evoImage });  // Adiciona os dados da evolução subsequente na lista de evolução.

                        if (evo.evolves_to.length > 0) {  // Verifica se há evoluções subsequentes da evolução atual.
                            for (const subEvo of evo.evolves_to) {  // Itera sobre cada sub-evolução.
                                const subEvoImage = await fetchImage(subEvo.species.name);  // Busca a imagem da sub-evolução.
                                const subEvoTypes = await fetchPokemonTypes(subEvo.species.name);  // Busca os tipos da sub-evolução.
                                evolutionDataList.push({ Name: subEvo.species.name, Types: subEvoTypes, Photo: subEvoImage });  // Adiciona os dados da sub-evolução na lista de evolução.
                            }
                        }
                    }
                }
            };

            await fetchChainData(chain);  // Chama a função para buscar os dados da cadeia de evolução inicial.
            setEvolutionDataList(evolutionDataList);  // Atualiza o estado 'evolutionDataList' com os dados de evolução obtidos.
        };

        if (evolutionChainUrl) {  // Verifica se a URL da cadeia de evolução foi fornecida.
            api.get(evolutionChainUrl)  // Faz a requisição para a API usando a URL da cadeia de evolução.
                .then(response => fetchEvolutionData(response.data.chain))  // Chama a função para buscar os dados de evolução com a resposta da API.
                .catch(error => console.error('Error fetching evolution chain:', error));  // Loga o erro no console em caso de falha.
        }
    }, [evolutionChainUrl]);  // Dependência do useEffect, a função é executada novamente se 'evolutionChainUrl' mudar.

    return evolutionDataList;  // Retorna a lista de dados de evolução para serem usados pelo componente que chama o hook.
};

export default useFetchEvolutionData;  // Exporta o hook personalizado para ser utilizado em outros componentes.
