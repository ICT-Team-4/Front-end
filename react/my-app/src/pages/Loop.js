import React from "react";

const title = ['제목1번', '제목2번', '제목3번'];
//반복문 map
const loop = () =>{
    return (
        <div>
          {title.map((titleElem, index) => {
            return (
              <div key={index}>
                <h2>{titleElem}<small>{index}</small></h2>
              </div>
            );
          })}
        </div>
    );
}

export default loop;