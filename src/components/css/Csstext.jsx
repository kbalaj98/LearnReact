function TextCss()
{
    return (<>
        <p className="india">India</p>

        <pre className="myMargin">Data 1</pre>
        <pre className="myMargin">Data 2</pre>

        <p id="para1">Test data 1</p>
        <p >Test data 1</p>
        <p >Test data 1</p>

        <div id="test">
            <p id="para1">inside div tag</p>
        </div>

        <div id="div2">
            <p>Inside div 2</p>
            <div>
                <p>internal div of div 2</p>
            </div>
        </div>

        <h3>Relative positioning</h3>
        <p class="relposit">relative position test1</p>
        <p >relative position test2</p>

        <h3>Combined position (relative+absolute)</h3>
        <div className="relativePos">
            <p className="absPos">test absolute positioning</p>
        </div>

    </>)
}

export default TextCss