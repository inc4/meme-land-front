import clsx from "clsx";

const TableHeader = () => {
  return (
    <div className={clsx(
      "grid grid-cols-[128px_1fr_200px] gap-[10px] min-w-[900px]",
      "p-[12px] border-b-[1px] border-gray-700 bg-black",
      "text-body-m text-beige-600 uppercase font-medium",
      )}>
      <span>Order</span>
      <span>Wallet</span>
      <span className="text-right">Tokens</span>
    </div>
  );
};

const TableBody = () => {
  const arr = Array.from({ length: 10 }).fill(1) as number[];
  return (
    <div>
      {arr.map((_, index) => (
        <div
          key={index}
          className={clsx(
            "grid grid-cols-[128px_1fr_150px] gap-[10px] min-w-[900px]",
            "px-[12px] py-[16px] bg-gray-900",
            "border-t-[1px] border-b-[1px] border-transparent",
            "text-body-l text-white font-medium",
          )}
        >
          <span className="font-mono">#{index}</span>
          <span>123012030vzzvzajfasqdj12j3123j12kl3j12lk3jkl12j3l123j12jkl3jkljsdkljlkaj</span>
          <span className="font-mono text-right">31,993,321</span>
        </div>
      ))}
    </div>
  );
};

const Table = () => {
  return (
    <div className="border-[2px] rounded-[8px] overflow-scroll bg-gray-900 border-gray-700">
      <TableHeader />
      <TableBody />
    </div>
  );
};

export default Table;
