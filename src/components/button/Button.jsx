import { ButtonSC } from "./ButtonSC";

export default function Button({ children, onClick, type = "button" }) {
  return (
    <ButtonSC type={type} onClick={onClick}>
      {children}
    </ButtonSC>
  );
}
