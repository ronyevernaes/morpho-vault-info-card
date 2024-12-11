"use client"

import { FC, useEffect, useMemo, useState } from "react";
import debounce from "debounce";
import Image from "next/image";

import { InputText, DataCard } from "@/components/ui";
import { useVaultSearch } from "@/hooks/useVaultSearch";
import BlueDot from "@/assets/icons/blue-dot.svg";
import ArrowRight from "@/assets/icons/arrow-right.svg";

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
    <div className="relative">
      <InputText
        label="Vault Address"
        placeholder="Enter Vault Address or Name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {deboucedSearch && (
        <DataCard
          className="absolute top-16 left-0 right-0"
          data={vaults?.map((({ id, name }) => ({
            id,
            content: (
              <div className="flex justify-between">
                <div className="flex gap-1">
                  <Image src={BlueDot} alt="" />
                  <span>{name}</span>
                </div>
                <Image src={ArrowRight} alt="" />
              </div>
            ),
          })))}
        />
      )}
    </div>
  );
};
