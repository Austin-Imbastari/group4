import { Wrapper, Label, SelectWrapper, Select } from "./DropdownFieldSC";

export default function DropdownField({
  id,
  label,
  icon: Icon,
  value,
  onChange,
  children,
}) {
  return (
    <Wrapper>
      {label && <Label htmlFor={id}>{label}</Label>}
      <SelectWrapper>
        {Icon && <Icon className="icon" />}
        <Select id={id} value={value} onChange={onChange}>
          {children}
        </Select>
      </SelectWrapper>
    </Wrapper>
  );
}
