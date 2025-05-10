
function Myhtml()
{
    const img_style= {width: "150px", height: "150px"}
    let wikiLink ="https://en.wikipedia.org/wiki/Friends"


    return (
        <>
           
                <title>HTML LEARN</title>
                <style>
                   {`.test {color:red;}
                   
                    .important {background-color:red;}
                   
                   ` }
                </style>
            
                <h2><i className="test">F.R.I.E.N.D.S</i></h2><hr/><hr/>
                <img src="/logo192.png" alt="react img" style={img_style}/>
                <p><b>frinds</b> in english <u>web</u> serious</p><br/>
                <p>price is<strike>$100</strike> off $10</p><br/>

                <p>x<sub>2</sub> ::: x<sup>2</sup></p>
                <pre>Hello     world!!!</pre><br/>

                <p className="important"> important</p>

                <p><a href={wikiLink} target="_blank"> refer wiki</a></p>

                <table border="1" cellPadding="8" cellSpacing="2" width="500px">
                        <caption>Employee Data</caption>
                        <tr>
                            <th rowSpan="5">br</th>
                        </tr>
                        <tr>
                            <th colSpan="3">Student</th>
                        </tr>
                        <tr>
                            <th>S.No</th>  <th>Name</th> 
                        </tr>
                    
                    <tr>
                            <td>1</td>
                            <td>Arun</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Balaji</td>
                        </tr>

                    
                    
                        

                    
                </table>

                <h3>Unorder list</h3><br/>
                <ul>
                    <li>item C</li>
                    <li>item B</li>
                    <li>item A</li>
                </ul>

                <h3>Order list</h3>
                <ol type="I">
                    <li>samsung</li>
                    <li>iphone</li>
                    <li>oneplus</li>
                </ol>

                <h3>Definition list</h3>
                <dl>
                    <dt>HTML</dt>
                    <dd>Hyper Text Markup Language</dd>
                </dl>

                <h3>IFrame</h3>

                <iframe src="/html/test.html" width="50%" height="240px"></iframe><br/><br/>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/VOua_-NMQvA?si=ZBif4maMkGxmXxwk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                

            
            
        </>
    );
}

export default Myhtml