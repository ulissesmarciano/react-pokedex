import { useState, useEffect } from 'react';
import api from '@/services/api';

interface EvolutionData {
  name: string;
  types: string[] | null;
  photo: string | null;
}

interface EvolutionChainLink {
  species: {
    name: string;
    url: string;
  };
  evolves_to: EvolutionChainLink[];
}

const useFetchEvolutionData = (evolutionChainUrl: string) => {
  const [evolutionDataList, setEvolutionDataList] = useState<EvolutionData[]>(
    [],
  );

  const fetchImage = async (name: string): Promise<string | null> => {
    try {
      const response = await api.get(`/pokemon/${name}`);
      return response.data.sprites.front_default;
    } catch (error) {
      console.error('Error fetching evolution image:', error);
      return null;
    }
  };

  const fetchPokemonTypes = async (name: string): Promise<string[] | null> => {
    try {
      const response = await api.get(`/pokemon/${name}`);
      return response.data.types.map(
        (type: { type: { name: string } }) => type.type.name,
      );
    } catch (error) {
      console.error('Error fetching Pokémon types:', error);
      return null;
    }
  };

  useEffect(() => {
    const fetchEvolutionData = async (chain: EvolutionChainLink) => {
      const dataList: EvolutionData[] = [];

      const traverseChain = async (node: EvolutionChainLink) => {
        const image = await fetchImage(node.species.name);
        const types = await fetchPokemonTypes(node.species.name);
        dataList.push({
          name: node.species.name,
          types,
          photo: image,
        });

        for (const next of node.evolves_to) {
          await traverseChain(next);
        }
      };

      await traverseChain(chain);
      setEvolutionDataList(dataList);
    };

    if (evolutionChainUrl) {
      api
        .get(evolutionChainUrl)
        .then((response) =>
          fetchEvolutionData(response.data.chain as EvolutionChainLink),
        )
        .catch((error) =>
          console.error('Error fetching evolution chain:', error),
        );
    }
  }, [evolutionChainUrl]);
  return evolutionDataList;
};

export default useFetchEvolutionData;
