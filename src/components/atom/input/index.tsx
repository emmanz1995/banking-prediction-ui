import type { FC, ChangeEvent } from 'react';
import { StyledInput } from './styles';

interface IProps {
  type: string;
  value?: string;
  name: string;
  placeholder: string;
  onChange?: (evt: ChangeEvent) => void;
}

const InputField: FC<IProps> = ({
  type,
  value,
  name,
  placeholder,
  onChange,
}) => (
  <StyledInput
    type={type}
    value={value}
    name={name}
    placeholder={placeholder}
    onChange={onChange}
  />
);

export default InputField;
