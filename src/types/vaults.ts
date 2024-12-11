export interface Chain {
  id: number;
}

export interface Vault {
  address: string;
  chain: Chain;
  id: number;
  metadata: VaultMetadata;
  name: string;
  state?: VaultState;
}

export interface VaultMetadataCurator {
  name: string;
}

export interface VaultMetadata {
  image: string;
  curators?: VaultMetadataCurator[];
}

export interface VaultState {
  owner: string;
  totalAssetsUsd: number;
  netApy: number;
}

export interface VaultSearchResponse {
  vaults?: {
    items?: Vault[];
  };
}
