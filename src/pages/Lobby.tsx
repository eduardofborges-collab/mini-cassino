import GameCard from '../components/GameCard';

const games = [
  {
    id: 1,
    icon: "🎰",
    name: "Slots",
    description: "Spin the reels and match symbols.",
  },
  {
    id: 2,
    icon: "💣",
    name: "Mines",
    description: "Find the diamonds and escape the bombs.",
  },
];

function Lobby() {
  return (
    <section>
      {games.map((game) => (
        <GameCard
          key={game.id}
          icon={game.icon}
          nome={game.name}
          descricao={game.description}
        />
      ))}
    </section>
  );
}

export default Lobby;