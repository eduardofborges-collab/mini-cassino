type SlotsPageProps = {
  onBack: () => void;
};

function SlotsPage({ onBack }: SlotsPageProps) {
  return (
    <section>
      <button onClick={onBack}>← Voltar</button>
      <h2>🎰 Slots</h2>
      {/* O jogo em PixiJS entra aqui */}
    </section>
  );
}

export default SlotsPage;