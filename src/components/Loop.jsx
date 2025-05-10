import React from 'react'

function Loop()
{
    const arr = ["st1","st2","st3","st4"]

    for(let val of arr)
    {
        console.log(val)
    }
    return (
        <>
            <p>Hello iframe</p>
            <div id="for of">
            <h3>Looping</h3>
            {
                arr.map((item,index)=>(

                    <p>{index+1}){item}</p>
                ))
            }
            
            </div>
        </>
        
    );
}

export default Loop