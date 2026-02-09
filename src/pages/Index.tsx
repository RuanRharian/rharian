import { Link } from "react-router-dom";
import { Gamepad2, ShoppingBag, Newspaper } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center space-y-4">
        <Gamepad2 size={64} className="mx-auto" />

        <h1 className="text-4xl font-bold">Rharian</h1>
        <p className="text-muted-foreground">
          Tecnologia, Inovação e Games
        </p>

        <div className="flex gap-4 justify-center pt-4">
          <Link to="/loja">
            <button className="flex items-center gap-2 px-5 py-2 rounded-lg bg-primary text-primary-foreground">
              <ShoppingBag size={18} />
              Loja
            </button>
          </Link>

          <Link to="/blog">
            <button className="flex items-center gap-2 px-5 py-2 rounded-lg bg-secondary text-secondary-foreground">
              <Newspaper size={18} />
              Blog
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
