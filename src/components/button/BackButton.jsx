import { BackButtonSC } from "./ButtonSC";

export default function BackButton({ children, onClick }) {
  return <BackButtonSC onClick={onClick}>{children}</BackButtonSC>;
}
