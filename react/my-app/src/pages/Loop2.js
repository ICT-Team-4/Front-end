import React from "react";

function Loop2() {
    const arr = [1, 2, 3, 4, 5];
    
    const arrLoop = () => {
      const newArr = [];
      for (let i = 0; i < arr.length; i++) {
        newArr.push(<h2 key={i}>{ arr[i] }번 반복중</h2>);
      }
      return newArr;
    };
  
    return <div> { arrLoop() } </div>;
}

export default Loop2;