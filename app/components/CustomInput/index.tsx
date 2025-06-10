import solanaLogo from "~/assets/svg/solana-logo.svg";

type CustomInputProps = {
  label: string;
  value: string;
  tokenName: string;
}

const CustomInput = ({
  label,
  value,
  tokenName,
}: CustomInputProps) => {
  return (
    <div className="flex flex-col gap-2 bg-[#262626] rounded-xl p-4">
      <span className="text-left text-body-s leading-[19px]">{label}</span>
      <div className="grid grid-cols-[70%_1fr]">
        <input type="text" value={value} className="font-mono text-h2 font-medium"/>
        <div className="font-semibold ml-auto text-body-m py-2 px-3 h-[38px] flex items-center gap-2 bg-[#FFFFFF1F] rounded-xl">
          <span>{tokenName}</span>
          <img src={solanaLogo} alt="logo"/>
        </div>
      </div>
      <div className="flex justify-between">
        <span className="font-mono text-[#67686D] text-body-s">≈ $0.00</span>
        <span className="text-[#67686D] text-body-s">
          Balance:{" "}
          <span className="font-mono">2.321</span>
          <button className="font-semibold text-[#3AFFA3] ml-2">MAX</button>
        </span>
      </div>
    </div>
  )
};

export default CustomInput;
