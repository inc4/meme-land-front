const list = [
  { label: 'Enter to Presale', text: 'Zesh AI Layer is an AI Layer on SUI, with 1.6M+ users. For a chance to participate in this crypto IDO please check the pre-sale details below.' },
  { label: 'Enter to Presale', text: 'Zesh AI Layer is an AI Layer on SUI, with 1.6M+ users. For a chance to participate in this crypto IDO please check the pre-sale details below.' },
  { label: 'Enter to Presale', text: 'Zesh AI Layer is an AI Layer on SUI, with 1.6M+ users. For a chance to participate in this crypto IDO please check the pre-sale details below.' },
  { label: 'Enter to Presale', text: 'Zesh AI Layer is an AI Layer on SUI, with 1.6M+ users. For a chance to participate in this crypto IDO please check the pre-sale details below.' },
];

const Rules = () => {
  return (
    <section>
      <h3 className="font-bold text-[32px]">Rules</h3>
      <div className="grid grid-cols-4 gap-4">
        {list.map((el, i) => (
          <div>
            <div className="w-[70px] h-[70px] mb-6 border-[1px] border-gray-700 text-[20px] text-[#3AFFA3] rounded-full flex items-center justify-center">
              0{i + 1}
            </div>
            <span className="text-2xl font-bold mb-2 block">{el.label}</span>
            <span className="text-sm opacity-60">{el.text}</span>
          </div>
        ))}
      </div>
    </section>
  )
};

export default Rules;
