import React, { createContext, useReducer } from "react";
import { blogType, reviewType } from "../shared/Types";


// Types


type State = {
  blog: blogType[] | null;
  loading: boolean;
  reviews:reviewType[] | null;
};




type LoadAction = {
  type: "setloading";
  payload: boolean;
};

type reviewAction = {
  type:'getReviews',
  payload: reviewType[] | null
}
type blogAction = {
  type:'getBlogs',
  payload: blogType[] | null
}
type uploadblog={
  type:'updateBlog',
  payload:blogType
}

type addBlog ={
  type:'addBlog',
  payload:blogType
}

type deleteBlog ={
  type:'deleteBlog',
  payload:string
}

type Action = LoadAction | reviewAction | blogAction |uploadblog |addBlog | deleteBlog

type ContextProps = State & {
  dispatch: React.Dispatch<Action>;
};

type ComponentProps = {
  children: React.ReactNode;
};

// Initial State
const initialState: State = {
  reviews: null,
  loading: false,
  blog:null,
 

};


// Create Context with default value
export const Context = createContext<ContextProps>({
  ...initialState,
  dispatch: () => null, // dummy dispatch for default
});

// Reducer
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "setloading":
      return { ...state, loading: action.payload };
    case "getReviews":
      return {...state, reviews: action.payload, loading:false};
    case "getBlogs":
       return { ...state, blog: action.payload, loading:false };
    case "updateBlog":
    return {
      ...state,
      blog: state.blog?.map(p =>
        p._id === action.payload._id ? action.payload : p
      ) ?? null,
    };
    case "addBlog":
    return {
      ...state,
      blog: [action.payload, ...(state.blog ?? [])], // prepend the new blog
    };
    case "deleteBlog":
      return {
        ...state,
        blog: state.blog?.filter((p) => p._id !== action.payload) ?? null,
      };



    default:
      return state;
  }
};

// Provider
export const DataContext = ({ children }: ComponentProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ ...state, dispatch }}>
      {children}
    </Context.Provider>
  );
};