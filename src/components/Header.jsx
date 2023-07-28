import { useState, useEffect, useContext } from "react";
import Logo from "../assets/logo.png"
import WallModule from "./WallModule";
import { Store } from "../store/context";
import { Link } from "react-router-dom";
import { IoSearch } from 'react-icons/io5'; // Import the search icon

const Title = () => {
  return <a href="/"><h1 className="text-2xl font-bold text-blue-600">ThoughtWall</h1></a>;
};

const Header = ({ onSearch, onCreate }) => {
  const { showcreate, setShowcreate } = useContext(Store);
  const [searchText, setSearchText] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSearch = (searchText) => {
    onSearch(searchText);
  };

  const handleCreate = () => {
    setShowModal(true);
  };

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      handleSearch(searchText);
    }, 300); // Debounce delay of 300ms

    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [searchText]);

  return (
    <>
      <div className="flex items-center justify-between p-3 bg-white shadow-md">
        <Link to='/' onClick={() => setShowcreate(true)}>
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
              <img
                src={Logo}
                alt="Profile"
                className="rounded-full"
              />
            </div>
            <Title />
          </div>
        </Link>
        <div className="flex items-center">
          <div className="flex items-center gap-2 p-2 bg-gray-200 rounded-md">
            <IoSearch size={20} className="text-gray-500" />
            <input
              className="w-40 placeholder-gray-600 bg-gray-200 outline-none"
              type="text"
              placeholder="Search ThoughtWall"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          {showcreate && (
            <button
              className="px-4 py-2 ml-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
              onClick={handleCreate}
            >
              + Create new board
            </button>
          )}
        </div>
      </div>
      {showModal && (
        <WallModule isOpen={showModal} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default Header;
