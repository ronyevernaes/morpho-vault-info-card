import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  FC,
  ReactNode,
} from "react";

import "./styles.css";

type Props = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  variant?: "primary" |"secondary" | "tertiary";
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
