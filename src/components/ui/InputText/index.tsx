"use client"

import { FC, ChangeEvent, InputHTMLAttributes, ReactNode } from "react";

type Props = {
  label?: ReactNode;
  value: string;
  icon?: ReactNode;
  error?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export const InputText: FC<Props> = ({
  label,
  value,
  onChange,
  icon,
  error,
  ...rest
}) => {
  return (
    <div className="input-text">
      {label && (<span>{label}</span>)}

      <div className="input-container">
        <input
          type="text"
          value={value}
          onChange={onChange}
          data-error={!!error}
          {...rest}
        />

        {icon && <span className="input-icon">{icon}</span>}
      </div>

      {error && (<span className="input-error">{error}</span>)}
    </div>
  );
};
