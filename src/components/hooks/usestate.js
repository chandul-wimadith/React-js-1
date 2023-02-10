import React,{ useEffect, useState} from "react";
export default function UseState() {


    const [user,setUser] = React.useState({
    firstname:"Chandul",
    lastname:"Wickramasinghe"
});


useEffect(() => {
    console.log(`${user.firstname}`+ ` `+`Mounte`);//this funtion will run if mount this document
//but anythign or update example document rerender or component will update when this element are runing unlimited
return () => {
    console.log("Will Unmount");
}//this function same to componentwillunmount lifecycle methode
//you can use (async () => {})(); function for waiting times(api call)
},[user.firstname, user.lastname]/*you can also input delay time or logic or update or rerender funtion*//*[] = this tag = You can limited you're ffuntion call back*/)


const handlebutton = () => {
    setUser({
        ...user,//this define that concept , user => copy and lastname update
        lastname:Math.random()
    })
}


return(
<div>
{user.lastname}
<button onClick={handlebutton}>Click me</button>
</div>

);


}