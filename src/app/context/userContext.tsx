"use client";

import React, { Dispatch, createContext, useReducer } from "react";

export type UserInteface = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
};

type StateType = {
  users: Array<UserInteface>;
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
};

type ActionType = {
  type: string;
  payload: any;
};

const initialState: StateType = {
  users: [],
  page: 1,
  per_page: 6,
  total: 12,
  total_pages: 2,
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "SET_USERS":
      return { ...state, users: action.payload };
    case "RESET":
      return { ...state, users: [] };
    default:
      return state;
  }
};

export const UsersContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });



export const UsersContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UsersContext.Provider value={{ state, dispatch }}>
      {children}
    </UsersContext.Provider>
  );
}