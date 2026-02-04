import React from "react";

export default function Loja() {
  return (
    <div style={{ padding: 32 }}>
      <h1 style={{ fontSize: 32, marginBottom: 24 }}>
        🛒 Loja Rharian
      </h1>

      <p style={{ marginBottom: 24 }}>
        Produtos gamer, tecnologia e recomendações.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
        }}
      >
        <div style={{ border: "1px solid #ccc", padding: 16 }}>
          <h3>Mouse Gamer</h3>
          <p>R$ 199,90</p>
          <button>Comprar</button>
        </div>

        <div style={{ border: "1px solid #ccc", padding: 16 }}>
          <h3>Teclado Mecânico</h3>
          <p>R$ 399,90</p>
          <button>Comprar</button>
        </div>
      </div>
    </div>
  );
}
