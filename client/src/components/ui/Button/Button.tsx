import React, { ReactNode, MouseEvent } from 'react';
import plus from '../../../icons/SVG/plus.svg';
import right from '../../../icons/SVG/chevron-right.svg';
import './_button.scss';

interface IProps {
  children: ReactNode;
  small?: boolean;
  onClick?(): any;
  disabled?: boolean;
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
    <button
      disabled={props.disabled}
      onClick={onClick}
      className={`Button ${props.disabled ? 'Button__disabled' : ''}`}
    >
      {/* <svg className="Button__icon">
        <use xlinkHref={plus}></use>
      </svg> */}
      {props.children}
    </button>
  );
};

export default Button;
