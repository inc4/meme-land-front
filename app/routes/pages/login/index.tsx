
import ConnectionPending from "./components/ConnectionPending";
import ConnectWallet from "./components/ConnectWallet";

const Login = () => {
  const isLoading = true;

  return (
    <div className="flex justify-center items-center h-full">
      {isLoading ? <ConnectionPending /> : <ConnectWallet />}
    </div>
  );
};

export default Login;
