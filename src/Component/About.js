import NavBar from "../Component/NavBar"
import Photo from './Photo'
import Main from './main'
import Header from "./header"

function About (){
    return(
        <>
        <NavBar />
        
        <div className="  border-gray-600 w-[400px] h-[600px] absolute mt-[10px] left-[50%] translate-x-[-50%] flex flex-col justify-between rounded-xl">
            <Header/>
            <Main/>

        </div>
        
        <Photo/>
        </>
    )
}
export default About