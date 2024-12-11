import { FC, ReactNode } from "react";

import "./styles.css";

type Props = {
  children?: ReactNode;
  className?: string;
};

export const DataCard: FC<Props> = ({ children, className }) => {
  return (
    <div className={`data-card ${className}`}>
      {!children && (
        <div className="no-results">No results {"='("}</div>
      )}

      {children}
    </div>
  );
};
