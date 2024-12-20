import CardList from "../components/block3 comps/CardList";

const Block3 = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[1184px] my-10">
        <h1 className="font-[400] text-[20px] my-4">Esettanulmányok</h1>
        <h1 className="font-[600] text-[38px] my-4">Megoldásaink</h1>
        <p className="font-[300] text-[24px] w-2/3">
          Esettanulmányainkban bemutatjuk az általunk megtervezett, telepített
          és üzemeltetett megoldásokat, amelyek használata során nem kell
          kompromisszumokat kötni.
        </p>
      </div>
      <CardList />
    </div>
  );
};

export default Block3;
