import Image from "next/image";

const Answer = ({ children }) => {
  return (
    <div className="flex w-full mt-2 space-x-3 max-w-lg ml-auto justify-end">
      <div>
        <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
          <div className="text-sm">{children}</div>
        </div>
      </div>
      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300">
        <Image
          className="rounded-full"
          src="https://robohash.org/5bacf90fcc42cfbc5671312c9dbd6df4?set=set4&bgset=&size=400x400"
          alt="robot"
          width={40}
          height={40}
        />
      </div>
    </div>
  );
};

export default Answer;
