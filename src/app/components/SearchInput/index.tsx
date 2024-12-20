"use client"

import { FC, useEffect, useMemo, useRef, useState } from "react";
import debounce from "debounce";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { InputText, DataCard } from "@/components/ui";
import { useVaultSearch } from "@/hooks/useVaultSearch";
import BlueDot from "@/assets/icons/blue-dot.svg";
import ArrowRight from "@/assets/icons/arrow-right.svg";

export const SearchInput: FC = () => {
  const [search, setSearch] = useState<string>("");
  const [deboucedSearch, setDebouncedSearch] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const { vaults } = useVaultSearch(deboucedSearch);

  const debouncedSearchCallback = useMemo(() => debounce((criteria) => {
    setDebouncedSearch(criteria)
  }, 500), []);

  useEffect(() => {
    debouncedSearchCallback(search);
  }, [debouncedSearchCallback, search]);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDebouncedSearch("");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <InputText
        label="Vault Address"
        placeholder="Enter Vault Address or Name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {deboucedSearch && (
        <DataCard className="absolute top-16 left-0 right-0">
          {vaults?.length > 0 && vaults?.map(((vault) => (
            <div
              className="flex justify-between"
              key={vault.id}
              onClick={
                () => router.push(`/vault/${vault.chain.id}/${vault.address}`)
              }
            >
              <div className="flex gap-1">
                <Image src={BlueDot} alt="" />
                <span>{vault.name}</span>
              </div>

              <Image src={ArrowRight} alt="" />
            </div>
          )))}
        </DataCard>
      )}
    </div>
  );
};
