import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import NewsTicker from "@/components/NewsTicker";
import { posts, getFeaturedPosts, getLatestPosts } from "@/data/posts";

const Index = () => {
  const featuredPosts = getFeaturedPosts();
  const latestPosts = getLatestPosts(6);
  const mainFeatured = featuredPosts[0];
  const secondaryFeatured = featuredPosts.slice(1, 3);

  return (
    <>
      <Helmet>
        <title>Rharian - Tecnologia, Inovação e Games</title>
        <meta
          name="description"
          content="Rharian é seu portal para as últimas notícias sobre tecnologia, games, produtos digitais e inovações. Mentes brilhantes iluminam o céu."
        />
        <meta property="og:title" content="Rharian - Tecnologia, Inovação e Games" />
        <meta
          property="og:description"
          content="Seu portal para as últimas notícias sobre tecnologia, games e inovações."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <NewsTicker />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="container mx-auto py-8 md:py-12">
            <div className="mb-8">
              <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">
                Destaque
              </p>
              <div className="w-16 h-1 bg-primary rounded-full" />
            </div>

            {/* Featured Grid */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Main Featured */}
              {mainFeatured && (
                <div className="lg:col-span-2 fade-in">
                  <PostCard post={mainFeatured} featured />
                </div>
              )}

              {/* Secondary Featured */}
              <div className="space-y-6">
                {secondaryFeatured.map((post, index) => (
                  <div
                    key={post.id}
                    className="fade-in"
                    style={{ animationDelay: `${(index + 1) * 100}ms` }}
                  >
                    <PostCard post={post} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Latest Posts Section */}
          <section className="container mx-auto py-8 md:py-12">
            <div className="mb-8">
              <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">
                Últimas Publicações
              </p>
              <div className="w-16 h-1 bg-primary rounded-full" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <PostCard post={post} />
                </div>
              ))}
            </div>
          </section>

          {/* Stats Section */}
          <section className="bg-card border-y border-border py-12 md:py-16">
            <div className="container mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="fade-in">
                  <p className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">
                    {posts.length}+
                  </p>
                  <p className="text-muted-foreground text-sm">Artigos</p>
                </div>
                <div className="fade-in" style={{ animationDelay: "100ms" }}>
                  <p className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">
                    4
                  </p>
                  <p className="text-muted-foreground text-sm">Categorias</p>
                </div>
                <div className="fade-in" style={{ animationDelay: "200ms" }}>
                  <p className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">
                    10k+
                  </p>
                  <p className="text-muted-foreground text-sm">Leitores</p>
                </div>
                <div className="fade-in" style={{ animationDelay: "300ms" }}>
                  <p className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">
                    24/7
                  </p>
                  <p className="text-muted-foreground text-sm">Atualizações</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
