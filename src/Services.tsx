import { Card } from "./Card";

const data = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=800&q=80",
    title: "Ubezpieczenia na życie",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    title: "Komunikacyjne (OC/AC)",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Majątkowe",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    title: "Firmowe",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1542359649-31e03cd4d909?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Podróżne",
  },
];

const Services = () => {
  return (
    <section id="services">
      <div className="grid">
        {data.map((item) => (
          <Card key={item.id} image={item.image} title={item.title} />
        ))}
      </div>
    </section>
  );
};

export { Services };
