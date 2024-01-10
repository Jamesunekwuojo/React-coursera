import mylogo from './mylogo'

function logo (props){
    const pic = <img src={mylogo}/>
    return pic;
}




function Applogo(){
    return (
        <>
        <div>
            <h1>Helo friends</h1>
            <logo/>
        </div>
        </>
    )
}
export default Applogo;


    
    