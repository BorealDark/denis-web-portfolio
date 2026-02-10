export type PortfolioItem = {
  title: string;
  alt: string;
  src: string;
  tag?: string;
};

// Apunta a rutas en /public/images/2-portfolio.
export const portfolioItems: PortfolioItem[] = [
  {
    title: "Portfolio 01",
    alt: "Fotografia del portfolio 1",
    src: "/images/2-portfolio/portfolio-1.jpg"
  },
  {
    title: "Portfolio 02",
    alt: "Fotografia del portfolio 2",
    src: "/images/2-portfolio/portfolio-2.jpg"
  },
  {
    title: "Portfolio 03",
    alt: "Fotografia del portfolio 3",
    src: "/images/2-portfolio/portfolio-3.jpg"
  },
  {
    title: "Portfolio 04",
    alt: "Fotografia del portfolio 4",
    src: "/images/2-portfolio/portfolio-4.jpg"
  },
  {
    title: "Portfolio 05",
    alt: "Fotografia del portfolio 5",
    src: "/images/2-portfolio/portfolio-5.jpg"
  },
  {
    title: "Portfolio 06",
    alt: "Fotografia del portfolio 6",
    src: "/images/2-portfolio/portfolio-6.jpg"
  }
];
