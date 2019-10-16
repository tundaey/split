import React, { ChangeEvent } from 'react';

interface IProps {
  value: string;
  type: string;
  onChange(value: string): void;
}

const InputText = (props: IProps) => (
  <input
    className="Input__text"
    type={props.type}
    value={props.value}
    onChange={event => {
      props.onChange(event.target.value);
    }}
  />
);

export default InputText;
