export interface Chain {
  id: number;
}

export interface Vault {
  address: string;
  chain: Chain;
  id: number;
  metadata: VaultMetadata;
  name: string;
}

export interface VaultMetadata {
  image: string;
}

export interface VaultSearchResponse {
  vaults?: {
    items?: Vault[];
  };
}
