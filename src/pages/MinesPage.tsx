type MinesPageProps = {
  onBack: () => void;
};

function MinesPage({ onBack }: MinesPageProps) {
  return (
    <section>
      <button onClick={onBack}>← Voltar</button>
      <h2> Mines</h2>
      {/* O jogo em PixiJS entra aqui */}
    </section>
  );
}

export default SlotsPage;