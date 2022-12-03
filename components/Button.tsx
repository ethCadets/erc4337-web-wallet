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
  const additionalClassNames = `p-2 block rounded-md ${
    variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-slate-200'
  }`;

  return (
    <button
      className={classNames(className, additionalClassNames)}
      {...props}
    />
  );
};
