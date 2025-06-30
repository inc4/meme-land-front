import Modal from "~/components/Modal";
import pocketIcon from "~/assets/svg/pocket.svg";
import CustomButton from "~/components/CustomButton";
import {NavLink} from "react-router";

const CheckDrawModal = ({isOpen, onClose, projectName}: {isOpen: boolean, onClose: () => void, projectName: string}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      containerStyles="bg-radial-[at_50%_25%] to-[#080808] from-[#3AFFA31C] to-100%"
    >
      <div className="flex flex-col items-center">
        <img src={pocketIcon} alt="draw" className="mb-[50px] mt-10"/>
        <span className="text-h1 font-bold block mb-3">
          Join to Wallet Draw
        </span>
        <span className="text-[18px]">
          Check when you can claim your tokens
        </span>
        <NavLink to={`/presale/${projectName}/leaderboard`}>
          <CustomButton customStyles="!w-[201px] mt-7">
            Check Draw
          </CustomButton>
        </NavLink>
      </div>
    </Modal>
  )
};

export default CheckDrawModal;