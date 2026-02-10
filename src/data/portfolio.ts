export type PortfolioItem = {
  title: string;
  alt: string;
  src: string;
  tag?: string;
};

// Placeholder: apunta a rutas en /public/images. No falla el build si aun no existen.
export const portfolioItems: PortfolioItem[] = [
  {
    title: "Retrato editorial",
    alt: "Retrato editorial en interior con luz suave",
    src: "/images/ejemplo-1.jpg",
    tag: "Retrato"
  },
  {
    title: "Evento",
    alt: "Foto de evento con personas conversando",
    src: "/images/ejemplo-2.jpg",
    tag: "Eventos"
  },
  {
    title: "Producto",
    alt: "Fotografia de producto sobre fondo neutro",
    src: "/images/ejemplo-3.jpg",
    tag: "Producto"
  },
  {
    title: "Exterior",
    alt: "Sesion en exterior con atardecer",
    src: "/images/ejemplo-4.jpg",
    tag: "Exterior"
  }
];

