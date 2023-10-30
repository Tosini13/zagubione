import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
import { useDbContext } from "./db.context";
import { Post } from "../types";
import { RecordModel } from "pocketbase";

type FoundContextType = {
  found: Post[];
};

const FoundContext = createContext<FoundContextType | null>(null);

type FoundContextProviderPropsType = {
  children: ReactNode;
};

const FoundContextProvider: React.FC<FoundContextProviderPropsType> = ({
  children,
}) => {
  const { db } = useDbContext();
  const [found, setFound] = useState<Post[]>([]);

  useMemo(() => {
    if (!db) return;
    const fetchFound = async () => {
      try {
        const resultList = await db.collection("found").getFullList<Post>({
          sort: "-created",
        });
        setFound(resultList);
      } catch (e) {
        console.log("e !log!", e);
      }
    };

    fetchFound();
  }, [db]);

  return (
    <FoundContext.Provider
      value={{
        found,
      }}
    >
      {children}
    </FoundContext.Provider>
  );
};

export const useFoundContext = () => {
  const ctx = useContext(FoundContext);
  if (!ctx) throw new Error("FoundContextProvider is not provided");

  return ctx;
};

export default FoundContextProvider;
