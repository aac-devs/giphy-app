const apiKey = 'GCLowvuFGaXLynQiAZqxFPju3T2kKVtS';

export default function getGifs({ keyword = 'morty' } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;
  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const gifs = data.map((image) => {
        const { images, title, id } = image;
        const { url } = images.fixed_width;
        return { id, title, url };
      });
      return gifs;
    });
}
