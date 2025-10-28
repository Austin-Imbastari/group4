import { InputFieldWrapper, Label, Input } from "./InputFieldSC";

export default function InputField({
  label,
  type = "text",
  name,
  icon: Icon,
  ...props
}) {
  return (
    <InputFieldWrapper>
      {label && <Label htmlFor={name}>{label}</Label>}
      {Icon && <Icon className="icon" />}
      <Input id={name} name={name} type={type} {...props} />
    </InputFieldWrapper>
  );
}
