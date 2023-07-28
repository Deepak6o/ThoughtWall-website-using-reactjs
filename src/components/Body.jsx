import { useContext } from "react";
import { Store } from "../store/context";
import WallCard from "./WallCard";

const Body = ({ searchText }) => {
  const { wall } = useContext(Store);

  const filteredData = wall.filter(
    (item) => item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  if (filteredData.length === 0) {
    return (
      <div className="mt-8 text-4xl text-center text-gray-500 h-96">
        No Posts Yet
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 mx-5 mt-8 sm:grid-cols-2 lg:grid-cols-3">
      {filteredData.map((item) => (
        <WallCard
          id={item.id}
          key={item.id}
          name={item.name}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default Body;
