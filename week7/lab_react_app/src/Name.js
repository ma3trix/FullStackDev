const cssColor = {
    color: 'red',
    backgroundColor: 'yellow'
}



function Name(props){

    return 
    <>
    <h2>Hello,{props.fnm} {props.lnm}</h2>
    <h3 style={cssColor}>Hello,{props.fnm} {props.lnm}</h3> 
    </>
}

export default Name;