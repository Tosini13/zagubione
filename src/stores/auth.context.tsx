import { ReactNode, createContext, useContext, useMemo, useState } from "react";
import { useDbContext } from "./db.context";

type AuthContextType = {
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  token: string | null;
};

const AuthContext = createContext<AuthContextType | null>(null);

type AuthContextProviderPropsType = {
  children: ReactNode;
};

const AuthContextProvider: React.FC<AuthContextProviderPropsType> = ({
  children,
}) => {
  const { db } = useDbContext();
  const [token, setToken] = useState<string | null>(null);

  useMemo(() => {
    const authRefresh = async () => {
      if (!db) return;
      try {
        const authData = await db.collection("users").authRefresh();
        setToken(authData.token);
      } catch (e) {
        console.log("e !log!", e);
      }
    };

    authRefresh();
  }, [db]);

  const signIn = async (email: string, password: string) => {
    try {
      const res = await db
        .collection("users")
        .authWithPassword(email, password);

      setToken(res.token);
      console.log("res!log!", res);
    } catch (err) {
      console.log("err !log!", err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut: () => db.authStore.clear(),
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("AuthContextProvider is not provided");

  return ctx;
};

export default AuthContextProvider;
