export default function Home() {
  const produtos = [
    {
      id: 1,
      nome: "Legging Fitness Pro",
      preco: "R$ 129,90",
      imagem:
        "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600",
    },
    {
      id: 2,
      nome: "Top Fitness Elite",
      preco: "R$ 79,90",
      imagem:
        "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600",
    },
    {
      id: 3,
      nome: "Shorts Performance",
      preco: "R$ 89,90",
      imagem:
        "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=600",
    },
    {
      id: 4,
      nome: "Conjunto Fitness Premium",
      preco: "R$ 199,90",
      imagem:
        "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=600",
    },
    {
      id: 5,
      nome: "Camiseta Dry Fit",
      preco: "R$ 69,90",
      imagem:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
    },
    {
      id: 6,
      nome: "Jaqueta Esportiva",
      preco: "R$ 159,90",
      imagem:
        "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=600",
    },
  ];

  return (
    <main style={{ padding: 20, fontFamily: "Arial" }}>
      <h1 style={{ fontSize: 40, textAlign: "center" }}>MIS Fitness</h1>

      <p style={{ textAlign: "center", marginBottom: 40 }}>
        Sua melhor versão começa aqui 💪
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 20,
        }}
      >
        {produtos.map((produto) => (
          <div
            key={produto.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 10,
              padding: 15,
              textAlign: "center",
            }}
          >
            <img
              src={produto.imagem}
              style={{
                width: "100%",
                height: 300,
                objectFit: "cover",
                borderRadius: 10,
              }}
            />

            <h2>{produto.nome}</h2>

            <p style={{ fontSize: 20, fontWeight: "bold" }}>
              {produto.preco}
            </p>

            <button
              style={{
                padding: 10,
                background: "black",
                color: "white",
                border: "none",
                borderRadius: 5,
                cursor: "pointer",
              }}
            >
              Comprar Agora
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
