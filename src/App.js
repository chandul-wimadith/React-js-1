import logo from './logo.svg';
import './App.css';
//import PropsDir from "./components/props/propsdir.js";
// import Statelivecycle from './components/statelivecycle/index';
import Hook1 from './components/hooks/usestate';
import React,{  useEffect , useState} from 'react';
import usecontext1 from './components/hooks/providers/usecontext1/index';
function App() {
  
  
  // const Header = (props) => {
  // let Color = 'orange';
  
  // switch (props.type) {
    
  //   case 'SUBMIT':
  //     Color = 'blue'
  //     break;
  //     case 'OK':
  //      Color = 'orange';
  //      break;
  //      case 'YES':
  //      Color='pink'; 
  //      break;
  //      case 'CANCLE':
  //       Color = 'red';
  //       break;
  //   default:
  //     Color = 'white';
  //     break;
  // }

  const Okbuttonhandle1 = () => {
    console.log("You clicked ok btn");
  }
  const Canclebuttonhandle2 = () => {
    
    console.log("you clicked cancle btn");
  }
  const handlesubmit = (event) => {
    console.log(data);
    event.preventDefault();
  }
  const handlechange = (event) => {

    setdata({
      
      ...data,
      //you can store different multi data objects in one state variable
      [event.target.name] : event.target.type === 'checkbox' ? event.target.checked : event.target.value
    })
  }
  const texthandle = (event, evn1, evenno,err,errno,obj,objno) => {
    // console.log(event);
    // console.log(event.nativeEvent);
    //comment
    // console.log(event.target);
    //target is what texthandle funtion target event react is print it is;
    console.log(event.target.value,evn1, evenno,err,errno,obj,objno);
      }//what is event parameter  react read user define event and show details;
      //nativeEvents is browser read and show details (react must get browser data);
  
    const [userloggedin , setuserloggedin] = React.useState(false);
    const [users,setusers] = React.useState(['user1','user2','user3','user4']);
      const simplevariable = "simplevariable";
    const [data , setdata] = React.useState();
  const conditiont = true;
  const conditiontf = false;
  

  const item = [
    {key:1, value:12},
    {key:2, value:24},
    {key:3, value:36},
    {key:4, value:48}

  ]
  const Item = (props) => {
    return <li key={props.key}>{ props.value }</li>
  }
      return(
  <div className="App">
  <div className='Header'>
  {/* <button style={{background:Color}}>{props.text}</button> 
  
     )
  
    }
   const handlebutton = () => {
 console.log('handlebutton funtion are run');

  }
    return ( */}
    </div>


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome our react js project</h1>
        
        
        {/* React Enviroment */}
        
      <div className='React Enviroment'>
        
        
        <div className='component/props/state/lifecycle'>
            <div className='statelivecycle'>
        {/* <Statelivecycle /> */}
            </div>
            <div className='propsdir'>
        {/* <PropsDir 
        text= {1}
        name = "React Js"
        address={{
          zipcode:"255",
          city:"colombo",
        }}
        addclickaction={handlebutton}
        /> */}
        
        {/* <Header text='submit' type='SUBMIT'/>
        <Header text='ok' type='OK'/>
        <Header text='yes' type='YES'/><Header text='cancle' type='CANCLE'/> */}
            </div>
        </div>
            <div className='HandleEvent'>
          {/* <div className='buttonhandle'>
            <button onClick={Okbuttonhandle1}>OK</button>
            <button onClick={Canclebuttonhandle2}>CANCLE</button>
          </div>
          <div className='texthandle'>
            <input type="text" onChange={(event) => texthandle(event, "event",2,"error",0,{},0)}/>
          </div> */}
            </div>
            <div className='variables'>
          {simplevariable}  
            </div>
            <div className='Conditional Rendering'>
          {/* <button onClick={handlebutton}>{userloggedin ? "logout":"login"}</button>
          {userloggedin && "hello"} */}
            </div>
            <div className='loop rendering'>
          {/*{users.map(user => <p>{ user }</p>)}what is user key user key is users array keys example -:[1,2,3,4] / 1,2,3,4,5 = user */}
            </div>
          <div className='attach key'>
              {/*<div className='attach key in array items'>
                <ul>
                  {item.map((num) => {return <li key={num.id}>{ num.value }</li>} )}{/* This code are simply use and define key
                </ul>
              </div>
                  <div className='attach key in index'>
                    <ul>
                      {item.map((num, index) => {return <li key={index}>{ num.value }</li>} )}
                        {/* What is index/index is {const constcar = [1,2,3,4] } there are constcar key are 1,2,3,4 theere are index are
                      [0] = 1
                      [1] = 2
                      [2] = 2
                      [3] = 4
                      
                      */}{/* This code are harmfull for your code because you have change index[0] value to index[2] react update wrong value
                    </ul>
                  <div className='attach key for function(1)'>
                    {item.map((num) => {return <Item id={num.key} value={num.value}/>} )}
                    {/* But this is wrong code because always parent element has allready  define key but this code parent element is
                    <Item /> => child element is => <li></li>
                    when doesn't define key in child element
                   
                    Wrong                                                       Correct
                   
                    const Item = (props) => {                           =>  const Item = (props) => {
                    return <li key={props.id}>{ props.value }</li>      =>  return <li>{ props.value }</li>
                    }                                                        }
                   
                   {item.map((num) => {return <Item id={num.key}        =>         {item.map((num) => {return <Item key={num.key} 
                                      value={num.value}/>} )}           =>                              value={num.value}/>} )}



              
                    
                  </div>
                  <div className='attach key for function(2)'>
                  {item.map((num) => {return <Item key={num.key} value={num.value}/>} )}
                  </div>
                  </div>*/}
          </div>
          <div className='form handle'>
            {/*<form methode="GET" onSubmit={handlesubmit}>
              <div>
              <input type="text" name='firstname' onChange={handlechange}/>
              </div>
              <br />
              <div>
                <input type="text" name='lastname' onChange={handlechange}/>
              </div>
              <br />
              <div>
                <input type="checkbox" name='IsOk' onChange={handlechange}/>
              </div>
              <br />
              <div>
                <input type="submit" />
              </div>
                </form>*/}
          </div>
        <div className='hooks'>
          {/* <Hook1 /> */}
          {/* */}<usecontext1.provider>
          <div className='usecontext'>
            
          </div>
          </usecontext1.provider>
        </div>
        </div>
      
      
      
      
      
        
        
        
        
        {/* React Enviroment  */}
        
        
        
      </header>
    </div>
  );
}

export default App;
