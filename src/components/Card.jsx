import React, { useContext } from 'react';
import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Store } from '../store/context';

const Card = ({ id, image, name, description }) => {
  const { deleteBoard } = useContext(Store);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleDelete = () => {
    deleteBoard(id);
  };

  return (
    <div className="max-w-sm overflow-hidden transition-transform duration-300 ease-in-out transform rounded-lg shadow-md hover:shadow-xl hover:scale-105">
      <img src={image} alt={name} className="object-cover w-full h-48" />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{name}</div>
        <p className="text-base text-gray-700">{description}</p>
      </div>
      <div className="flex items-center justify-between px-6 py-4">
        <button onClick={handleLike} className="flex items-center px-4 py-2">
          {liked ? (
            <FaHeart className="mr-2 text-red-500" />
          ) : (
            <FaRegHeart className="mr-2" />
          )}
        </button>
        <div>
          <button className="px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:bg-blue-700">
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
