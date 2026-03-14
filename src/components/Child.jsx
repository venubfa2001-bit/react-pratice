import GrandChild from "./GrandChild";

const Child = (props)=>{

const {passingData, anOtherData} = props;

    return(
        <>
        Child
        <div>
            {passingData}
        </div>
        <div>
            {anOtherData}
        </div>
        <GrandChild />
        </>
    )
}

export default Child;