import type { ReactNode } from "react";
import greenShadowImg from "~/assets/imgs/green-shadow.png";
import violetShadowImg from "~/assets/imgs/violet-shadow.png";
import bronzeShadowImg from "~/assets/imgs/bronze-shadow.png";
import silverShadowImg from "~/assets/imgs/silver-shadow.png";
import goldShadowImg from "~/assets/imgs/gold-shadow.png";

type TPrimaryShadowPosition = 'top' | 'bottom' | 'none';

type TSecondaryShadowPosition = 'outer' | 'inner' | 'none';

type TVariant = 'green' | 'violet' | 'bronze' | 'silver' | 'gold'

type TProps = {
  children: ReactNode,
  customStyles?: string,
  customBorderStyles?: string,
  primaryShadowPosition?: TPrimaryShadowPosition,
  secondaryShadowPosition?: TSecondaryShadowPosition,
  variant?: TVariant,
  isBorderVisible?: boolean,
}

const NeonShadowBox = ({
  children,
  customStyles = '',
  customBorderStyles = '',
  primaryShadowPosition = 'none',
  secondaryShadowPosition = 'none',
  variant = 'green',
  isBorderVisible = true,
}: TProps) => {

  const getNeonShadowSrc = (
    primaryPosition: TPrimaryShadowPosition,
    secondaryPosition: TSecondaryShadowPosition,
    v: TVariant,
  ) => {
    if (primaryPosition === 'none' || secondaryPosition === 'none') {
      return;
    }

    switch (v) {
      case 'green':
      default:
        return greenShadowImg;
      case 'violet':
        return violetShadowImg;
      case 'bronze':
        return bronzeShadowImg;
      case 'silver':
        return silverShadowImg;
      case 'gold':
        return goldShadowImg;
    }
  };

  const getNeonShadowStyles = (
    primaryPosition: TPrimaryShadowPosition,
    secondaryPosition: TSecondaryShadowPosition,
  ) => {
    if (secondaryPosition === 'none') {
      return '';
    }

    switch (primaryPosition) {
      case 'top':
        return secondaryPosition === 'outer'
          ? 'absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-100%]'
          : 'absolute top-0 left-[50%] translate-x-[-50%] translate-y-[0] rotate-[180deg]';
      case 'bottom':
        return secondaryPosition === 'outer'
        ? 'absolute top-[100%] left-[50%] translate-x-[-50%] translate-y-[0] rotate-[180deg]'
        : 'absolute top-[100%] left-[50%] translate-x-[-50%] translate-y-[-100%]';
      case 'none':
      default:
        return '';
    }
  }

  const getStyles = (v: TVariant) => {  
    switch (v) {
      case 'green':
      default:
        return 'green-box';
      case 'violet':
        return 'violet-box';
      case 'bronze':
        return 'bronze-box';
      case 'silver':
        return 'silver-box';
      case 'gold':
        return 'gold-box';
    }
  };

  const getBorderStyles = (primaryPosition: TPrimaryShadowPosition, v: TVariant) => {
    switch (v) {
      case 'green':
      default:
        return primaryPosition === 'top' ? 'green-box-border-top' : 'green-box-border';
      case 'violet':
        return primaryPosition === 'top' ? 'violet-box-border-top' : 'violet-box-border';
      case 'bronze':
        return primaryPosition === 'top' ? 'bronze-box-border-top' : 'bronze-box-border';
      case 'silver':
        return primaryPosition === 'top' ? 'silver-box-border-top' : 'silver-box-border';
      case 'gold':
        return primaryPosition === 'top' ? 'gold-box-border-top' : 'gold-box-border';
    }
  };

  const neonShadowSrc = getNeonShadowSrc(primaryShadowPosition, secondaryShadowPosition, variant);
  const neonShadowStyles = getNeonShadowStyles(primaryShadowPosition, secondaryShadowPosition);
  const borderStyles = getBorderStyles(primaryShadowPosition, variant);
  const baseStyles = getStyles(variant);

  return (
    <div className={`${baseStyles} ${customStyles}`}>

      {/* Additional div in case if border has gradient fill with border radius */}
      {isBorderVisible && <div className={`${borderStyles} ${customBorderStyles}`} />}

      {neonShadowSrc && <img className={neonShadowStyles} src={neonShadowSrc} alt="Shadow" />}

      {children}

    </div>
  )
};

export default NeonShadowBox;