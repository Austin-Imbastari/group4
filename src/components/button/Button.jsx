import { ButtonSC } from "./ButtonSC";

export default function Button({ type = "button", children, ...props }) {
  return (
    <ButtonSC type={type} {...props}>
      {children}
    </ButtonSC>
  );
}
