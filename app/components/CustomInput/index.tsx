import solanaLogo from "~/assets/svg/solana-logo.svg";

type CustomInputProps = {
  label: string;
  value: string;
  tokenName: string;
  onChange?: (value: string) => void;
  balance?: string;
  disabled?: boolean;
  tokenIcon?: string;
  fiatPrice?: string;
  setMax?: () => void;
}

const CustomInput = ({
  label,
  value,
  onChange = () => {},
  tokenName,
  disabled = false,
  balance,
  fiatPrice,
  tokenIcon = solanaLogo,
  setMax = () => {},
}: CustomInputProps) => {

  const handleInput = (inputValue: string) => {
    // Allow only numbers and a single decimal point
    inputValue = inputValue.replace(/[^0-9.]/g, "");

    // Prevent multiple decimal points
    if ((inputValue.match(/\./g) || []).length > 1) {
      inputValue = inputValue.slice(0, -1);
    }

    // Prevent leading zeros (except for "0" or "0.")
    if (/^0\d/.test(inputValue)) {
      inputValue = inputValue.replace(/^0+/, "");
    }

    if (inputValue === ".") {
      inputValue = "";
    }

    onChange(inputValue);
  };

  return (
    <div className="flex flex-col gap-2 bg-[#262626] rounded-xl p-4">
      <span className="text-left text-body-s leading-[19px]">{label}</span>
      <div className="grid grid-cols-[70%_1fr]">
        <input
          type="text"
          value={value}
          disabled={disabled}
          onChange={(e) => handleInput(e.target.value)}
          className="font-mono text-h2 font-medium"
        />
        <div className="font-semibold ml-auto text-body-m py-2 px-3 h-[38px] flex items-center gap-2 bg-[#FFFFFF1F] rounded-xl">
          <span>{tokenName}</span>
          <img src={tokenIcon} alt="logo" className="w-4 h-4 object-cover"/>
        </div>
      </div>
      <div className="flex justify-between">
        <span className="font-mono text-[#67686D] text-body-s">≈ ${fiatPrice || '0.00'}</span>
        {balance && onChange && (
          <span className="text-[#67686D] text-body-s">
            Balance:{" "}
            <span className="font-mono">{balance}</span>
            {setMax && (
              <button
                className="font-semibold text-[#3AFFA3] ml-2"
                onClick={setMax}
              >
                MAX
              </button>
            )}
          </span>
        )}
      </div>
    </div>
  )
};

export default CustomInput;
