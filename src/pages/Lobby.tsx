import GameCard from '../components/GameCard';
import type { GameId } from '../types';

type Game = {
  id: GameId;
  icon: string;
  name: string;
  description: string;
};

const games: Game[] = [
  { id: 'slots', icon: '🎰', name: 'Slots', description: 'Spin the reels and match symbols.' },
  { id: 'mines', icon: '💣', name: 'Mines', description: 'Find the diamonds and escape the bombs.' },
];

type LobbyProps = {
  onSelectGame: (game: GameId) => void;
};

function Lobby({ onSelectGame }: LobbyProps) {
  return (
    <section className="game-list">
      {games.map((game) => (
        <GameCard
          key={game.id}
          icon={game.icon}
          nome={game.name}
          descricao={game.description}
          onPlay={() => onSelectGame(game.id)}
        />
      ))}
    </section>
  );
}

export default Lobby;