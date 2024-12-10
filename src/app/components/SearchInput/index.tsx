"use client"

import { FC, useEffect, useMemo, useState } from "react";
import debounce from "debounce";

import { InputText } from "@/components/ui";

export const SearchInput: FC = () => {
  const [search, setSearch] = useState<string>("");

  const debouncedSearch = useMemo(() => debounce((_) => {
  }, 300), []);

  useEffect(() => {
    debouncedSearch(search);
  }, [debouncedSearch, search]);

  return (
    <InputText
      label="Vault Address"
      placeholder="Enter Vault Address or Name..."
      value={search}
      error="This is an error message"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};
