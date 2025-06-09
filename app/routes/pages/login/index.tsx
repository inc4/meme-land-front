
import { useState } from "react";
import ConnectionPending from "./components/ConnectionPending";
import ConnectWallet from "./components/ConnectWallet";
import InviteCode from "./components/InviteCode";

enum LoginStep { Connect, InviteCode }

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(LoginStep.Connect)

  return (
    <div className="flex justify-center items-center h-full">
      {step === LoginStep.Connect && (isLoading ? <ConnectionPending /> : <ConnectWallet />)}
      {step === LoginStep.InviteCode && <InviteCode />}
    </div>
  );
};

export default Login;
