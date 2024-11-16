import { InputProps } from "./Input";
const Button = ({
  name,
  className: styles,
  handleOnclick,
  children,
}: InputProps) => {
  return (
    <button
      onClick={handleOnclick}
      className={`${styles}  p-4 hover:opacity-90 bg-primary-dark cursor-pointer rounded-full `}
    >
      {name}
      {children}
    </button>
  );
};

export default Button;
