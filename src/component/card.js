import React from "react";
import Image from "./gakondo.jpg"
import { useState } from "react";
function Card() {
    const [count, setCount] = useState(0);
    const barasha = () => {
        setCount(count + 1);
    };
    return (
       <>
        <div className="mx-auto md:flex gap-10 md:w-1/2 shadow-2xl p-10 md:h-1/2 my-32 justify-between">

            <div className="md:w-1/3 p-2 border-2">
            <img src={Image} className="w-full h-60 "/>
            </div>

            <div className="md:w-3/4 text-center">
            <h2 className="">Name= gakondo_photographer</h2><br/>
            <p>Ages= 20</p>

            <div className="flex-col">
                <p>Counting number : {count} </p>
                <button onClick={barasha} className="bg-black w-full p-2 text-cyan-100 font-bold ">
                    Count Numbers
                </button>
            </div>

          </div>
        </div>
       </>
    );
};

export default Card;