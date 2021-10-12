// import Input from "./inputSample";
import React, {useRef,useState} from "react";
import UserList from "./UserLIst";
import CreateUser from "./CreateUser"

function App() {
  const [Inputs, setInputs] = useState({
    name:'',
    email:''
  });
  const {name,email}=Inputs;
  const [users, setUsers] = useState([
    {
        id:1,
        name:'장도현',
        email:'jdh97@naver.com'
    },
    {
        id:2,
        name:'Lee',
        email:'someone@gmail.com'
    }
  ]);

  const nextId=useRef(3);
  const onCreate=()=>{
    const user={
      id:nextId.current,
      name,
      email
    };
    setUsers([
      ...users,user
    ])
    setInputs({
      name:'',
      email:''
    })
    nextId.current+=1;
  }
  const onChange=(e)=>{
    const {name,value}=e.target;
    setInputs({
      ...Inputs,
      [name]:value
    });
  }
  const onRemove=id={
    
    setUsers(users.filter(user=>user.id!==id))
  }
  return (
    <>
      <CreateUser name={name} email={email} onChange={onChange} onCreate={onCreate}></CreateUser>
      <UserList users={users} onRemove={onRemove}></UserList>
    </>
  );
}

export default App;
