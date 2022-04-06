import React, {useState} from "react";

const initialState = {
  number: 10,
  text: "Ex 2"
}

export const ContextState = React.createContext(initialState)

export default function Store(props){


  const [state, setState] = useState(initialState)

  function updateState(key, value){
    setState({
      ...state,
     [key]: value
    })
  }

  return(
    <ContextState.Provider value={{
      number: state.number,
      text: state.text,
      modNumber: n => updateState('number', n)
    }
     
    }>
      <div>
        {props.children}
      </div>
    </ContextState.Provider>
    
  )
}