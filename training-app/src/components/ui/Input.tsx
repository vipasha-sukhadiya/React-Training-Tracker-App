type InputProps = {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props : InputProps) => {
  return (
    <input
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      style={{
        padding: "10px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        width: "80%"
      }}
    />
  );
};

export default Input;
