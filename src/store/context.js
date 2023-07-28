import { createContext, useEffect, useState } from "react";

export const Store = createContext();

const Context = ({ children }) => {
  const [wall, setWall] = useState([]);
  const [data, setData] = useState([]);
  const [showcreate, setShowcreate] = useState(true)

  useEffect(() => {
    const storedData = localStorage.getItem('wall-data');
    const allboardData = localStorage.getItem('board-data');
    if (storedData) {
      setWall(JSON.parse(storedData));
    }
    if (allboardData) {
      setData(JSON.parse(allboardData));
    }
  }, []);

  const deleteWall = (id) => {
    setWall((prevData) => {
      const updatedData = prevData.filter((item) => item.id !== id);
      localStorage.setItem('wall-data', JSON.stringify(updatedData));
      return updatedData;
    });
  };

  const setWallData = (walldata) => {
    setWall((prev) => {
      const updatedData = [...prev, walldata];
      localStorage.setItem('wall-data', JSON.stringify(updatedData));
      return updatedData;
    });
  };

  const boardData = (boarddata) => {
    setData((prev) => {
      const updatedData = [...prev, boarddata];
      localStorage.setItem('board-data', JSON.stringify(updatedData));
      return updatedData;
    });
  };

  const deleteBoard = (id) => {
    setData((prevData) => {
      const updatedData = prevData.filter((item) => item.id !== id);
      localStorage.setItem('board-data', JSON.stringify(updatedData));
      return updatedData;
    });
  };

  return (
    <Store.Provider
      value={{ data, wall, showcreate, setShowcreate, deleteWall, setWallData, boardData, deleteBoard }}
    >
      {children}
    </Store.Provider>
  );
};

export default Context;
