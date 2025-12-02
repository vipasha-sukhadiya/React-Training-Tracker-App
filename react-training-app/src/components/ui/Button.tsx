type ButtonProps = {
  onClick: () => void;
  label: string;
};

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      style={{
        padding: "10px 16px",
        background: "#4f46e5",
        color: "white",
        borderRadius: "6px",
        border: "none",
      }}
    >
      {props.label}
    </button>
  );
};

export default Button;
