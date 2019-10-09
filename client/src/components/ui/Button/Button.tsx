import React, { ReactNode, MouseEvent } from 'react';
import plus from '../../../icons/SVG/plus.svg';
import right from '../../../icons/SVG/chevron-right.svg';
import './_button.scss';

interface IProps {
  children: ReactNode;
  small?: boolean;
  onClick?(): any;
}

const Button = (props: IProps) => {
  const onClick = (ev: MouseEvent) => {
    ev.preventDefault();
    props.onClick();
  };
  if (props.small) {
    return (
      <a className="Button Button__small" href="#">
        View all
        <svg className="Button__small-icon">
          <use xlinkHref={right}></use>
        </svg>
      </a>
    );
  }
  return (
    <a onClick={onClick} className="Button" href="#">
      <svg className="Button__icon">
        <use xlinkHref={plus}></use>
      </svg>
      {props.children}
    </a>
  );
};

export default Button;
