import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Lobby from './pages/Lobby';
import SlotsPage from './pages/SlotsPage';
import MinesPage from './pages/MinesPage';
import type { Screen } from './types';

function App() {
  const [screen, setScreen] = useState<Screen>('lobby');
  const goToLobby = () => setScreen('lobby');

  return (
    <>
      <Header />
      <main>
        {screen === 'lobby' && <Lobby onSelectGame={setScreen} />}
        {screen === 'slots' && <SlotsPage onBack={goToLobby} />}
        {screen === 'mines' && <MinesPage onBack={goToLobby} />}
      </main>
      <Footer />
    </>
  );
}

export default App;