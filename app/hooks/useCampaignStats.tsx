import useSWR from "swr";
import { useWallet } from "@solana/wallet-adapter-react";
import { Program, web3 } from "@coral-xyz/anchor";

import useAnchorProvider from "./useAnchorProvider";
import useCampaign from "./useCampaign";
import getPdas from "~/utils/getPdas";
import getConfig from "~/config";
import type { TCampaignStats } from "~/types";

const { IDL } = getConfig();

const useCampaignStats = (campaignId: string) => {
  const { publicKey } = useWallet();
  const provider = useAnchorProvider();
  const { data: apiCampaign } = useCampaign(campaignId);
  const { tokenName, tokenSymbol } = apiCampaign || {};

  const fetcher = async (name: string, symbol: string, publicKey: web3.PublicKey) => {
    const program = new Program(IDL, provider);

    const { campaignStatsPda } = getPdas(name, symbol, program.programId, publicKey);

    const campaignStatsAccount = await provider.connection.getAccountInfo(campaignStatsPda);

    if (campaignStatsAccount) {
      const campaignStatsData = program.coder.accounts.decode(
        "campaignStats",
        campaignStatsAccount.data
      );

      return campaignStatsData as TCampaignStats;
    }
  };

  return useSWR(
    publicKey && tokenName && tokenSymbol ? {
      key: 'campaign-stats',
      publicKey,
      tokenName,
      tokenSymbol,
    } : null,
    ({ tokenName, tokenSymbol, publicKey }) => fetcher(tokenName, tokenSymbol, publicKey),
    { refreshInterval: 2000 },
  )
};

export default useCampaignStats;
