import { Link } from "react-router-dom";
import { Gamepad2, ShoppingBag, Newspaper } from "lucide-react";

export default function Index() {
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
      <div style={{ textAlign: "center" }}>
        <Gamepad2 size={64} />
        <h1>Rharian</h1>
        <p>Tecnologia, Inovação e Games</p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
          <Link to="/loja">
            <button>
              <ShoppingBag /> Loja
            </button>
          </Link>

          <Link to="/blog">
            <button>
              <Newspaper /> Blog
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
