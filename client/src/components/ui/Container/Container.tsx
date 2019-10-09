import React, { ReactNode } from 'react';
import cx from 'classnames';
import './_container.scss';

interface IProps {
  className: string;
  children: ReactNode;
}

const Container = (props: IProps) => (
  <div className={cx('Container', props.className)}>{props.children}</div>
);

export default Container;
