import { useContext, useEffect, useState } from 'react';
import GifsContext from '../context/GifsContext';
import getGifs from '../services/getGifs';

export const useGifs = ({ keyword } = { keyword: null }) => {
  const [loading, setLoading] = useState(false);
  const { gifs, setGifs } = useContext(GifsContext);

  useEffect(() => {
    setLoading(true);

    // Recuperamos la keyword del localStorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword');

    getGifs({ keyword: keywordToUse }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      // Guardamos la keyword en el localStorage
      localStorage.setItem('lastKeyword', keywordToUse);
    });
  }, [keyword, setGifs]);

  return { loading, gifs };
};
