import React from "react"

//삼항연산자
const Component =()=> {
    return (
      <div>
        {
          1 === 1
          ? <p>참이면 보여줄 HTML</p>
          : null
        }
      </div>
    );
} 
export default Component;