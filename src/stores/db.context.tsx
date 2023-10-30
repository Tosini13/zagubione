import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
import PocketBase, { RecordAuthResponse, RecordModel } from "pocketbase";

type DatabaseContextType = {
  db: PocketBase;
};

const DbContext = createContext<DatabaseContextType | null>(null);

type DbContextProviderPropsType = {
  children: ReactNode;
};

const DbContextProvider: React.FC<DbContextProviderPropsType> = ({
  children,
}) => {
  const db = useMemo(() => {
    const DB_URL = process.env.REACT_APP_POCKET_BASE_SERVER_URL;
    if (!DB_URL) {
      throw new Error(`Database URL was not provided: ${DB_URL}`);
    }

    return new PocketBase(DB_URL);
  }, []);

  return (
    <DbContext.Provider
      value={{
        db,
      }}
    >
      {children}
    </DbContext.Provider>
  );
};

export const useDbContext = () => {
  const ctx = useContext(DbContext);
  if (!ctx) throw new Error("AuthContextProvider is not provided");

  return ctx;
};

export default DbContextProvider;
