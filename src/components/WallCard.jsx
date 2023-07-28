import React, { useContext } from 'react';
import { Store } from '../store/context';
import { Link } from 'react-router-dom';

const WallCard = ({ id, name }) => {
  const { deleteWall } = useContext(Store);

  const handleDelete = (e) => {
    e.preventDefault();
    deleteWall(id);
  };

  return (
    <div className="max-w-md p-4 transition-transform duration-300 ease-in-out transform bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-2">
      <Link to={`/wall/${id}`}>
        <h2 className="mb-4 text-xl font-semibold">{name}</h2>
      </Link>
      <div className="flex justify-end">
        <button className="mr-2 text-blue-500 hover:text-blue-700">Edit</button>
        <button
          className="text-red-500 hover:text-red-700"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default WallCard;
