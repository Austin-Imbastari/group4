import { InputFieldWrapper, Label, InputWrapper, Input } from "./InputFieldSC";

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
      <InputWrapper>
        {Icon && <Icon className="icon" />}
        <Input id={name} name={name} type={type} {...props} />
      </InputWrapper>
    </InputFieldWrapper>
  );
}
