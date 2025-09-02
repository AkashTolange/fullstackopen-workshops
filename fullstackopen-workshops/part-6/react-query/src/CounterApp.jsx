import { useReducer } from "react"
import CounterButton from "./CounterButton"

import CounterContext from "./CounterContext"


const counterReducer = (state, action) => { 
    switch (action.type) { 
        case "INC": 
            return state + 1
        case "DEC": 
            return state - 1
        case  "ZERO":
            return 0
        default: 
            return state
    }
}


const App =() =>{
    const [counter, counterDispatch] = useReducer(counterReducer, 0)

    return ( 
        <CounterContext.Provider value={[counter, counterDispatch]}>
        <div>
            <div>{counter}</div>
            <div>
                <CounterButton label="+" clickAction={() => counterDispatch({ type: "INC"})} />
                <CounterButton label="-" clickAction={() => counterDispatch({ type: "DEC"})} />
                <CounterButton label="0" clickAction={() => counterDispatch({ type: "ZERO"})} />
            </div>
        </div>
        </CounterContext.Provider>
    )
}

export default App;