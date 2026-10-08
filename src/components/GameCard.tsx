type GameCardProps = {
    icon: string; 
    nome: string;
    descricao: string;
}


function GameCard( {icon, nome, descricao}: GameCardProps) {
  return (
    <article>
        <span>{icon}</span>
        
        <h2>{nome}</h2>

        <p>{descricao}</p>

        <button>Jogar</button>
    </article>
  )
}

export default GameCard;
