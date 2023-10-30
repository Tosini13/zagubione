import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
import PocketBase, { RecordAuthResponse, RecordModel } from "pocketbase";

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
  const [token, setToken] = useState<string | null>(null);

  const pb = useMemo(() => {
    const authRefresh = async (pb: PocketBase) => {
      const authData = await pb.collection("users").authRefresh();
      setToken(authData.token);
    };

    const DB_URL = process.env.REACT_APP_POCKET_BASE_SERVER_URL;
    if (!DB_URL) {
      throw new Error(`Database URL was not provided: ${DB_URL}`);
    }

    const pb = new PocketBase(DB_URL);
    authRefresh(pb);
    return pb;
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const res = await pb
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
        signOut: () => pb.authStore.clear(),
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
