type GameCardProps = {
  icon: string;
  name: string;
  description: string;
  onPlay: () => void;
};

function GameCard({ icon, name, description, onPlay }: GameCardProps) {
  return (
    <article>
      <span>{icon}</span>
      <h2>{name}</h2>
      <p>{description}</p>
      <button onClick={onPlay}>Jogar</button>
    </article>
  );
}

export default GameCard;