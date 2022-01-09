import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react';

export interface ButtonProps {
  color: 'success-c' | 'error-c' | 'info-c';
  type?: 'button' | 'submit';
  text: string;
  icon: JSX.Element;
  onclick?: () => void;
}

export const Button: FC<ButtonProps> = ({ color, type = 'button', text, icon, onclick }) => {
  return (
    <button
      className={`bg-${color} text-primary-c text-base flex items-center py-0.5 px-3 rounded-full uppercase  hover:opacity-90`}
      type={type}>
      {text}
      <span className="ml-2 h-4 w-4">{icon}</span>
    </button>
  );
};
