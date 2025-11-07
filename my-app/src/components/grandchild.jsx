import GrandChild from "./GrandChild";
const Child =(props)=>{
    console.log(props);
    props.fun();
   return(
    <div>
        <h1 align='center'>Child Component</h1>
        <p>{props.info}</p>
        <h3>User Info</h3>
        <p>ID:{props.users.id}</p>
        <p>Name:{props.users.name}</p>
        <p>Email:{props.users.email}</p>
        <GrandChild data ={props.users} />
    </div>
   )
}

export default Child;