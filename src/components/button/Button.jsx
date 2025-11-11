import { ButtonSC, BackButtonSC } from "./ButtonSC";

export default function Button({ children, onClick, type = "button", variant}) {
  return (
    variant === "back" ? (<BackButtonSC type={type} onClick={onClick}>
      {children}
    </BackButtonSC>): (
      <ButtonSC type={type} onClick={onClick}>
      {children}
    </ButtonSC>)
  );
}
