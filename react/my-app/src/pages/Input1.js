import React,{useState} from "react";

const Counter = () =>{ //변수명 Counter의미가 하나도 없다 
    const [txtValue, setTextValue] = useState("");

    const onChange = (e) =>{
        setTextValue(e.target.value);
    };

    return(
        <div>
            <input type="text" value={txtValue} onChange={onChange}/>
            <br/>
            <p>{txtValue}</p>
        </div>
    );
};

export default Counter;
