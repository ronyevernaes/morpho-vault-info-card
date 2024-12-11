import { useVaultSearchByFullAddress } from "../useVaultSearchByFullAddress";
import { useVaultSearchByName } from "../useVaultSearchByName";

export const useVaultSearch = (criteria: string) => {
  const {
    vaults: vaultsByName,
    loading: loadingByName,
    error: errorByName,
  } = useVaultSearchByName(criteria);

  const {
    vaults: vaultsByFullAddress,
    loading: loadingByFullAddress,
    error: errorByFullAddress,
  } = useVaultSearchByFullAddress(criteria);

  return {
    vaults: [...vaultsByName,...vaultsByFullAddress],
    loading: loadingByName || loadingByFullAddress,
    error: errorByName || errorByFullAddress,
  };
};
