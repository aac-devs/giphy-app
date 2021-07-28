import './Gif.css';

export default function Gif({ id, title, url }) {
  return (
    <a href={`#${id}`} className="Gif">
      <h4>{title}</h4>
      <small>{id}</small>
      <img src={url} alt={title} />
    </a>
  );
}
