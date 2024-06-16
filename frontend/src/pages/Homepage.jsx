import React,{useState,useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';



const Homepage = () => {
    const [list,setList] = useState([]);
    const [toggleInput,setToggleInput] = useState(false);
    const [editId,setEditId] = useState(null);
    const[editValue,setEditValue]=useState("");
    console.log(editValue);


    const handleEdit = async(id) => {
      setToggleInput(!toggleInput);
      setEditId(id);
      let toBeChangedValue = list.filter((el)=>{
        return el.id === id
      })
       console.log(toBeChangedValue);
      setEditValue(toBeChangedValue[0].first_name);

       

    }

    const handleUpdate = async()=>{
      await axios.patch(`http://localhost:8080/data/${editId}`,{first_name:editValue});

      getData();
      setToggleInput(false);
    } 

    const getData = async()=>{
      try{
        const data = await axios.get('http://localhost:8080/data');
        const res = data.data;
        setList(res);
      }catch(e){
        throw e.message;
      }
    }
    useEffect(() =>{
      getData();
    },[])
  return (
    <MainDiv>
      <h3>User's List</h3>
      <ListDiv>
          {list?.map((user)=>(<div key={user.id}><p style={{fontSize:"1rem"}}><span style={{color:'tomato'}}>Name</span>:{user.first_name} <span>{toggleInput? <button onClick={handleUpdate}>Update</button> :<button onClick={()=>handleEdit(user.id)}>Edit</button> }{toggleInput&& editId==user.id ? <input type='text' value={editValue} onChange={(e)=>{
            setEditValue(e.target.value)}}  />:null}</span></p> </div>))}
      </ListDiv>
    </MainDiv>
  )
}

export default Homepage


const MainDiv = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

const ListDiv = styled.div`
width:20rem;
height:30rem;
border:1px solid tomato;
text-align:center;
overflow-y:scroll
`