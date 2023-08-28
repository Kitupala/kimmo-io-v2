import { createContext, useContext, useReducer } from "react";
import { data } from "../data/data";

const DataContext = createContext();

const initialState = {
  projects: [...data.projects],
  studies: [...data.studies],
  abilities: [...data.abilities],
  projectIsVisible: true,
  projectTab: "0.1",
};

function reducer(state, action) {
  switch (action.type) {
    case "showProject":
      return {
        ...state,
        projectIsVisible: state.projectTab === action.payload ? false : true,
        projectTab: action.payload,
      };

    default:
      throw new Error("Unknown error");
  }
}

function DataProvider({ children }) {
  const [
    { projects, projectIsVisible, projectTab, studies, abilities },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider
      value={{
        projects,
        projectIsVisible,
        projectTab,
        studies,
        abilities,
        dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

function useData() {
  const context = useContext(DataContext);
  if (context === undefined)
    throw new Error("DataContext was used outside of DataProvider");
  return context;
}

export { DataProvider, useData };
