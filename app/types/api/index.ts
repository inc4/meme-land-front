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