import Son from "./Son.jsx";
const Father = (props) => {
    return (
        <div>
            <h1>{props.money}</h1>
            <Son  money = {props.money - 300}/>
        </div>
    );
};

export default Father;