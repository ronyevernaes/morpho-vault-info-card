"use client"

import { FC, useEffect, useMemo, useState } from "react";
import debounce from "debounce";

import { InputText } from "@/components/ui";
import { useVaultSearch } from "@/hooks/useVaultSearch";

export const SearchInput: FC = () => {
  const [search, setSearch] = useState<string>("");
  const [deboucedSearch, setDebouncedSearch] = useState<string>("");

  const { vaults } = useVaultSearch(deboucedSearch);

  const debouncedSearchCallback = useMemo(() => debounce((criteria) => {
    setDebouncedSearch(criteria)
  }, 500), []);

  useEffect(() => {
    debouncedSearchCallback(search);
  }, [debouncedSearchCallback, search]);

  return (
    <InputText
      label="Vault Address"
      placeholder="Enter Vault Address or Name..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};
