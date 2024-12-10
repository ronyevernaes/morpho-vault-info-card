import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  FC,
  ReactNode,
} from "react";

type Props = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  variant?: "primary" |"secondary";
  progress?: boolean;
} & 
  ButtonHTMLAttributes<HTMLAnchorElement> &
  AnchorHTMLAttributes<HTMLButtonElement>;

export const Button: FC<Props> = ({
  as: Component = "button",
  children,
  className,
  variant = "primary",
  progress = false,
  ...props
}) => {
  return (
    <Component
      className={`button ${className || ""}`}
      {...props}
      data-variant={variant}
      data-progress={progress}
    >
      {children}
    </Component>
  );
};
