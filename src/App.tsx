import Header from './components/Header';

import GameCard from './components/GameCard';

function App() {
  return (
    <div>
      <Header />
      <main>
      <GameCard icon='🎰' nome='Caça Níquel' descricao='Gire os rolos e combine símbolos'  />  
      </main>

      <main>
      <GameCard icon='💣' nome='Mines' descricao='Encontre os diamantes e fuja das bombas'/>  
      </main>
    </div>
  );
}

export default App;