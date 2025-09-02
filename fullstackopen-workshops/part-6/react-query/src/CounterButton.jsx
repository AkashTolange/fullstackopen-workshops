


const CounterButton =(props) => { 
    return ( 
        <button onClick={props.clickAction}>{props.label}</button>
    )
}

export default CounterButton;