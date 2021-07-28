import { useEffect, useState } from 'react';
import getGifs from '../services/getGifs';
import Gif from './Gif';

export default function ListOfGifs({ params }) {
  const [gifs, setGifs] = useState([]);

  const { keyword } = params;

  useEffect(() => {
    getGifs({ keyword }).then((gifs) => setGifs(gifs));
  }, [keyword]);

  return (
    <>
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} id={id} title={title} url={url} />
      ))}
    </>
  );
}
