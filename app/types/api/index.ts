import { BN } from "@coral-xyz/anchor";

export type TPostWalletsBody = {
  wallet: string,
  referrerInviteCode: string,
};

export type TGetWalletsResponse = {
  referrer: string,
  wallet: string,
  inviteCode: string,
  isAdmin: boolean,
  createdAt: string,
};

export type DecimalString = {
  $numberDecimal: string;
};

export type TCampaign = {
  _id: string;
  campaignId: string;
  tokenName: string;
  tokenSymbol: string;
  tokenImage: string;
  projectName: string;
  shortDescription1: string;
  shortDescription2: string;
  bigDescription: {
    header: string;
    text: string;
    _id: string;
  }[];
  coverImage: string;
  currentStatus: 'upcoming' | 'presaleOpened' | 'presaleFinished' | 'distributionOpened' | 'distributionFinished' | string;
  presaleProgress: DecimalString;
  walletAddress: string;
  onChainTokenDescriptor: string;
  onChainCampaignDescriptor: string;
  presalePrice: DecimalString;
  listingMultiplier: DecimalString;
  listingPrice: DecimalString;
  profitChance: DecimalString;
  amountOfWallet: number;
  minInvestmentSize: DecimalString;
  maxInvestmentSize: DecimalString;
  presaleStartUTC: string;
  presaleEndUTC: string;
  presaleDrawStartUTC: string;
  presaleDrawEndUTC: string;
  tokenUnlockInterval: number;
  campaignPda: string;
  solscan: string;
  dexscreener: string;
  raydium: string;
  jupiter: string;
  fundsToLP: DecimalString;
  buybackReserve: DecimalString;
  team: DecimalString;
  liquidityAtListing: DecimalString;
  tokensSentToLP: DecimalString;
  priceLevelSupport: DecimalString;
  publicProvision: DecimalString;
  liquidity: DecimalString;
  pieChartTeam: DecimalString;
  marketing: DecimalString;
  tokenomics: {
    item: string;
    percent: DecimalString;
    _id: string;
  }[];
  twitter: string;
  website: string;
  telegram: string;
  createdAt: string;
  __v: number;
  bigDescriptionHeader1: string;
  bigDescriptionText1: string;
  bigDescriptionHeader2: string;
  bigDescriptionText2: string;
};

export type TCampaignResponse = {
  page: {
    index: number;
    size: number;
    data: TCampaign[]
  };
  totalItems: number;
}

export type TCampaignStats = {
  totalTokensClaimed: BN;
  totalTokensSold: BN;
  walletsClaimed: BN;
  totalParticipants: BN;
  [key: string]: any;
};

export type TParticipations = {
  participationId: string,
  campaignId: string,
  wallet: string,
  solSpent: number,
  tokenAllocation: number,
  createdAt: string;
};

export type TParticipationsResponse = {
  page: {
    index: number;
    size: number;
    data: TParticipations[];
  };
  totalItems: number;
};
