
const MyButton =(props) =>{

    return(
        <>
            {/* <Button >Plus one</Button> */}
            <button onClick={props.increaseFunc}>{props.text}</button>
        </>
    );
}

export default MyButton;