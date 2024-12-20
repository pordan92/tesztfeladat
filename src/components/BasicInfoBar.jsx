const Card = ({ content }) => {
  return (
    <div className="flex items-center relative">
      <div className="w-[48px] h-[48px] mr-3 relative top-[-15px]">{content.icon}</div>
      <div className="flex flex-col">
        <h1 className="font-[600] text-[48px] m-0">{content.number}</h1>
        <h1 className="font-[600] text-[16px]">{content.description}</h1>
      </div>
    </div>
  );
};

const BasicInfoBar = ({ content }) => {
  return (
    <div className=" box-border w-[1184px] h-[158px] flex flex-row justify-around bg-sky-600 border border-sky-600 rounded-lg">
      {content.map((e) => (
        <Card content={e} />
      ))}
    </div>
  );
};

export default BasicInfoBar;
