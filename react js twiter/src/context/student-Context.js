import React, { createContext, useReducer } from 'react';
import  {tweeterReducer , data} from  "./student-Reducers"

export const TweetContext = createContext('Initial Value');

function ContextProvider({ Tweeter }) {
    const [state, dispatch] = useReducer(tweeterReducer, data);
    return (
        <TweetContext.Provider value={{ state, dispatch }}>
            {Tweeter}
        </TweetContext.Provider>
    )
}

export default ContextProvider;
