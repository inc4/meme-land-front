import { PhantomWalletName } from "@solana/wallet-adapter-wallets";

export const PRESALE_PAGE_SEGMENT = 'projectName';
export const PRESALE_PAGE = `/presale/:${PRESALE_PAGE_SEGMENT}`;
export const LEADERBOARD_PAGE = `${PRESALE_PAGE}/leaderboard`;
export const REFERRAL_PAGE = '/referral';
export const HOME_PAGE = '/';
export const CONNECT_PAGE = '/connect';
export const PRIVACY_NOTICE_PAGE = '/privacy-notice';
export const TERMS_OF_USE_PAGE = '/terms-of-use';

export const supportedWallets = [PhantomWalletName];