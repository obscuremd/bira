"use client";
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

interface generalProps {
  Posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const GeneralContext = createContext<generalProps | undefined>(undefined);

export const GeneralProvider = ({ children }: PropsWithChildren) => {
  const [Posts, setPosts] = useState<Post[]>([]);

  return (
    <GeneralContext.Provider value={{ Posts, setPosts }}>
      {children}
    </GeneralContext.Provider>
  );
};

export const useGen = (): generalProps => {
  const context = useContext(GeneralContext);
  if (!context) {
    throw new Error("useGeneralContext must be used within a GeneralProvider");
  }
  return context;
};
