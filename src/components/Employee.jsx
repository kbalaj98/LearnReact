import { useState } from "react";
import React from "react";

const course= ["HTML","CSS","REACT"]

function EmployeeForm()
{
    const[name,setName] = useState('')
    const[pass,setPass] = useState('')
    const[gender,setGender] = useState('Male')
    
    const[topic,setTopic] = useState(new Array(course.length).fill(false))


    function logIn(e)
    {
        console.log(`name : ${name} and password : ${pass} Gender:${gender}`)
        let data = topic.map((val,index)=>val?index:-1).filter(index=>index!==-1).map((num)=>course[num])

        console.log("Selected course:::",data)

        
    }



    function handleCheckbox(currindex)
    {
        let data = topic.map((val,index)=>index===currindex? !val : val)
        console.log("handle check::"+data);

        setTopic(data)
    }


    return (<>
        <div className="employeeForm">
        <form onSubmit={logIn}>
        <div>Name:</div><input type="text" name="uname" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
        <div>Password:</div><input type="password" name="upass" value={pass} onChange={(e)=>setPass(e.target.value)}/><br/>
        <div>Gender: <input type="radio" name="gender" value="Male" onClick={(e)=>setGender(e.target.value)} checked={gender==="Male"}/>Male
        <input type="radio" name="gender" value="Female" onClick={(e)=>setGender(e.target.value)} checked={gender==="Female"}/>Female</div><br/>
        <div>
            Course:
            {
                course.map((val,index)=>(
                    <li key={index} type="none">
                        <input type="checkbox"  value={val} onChange={()=>handleCheckbox(index)} checked={topic[index]}/>
                        <label>{course[index]}</label>
                    </li>
                ))
            }
        </div>    

        <div>
            Age: <select>
                    <option>1-10</option>
                    <option>12-20</option>
                    <option>21-30</option>
            </select>
        </div>

        Feedback <textarea name="feedback" rows="4" cols="30"></textarea><br/>
            
            
        <input type="submit"  value="baljai"/>
        <input type="reset" value="reset form"/>
        {/* <button name="mysubmit">Submit</button> */}

        </form>
        </div>
    </>);
}

export default EmployeeForm