import { useContext, useState } from 'react';
import { Store } from '../store/context';
import { MdClose } from 'react-icons/md';

const WallModule = ({ isOpen, onClose }) => {
  const { setWallData } = useContext(Store);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name) {
      setWallData({ id: Math.floor(Math.random() * 1000), name });
    }
    onClose(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="p-8 bg-white rounded-lg w-96">
            <div className="flex justify-between">
              <h2 className="mb-4 text-2xl font-bold">Create Wall</h2>
              <MdClose
                className="cursor-pointer"
                onClick={() => onClose(false)}
              />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-1 font-medium">
                  Title
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default WallModule;
