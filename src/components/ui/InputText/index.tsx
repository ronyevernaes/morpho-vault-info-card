"use client"

import { FC, ChangeEvent, InputHTMLAttributes, ReactNode } from "react";

type Props = {
  label?: ReactNode;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export const InputText: FC<Props> = ({
  label,
  value,
  onChange,
  ...rest
}) => {
  return (
    <div className="input-text">
      {label && (<span>{label}</span>)}

      <input
        type="text"
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};
