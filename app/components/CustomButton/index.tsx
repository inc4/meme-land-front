import type { ReactNode } from "react";
import clsx from "clsx";

type TVariant = 'default' | 'white' | 'linear' | 'no-bg' | 'icon-only';

type TProps = {
  children: ReactNode,
  type?: HTMLButtonElement['type'],
  disabled?: boolean,
  customStyles?: string,
  variant?: TVariant,
  handleClick?: <T>(args: T) => void,
};

const CustomButton = ({
  children,
  type = 'button',
  disabled = false,
  customStyles = '',
  variant = 'default',
  handleClick = () => {},
}: TProps) => {

  const getStyles = (v: TVariant) => {
    let colors = '';

    switch (v) {
      case 'default':
      default:
        colors = clsx(
          'bg-primary border-primary text-primary-900',
          'hover:bg-primary-600',
          'disabled:bg-primary-700 disabled:border-primary-700'
        );
        break;
      case 'white':
        colors = clsx(
          'bg-gray-100 border-gray-100 text-gray-900 shadow-[0px_1px_36px_0px] shadow-beige-600',
          'hover:bg-gray-200 hover:border-gray-200',
          'disabled:bg-beige-600 disabled:border-beige-600 disabled:shadow-none'
        );
        break;
      case 'linear':
        colors = clsx(
          'bg-transparent border-gray-500 text-gray-300',
          'hover:bg-gray-600 hover:text-gray-100',
          'disabled:bg-transparent disabled:border-gray-600 disabled:text-gray-600'
        );
        break;
      case 'no-bg':
        colors = clsx(
          'bg-transparent border-transparent text-gray-200',
          'hover:text-primary',
          'disabled:text-beige-600'
        );
        break;
      case 'icon-only':
        colors = clsx(
          'bg-gray-700 border-gray-600 rounded-full',
          'hover:bg-primary-900 hover:border-primary-800',
          'disabled:bg-gray-700 disabled:border-gray-600'
        );
        break;
    }

    return clsx(
      'w-full p-[10px] border-[2px] rounded-[10px] duration-300 ease-in-out',
      'text-body-s font-semibold md:text-body-m lg:text-body-l',
      colors
    );
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${getStyles(variant)} ${customStyles}`}
      onClick={handleClick}
    >
      {children}
    </button>
  )
};

export default CustomButton;