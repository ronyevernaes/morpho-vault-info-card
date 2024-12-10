export interface Chain {
  id: number;
}

export interface Vault {
  address: string;
  chain: Chain;
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
