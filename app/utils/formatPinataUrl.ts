import { PinataSDK, type UploadResponse } from 'pinata';

const pinataGateway = import.meta.env.VITE_APP_PUBLIC_PINATA_GATEWAY;

const pinata = new PinataSDK({
  pinataJwt: import.meta.env.VITE_APP_PUBLIC_PINATA_JWT,
  pinataGateway,
});

export function formatPinataUrl(
  cid: string,
  width?: number,
  height?: number
): string {
  const params = new URLSearchParams();
  if (width) params.set('img-width', width.toString());
  if (height) params.set('img-height', height.toString());
  params.set(
    'pinataGatewayToken',
    import.meta.env.VITE_APP_PUBLIC_PINATA_GATEWAY_TOKEN
  );
  return `${pinataGateway}/ipfs/${cid}?${params.toString()}`;
}