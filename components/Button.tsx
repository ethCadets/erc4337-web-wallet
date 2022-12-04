import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import classNames from 'classnames';

interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: 'primary' | 'secondary';
}

export const Button: FC<IButtonProps> = ({
  variant = 'secondary',
  className,
  ...props
}) => {
  const additionalClassNames = `px-4 py-2 block rounded-md max-w-fit ${
    variant === 'primary' ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-slate-200 hover:bg-slate-300'
  }`;

  return (
    <button
      className={classNames(
        className,
        additionalClassNames,
        'disabled:opacity-50 disabled:cursor-not-allowed'
      )}
      {...props}
    />
  );
};
