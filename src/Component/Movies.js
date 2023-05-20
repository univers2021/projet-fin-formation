import {useState,useEffect,React}from'react'
import NavBar from "../Component/NavBar";
import axios from 'axios';
import CardMovies from '../Component/CardMovies';
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai'
import WatchList from './WatchList';





function Movies(){
    const [open,setOpen]= useState(false)
    function openMenu(){
        setOpen(!open)
        
    }
    const closeMenu = ()=>{
        setOpen(!open)
    }

    const [searchValue,setSearchValue] = useState("")
    const [movies,setMovies]= useState([])
    useEffect(()=>{
        axios.get(`https://www.omdbapi.com/?s=${searchValue}&apikey=5f6d2b5`)
        .then((res)=>{
            if(res.data.Search){
                console.log(res.data.Search)
                setMovies(res.data.Search)
            }
        })
        .catch((error)=>console.log(error))

    },[searchValue])
    return(
        <>
        <NavBar />
        <div className='w-full h-[100vh]  '>
            <div className=' w-[90%] m-auto h-screen   flex flex-col justify-around '>
                <div className='   w-full h-[25vh] sm:relative '>
                <input type="text" placeholder="searche" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} className=" absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] w-[600px] p-4 border-b-[2px] border-b-slate-800 rounded-2xl placeholder:text-[20px] text-sky-800   text-[20px]  focus:outline-none focus:ring focus:ring-sky-300"/>

                </div>
                <div   className=' w-[90%] m-auto h-auto grid grid-cols-5 gap-[10px] px-5    ' >
                    {movies.length > 0 && (movies.map(movie =>(<div > { <CardMovies movie = {movie}/>}   </div>)))}
                    
                </div>
                
                
            </div>

        </div>
        <div className=' absolute top-[100px] left-[30px] text-gray-800 z-10' onClick={()=>closeMenu()}> {!open?<AiFillEyeInvisible size={30}/> : <AiFillEye size={30}/>}</div>

         {open?<WatchList/> : <div className='fixed top-[-200px]'></div>}
        
        </>
    )
}
export default Movies