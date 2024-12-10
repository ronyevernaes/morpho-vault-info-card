import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
}
export const Card: FC<Props> = ({ children, className }) => {
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  );
};
