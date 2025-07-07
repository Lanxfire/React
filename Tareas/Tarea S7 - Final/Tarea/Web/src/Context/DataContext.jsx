import { createContext, useState, useMemo} from 'react';

export const ContextoGlobal = createContext();

const DataContext = ({ children }) => {
  const [info, setInfo] = useState('');

  const value = useMemo(() => ({
    info,
    setInfo
  }), [info]);

  return (
    <ContextoGlobal.Provider value={value}>
      {children}
    </ContextoGlobal.Provider>
  );
};

export default DataContext;
