export type PortfolioItem = {
  title: string;
  alt: string;
  src: string;
  category: "bodas" | "retratos" | "animales";
};

export type PortfolioCategory = PortfolioItem["category"];

function makeSet(category: PortfolioCategory, prefix: string): PortfolioItem[] {
  return [1, 2, 3, 4, 5, 6].map((n) => ({
    title: `${prefix} ${String(n).padStart(2, "0")}`,
    alt: `Fotografia de ${prefix.toLowerCase()} ${n}`,
    src: `/images/2-portfolio/${category}/portfolio-${n}.jpg`,
    category
  }));
}

export const portfolioByCategory: Record<PortfolioCategory, PortfolioItem[]> = {
  bodas: makeSet("bodas", "Bodas"),
  retratos: makeSet("retratos", "Retratos"),
  animales: makeSet("animales", "Animales")
};

export const portfolioItems: PortfolioItem[] = [
  ...portfolioByCategory.bodas,
  ...portfolioByCategory.retratos,
  ...portfolioByCategory.animales
];
