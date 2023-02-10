import React from "react";
class Clock extends React.Component {
//state
//state can save some objects
//example -: name:"hi",font-size:"20"
//font size same to javascipt objects


        constructor(props){
super(props);


this.state = {
    date:new Date(),
    name:"Chandul Wickramasinghe"
}


        }
      tick() {
          this.setState({
                date:new Date(),
            })
        }
//lifecycle is can maintain this project
componentDidMount(){
this.timer = setInterval(() => {
  this.tick()
},1000 );
}
//what is mount mount like a render if this file render console log this word;
componentWillUnmount(){
    clearInterval(this.timer);
}
//what is unmount unmount is if change element in this document when react dom are
//remove and change new element or we <appname />this element will we close
//unmount you're project
//you can also get this methode for if your document is not run clean element because this methode can document are close code are run
    render(){
    return(
        <div>
       <div>Time is  :{this.state.date.toISOString()}</div>
        <div>Name is: {this.state.name}</div>
        </div>
    );
}
}
export default Clock;
//state state like javascript object store concept this.state = {date:"date is"} {this.state.date}