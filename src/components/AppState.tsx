import React, { createContext, useState, useContext } from "react";

interface APPStateValue {
  cart: {
    items: { id: number, name: string; price: number }[];
  };
}

const defaultStateValue: APPStateValue = {
  cart: {
    items: [],
  },
};

export const AppStateContext = createContext(defaultStateValue);

export const AppSetStateContext = createContext<
  React.Dispatch<React.SetStateAction<APPStateValue>> | undefined
>(undefined);

export const useSetState = () => {
    const setState = useContext(AppSetStateContext)
    if (!setState){
        throw new Error(
            "useState was called outside of the AppSetStateContext provider"
        )
    }
    return setState
}

const AppStateProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(defaultStateValue);

  return (
    <AppStateContext.Provider value={state}>
     <AppSetStateContext.Provider value={setState}>{children}</AppSetStateContext.Provider> 
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
