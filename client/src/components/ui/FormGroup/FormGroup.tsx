import React, { ReactNode } from 'react';
import './_formgroup.scss';

interface IProps {
  label: string;
  children: ReactNode;
}
const FormGroup = (props: IProps) => (
  <div className="FormGroup">
    <label>{props.label}</label>
    {props.children}
  </div>
);

export default FormGroup;
