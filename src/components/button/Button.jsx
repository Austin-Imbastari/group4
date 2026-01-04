import { ButtonSC } from "./ButtonSC";

export default function Button({ children, onClick }) {
  return <ButtonSC onClick={onClick}>{children}</ButtonSC>;
}
