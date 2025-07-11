import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "increment": return {count: state.count + 1};
        case "decrement": return {count: state.count - 1};
        case "reset": return {count: 0};
        default: return state;
    }
    
}
const Counter = () => {
   const [state,dispatch] = useReducer(reducer,{count:0});

   return (<div>
    <p>Contador: {state.count}</p>
    <button onClick={()=>dispatch({type:"increment"})}>Incrementar</button>
    <button onClick={()=>dispatch({type:"decrement"})}>Decrementar</button>
    <button onClick={()=>dispatch({type:"reset"})}>Reiniciar</button>
   </div>)
}

export default Counter;