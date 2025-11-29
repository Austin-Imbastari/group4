import {BackButtonSC } from "./ButtonSC";

export default function BackButton({ children, onClick, type = "button"}) {
    return(
    <BackButtonSC type={type} onClick={onClick}>
      {children}
    </BackButtonSC>
    )
}