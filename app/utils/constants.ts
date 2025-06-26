import { clusterApiUrl, Connection } from "@solana/web3.js";

export const PRESALE_PAGE_SEGMENT = 'tokenName';
export const PRESALE_PAGE = `/presale/:${PRESALE_PAGE_SEGMENT}`;
export const LEADERBOARD_PAGE = `${PRESALE_PAGE}/leaderboard`;
export const REFERRAL_PAGE = '/referral';
export const HOME_PAGE = '/';
export const CONNECT_PAGE = '/connect';
export const PRIVACY_NOTICE_PAGE = '/privacy-notice';
export const TERMS_OF_USE_PAGE = '/terms-of-use';
export const FEES_PAGE = '/fees';
export const RULES_PAGE = '/rules';

export const connection = new Connection(clusterApiUrl('devnet'));
