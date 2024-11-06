import { useState, useEffect } from 'react';
import api from '../services/api';

const useFetchEvolutionData = (evolutionChainUrl) => {
    const [evolutionDataList, setEvolutionDataList] = useState([]);

    const fetchImage = async (name) => {
      try {
        const response = await api.get(`/pokemon/${name}`);
        return response.data.sprites.front_default;
      } catch (error) {
        console.error('Error fetching evolution image:', error);
        return null;
      }
    };

    const fetchPokemonTypes = async (name) => {
      try {
        const response = await api.get(`/pokemon/${name}`);
        return response.data.types.map(type => type.type.name);
      } catch (error) {
        console.error('Error fetching Pokémon types:', error);
        return null;
      }
    };

  useEffect(() => {
      const fetchEvolutionData = async (chain) => {
          const evolutionDataList = [];

          const fetchChainData = async (chain) => {
              const image = await fetchImage(chain.species.name);
              const types = await fetchPokemonTypes(chain.species.name);
              evolutionDataList.push({ name: chain.species.name, types: types, photo: image });

              if (chain.evolves_to.length > 0) {
                  for (const evo of chain.evolves_to) {
                      const evoImage = await fetchImage(evo.species.name);
                      const evoTypes = await fetchPokemonTypes(evo.species.name);
                      evolutionDataList.push({ name: evo.species.name, types: evoTypes, photo: evoImage });

                      if (evo.evolves_to.length > 0) {
                          for (const subEvo of evo.evolves_to) {
                              const subEvoImage = await fetchImage(subEvo.species.name);
                              const subEvoTypes = await fetchPokemonTypes(subEvo.species.name);
                              evolutionDataList.push({ name: subEvo.species.name, types: subEvoTypes, photo: subEvoImage });
                          }
                      }
                  }
              }
          };

          await fetchChainData(chain);
          setEvolutionDataList(evolutionDataList);
      };

      if (evolutionChainUrl) {
        api.get(evolutionChainUrl)
          .then(response => fetchEvolutionData(response.data.chain))
          .catch(error => console.error('Error fetching evolution chain:', error));
      }
  }, [evolutionChainUrl]);

    return evolutionDataList;
};

export default useFetchEvolutionData;
