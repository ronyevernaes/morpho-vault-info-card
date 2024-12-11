import { FC, ReactNode } from "react";

import "./styles.css";

type Props = {
  children: ReactNode;
  className?: string;
};

export const Card: FC<Props> = ({ children, className }) => {
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  );
};
