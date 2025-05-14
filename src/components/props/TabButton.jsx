import  "./MyProp.css"

function TabButton({children,onSelect,isSelected})
{
    function clickHandler()
    {
        console.log("Hello World")
    }

    const value = onSelect || clickHandler

    return <button className={isSelected?"active":undefined} onClick={value}>{children}</button>
}

export default TabButton