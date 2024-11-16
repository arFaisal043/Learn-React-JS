import Father from "./Father";

const GrandFather = (props) => {
    return (
        <div>
            <h1>{props.money}</h1>
            <Father money = {props.money - 200}/>
        </div>
    );
};

export default GrandFather;