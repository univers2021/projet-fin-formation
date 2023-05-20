import img from '../imge/rachid.png'
function Photo(){
    return(
        <> 
        
            <img src={img} alt='' className= 'bg-white bg-opacity-50 backdrop-blur-xl  drop-shadow-lg border-[2px] border-black rounded-[100px] w-[150px] h-[150px] absolute left-[50%] translate-x-[-50%] top-[35%] translate-y-[-35%]' />
        
        </>
    )
}
export default Photo