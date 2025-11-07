import Child from "./Child";
const Parent =()=>{
    const data ="Parent Info";
    const obj ={"id":"U001","name":"mohit","email":"mohit@gmail.com"};

    const disp =()=>{
        alert("Hello Props");
    }
    return(
        <div>
         <Child info ={data} users={obj} fun ={disp}/>
        </div>
    )
}
export default Parent;