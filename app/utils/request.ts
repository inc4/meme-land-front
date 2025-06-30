import getConfig from "~/config";
import type { TPostWalletsBody } from "~/types";

const { API_URL } = getConfig();

export const checkInviteCode = async (publicKey: string, inviteCode: string) => {
  try {
    const body: TPostWalletsBody = {
      wallet: publicKey,
      referrerInviteCode: inviteCode,
    };

    const response = await fetch(`${API_URL}/wallets`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        'X-Wallet': publicKey,
      }
    })

    if (response.ok) return true;

    return false;

  } catch (e) {
    console.log(e, "Invite code verification error");
    return false;
  }
};