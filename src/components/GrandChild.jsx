import { useContext } from "react";
import {UserContext} from '../utlis';

const GrandChild = ()=>{
  const user = useContext(UserContext);
  const {name, role} = user;
    return (
        <>
            Grand Child
            <div>
                {name}
            </div>
            <div>
                {role}
            </div>
        </>
    )
}

export default GrandChild;

// context API 

// 1. define 2. creating wrapper using provider 3. accessing value

// Redux | Zustend | Redux Toolkit