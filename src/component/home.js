import React from "react";

function Home(){
    return(
        <>
<div className="mx-auto md:flex gap-10 md:w-1/2 shadow-xl p-10 md:h-1/2 my-32 justify-between">
  <form className="w-full">
    <h1 className=" text-center uppercase font-extrabold font-mono text-green-900 text-2xl">REGISITRATION FORM</h1>
    <label for="name">Name:</label><br/>
    <input type="text" id="name" name="name" className="border w-full p-2 rounded-lg border-green-500"/><br/>
    <label for="password">Password</label>
    <input type="password" id="password" name="password" className="border w-full p-2 rounded-lg border-green-500"/><br/>
    <label for="email">Email:</label><br/>
    <input type="text" id="email" name="email" className=" border w-full p-2 rounded-lg border-green-500"/><br/>
    <input type="submit" value="Submit" className="p-2 w-full bg-green-600 text-white font-extrabold rounded-full my-4"/>
  </form>
</div>
        </>
    );
}

export default Home;