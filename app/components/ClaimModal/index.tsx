import Modal from "~/components/Modal";
import CustomInput from "~/components/CustomInput";
import CustomButton from "~/components/CustomButton";

const ClaimModal = ({isOpen, onClose}: {isOpen: boolean, onClose: () => void}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>
        <span className="text-2xl font-semibold block w-full text-center">Claim Your Tokens</span>
        <div className="flex flex-col gap-[10px] my-8">
          <CustomInput
            label="You Invest"
            value='22'
            tokenName="SOL"
          />
        </div>
        <CustomButton
          customStyles="!text-body-l"
        >
          Claim & Sell
        </CustomButton>
        <CustomButton
          variant="linear"
          customStyles="!text-body-l !border-[1px] !border-[#697586] mt-3"
          handleClick={onClose}
        >
          Claim & Hold
        </CustomButton>
      </div>
    </Modal>
  )
};

export default ClaimModal;
