import { useState, ReactNode, createContext, SetStateAction, Dispatch } from "react";

 interface GlobalState {
    variable1: string;
    data2: {
        name:string,
        email: string
    }

 }

 interface GlobalStateProviderProps {
    children: ReactNode
 }

 // Modify context type to include both state and setter
interface GlobalStateContextType {
    globalState: GlobalState;
    setGlobalState: Dispatch<SetStateAction<GlobalState>>;
}


const GlobalStateContext = createContext<GlobalStateContextType | undefined>(undefined);

 export const GlobalStateProvider = ({ children }: GlobalStateProviderProps) => {
    const [globalState, setGlobalState] = useState<GlobalState>({
        variable1: 'value1',
        data2: {
            name: 'name',
            email: 'email'
        }
    })

    return (
        <GlobalStateContext.Provider value={{ globalState, setGlobalState }}>
            {children}
        </GlobalStateContext.Provider>
    )
}

    