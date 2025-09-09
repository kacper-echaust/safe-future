type Props = {
  image: string;
  title: string;
};

const Card = ({ image, title }: Props) => {
  return (
    <div className="service-card">
      <div
        className="card-image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="card-content">
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export { Card };
