

import {motion}from 'framer-motion'

const CardMovies = ({movie})=>{
    return(
        <div>
             <motion.div  className=" bg-red-500 w-[150px] my-[40px] hover:scale-125">
                 { movie.Poster? (<img src={movie.Poster} alt ={movie.Titl} />)  : (<div></div>)}
                
             </motion.div>
             </div>
       
    )
}
export default CardMovies