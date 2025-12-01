type CardProps = {
  title: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const Card = (props: CardProps) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        borderRadius: "8px",
        marginBottom: "16px",
        ...props.style
      }}
    >
      <h3>{props.title}</h3>
      <div>{props.children}</div>
    </div>
  );
};

export default Card;
