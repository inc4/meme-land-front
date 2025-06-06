type TProps = {
  styles?: string;
  wrapperStyles?: string
};

const Spinner = ({ styles = '', wrapperStyles = '' }: TProps) => {
  return (
    <div className={wrapperStyles}>
      <div className={`h-[60px] w-[60px] animate-spin rounded-full border-[9px] border-solid border-e-transparent border-primary ${styles}`} />
    </div>
  );
};

export default Spinner;
