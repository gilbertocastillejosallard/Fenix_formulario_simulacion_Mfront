import React, { FC, ReactElement, ReactNode } from 'react';
import styles from './GenericButton.module.scss';

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  text?: string;
}

const GenericButton: FC<ButtonProps> = ({
  children,
  className,
  disabled,
  onClick,
  text,
}: ButtonProps): ReactElement => {
  return (
    <div className={[className, styles.component].join(' ').trim()}>
      <button
        className={[styles.button].join(' ').trim()}
        {...{ disabled, text }}
        onClick={onClick}
        type='button'
      >
        {children || text}
      </button>
    </div>
  );
};

export default GenericButton;
