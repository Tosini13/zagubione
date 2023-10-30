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

type LostContextType = {
  lost: Post[];
};

const LostContext = createContext<LostContextType | null>(null);

type LostContextProviderPropsType = {
  children: ReactNode;
};

const LostContextProvider: React.FC<LostContextProviderPropsType> = ({
  children,
}) => {
  const { db } = useDbContext();
  const [lost, setLost] = useState<Post[]>([]);

  useMemo(() => {
    if (!db) return;
    const fetchLost = async () => {
      try {
        const resultList = await db.collection("lost").getFullList<Post>({
          sort: "-created",
        });
        setLost(resultList);
      } catch (e) {
        console.log("e !log!", e);
      }
    };

    fetchLost();
  }, [db]);

  return (
    <LostContext.Provider
      value={{
        lost,
      }}
    >
      {children}
    </LostContext.Provider>
  );
};

export const useLostContext = () => {
  const ctx = useContext(LostContext);
  if (!ctx) throw new Error("LostContextProvider is not provided");

  return ctx;
};

export default LostContextProvider;
