import React, { createContext, useContext, useState } from 'react';

// Tạo context
const AppContext = createContext();

// Provider
export const AppProvider = ({ children }) => {
  const [state, setState] = useState({}); // state toàn cục mẫu

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook để dùng context dễ dàng
export const useAppContext = () => useContext(AppContext); 