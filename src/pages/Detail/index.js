import Gif from '../../components/Gif';
import useGlobalGifs from '../../hooks/useGlobalGifs';

const Detail = ({ params }) => {
  const gifs = useGlobalGifs();
  console.log(params.id);
  // console.log(gifs);

  const gif = gifs.find((gif) => gif.id === params.id);
  console.log(gif);

  return <Gif {...gif} />;
};

export default Detail;
