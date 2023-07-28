import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "./Modal";
import { Store } from "../store/context";
import Card from "./Card";

const WallBody = ({ searchText }) => {
  const { id } = useParams();
  const { data, setShowcreate } = useContext(Store);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    setShowcreate(false);
  }, []);

  const handleCreate = () => {
    setShowCard(true);
  };

  const filteredData = data.filter((item) => item.parentId === id);
  const searchedData = filteredData.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center p-4">
      {filteredData.length === 0 ? (
        <div className="flex flex-col items-center mt-8">
          <div className="text-4xl text-center text-gray-500">
            No Posts Yet
          </div>
          <button
            className="px-4 py-2 mt-4 text-white bg-green-700 rounded-lg hover:bg-green-800"
            onClick={handleCreate}
          >
            + Create new post
          </button>
        </div>
      ) : (
        <>
          <button
            className="px-4 py-2 mt-8 text-white bg-green-700 rounded-lg hover:bg-green-800"
            onClick={handleCreate}
          >
            + Create new post
          </button>
          <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">
            {searchedData.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        </>
      )}
      {showCard && (
        <Modal
          isOpen={showCard}
          onClose={() => setShowCard(false)}
          parentId={id}
        />
      )}
    </div>
  );
};

export default WallBody;
