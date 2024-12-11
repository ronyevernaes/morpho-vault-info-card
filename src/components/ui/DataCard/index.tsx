import { FC, ReactNode } from "react";

type Item = {
  id: string | number;
  content: ReactNode;
};

type Props = {
  data: Item[];
  className?: string;
};

export const DataCard: FC<Props> = ({ data = [], className }) => {
  return (
    <ul className={`data-card ${className}`}>
      {data.length === 0 && (
        <li className="no-results">No results {"='("}</li>
      )}

      {data.map(({ id, content }) => (
        <li key={id}>
          {content}
        </li>
      ))}
    </ul>
  );
};
