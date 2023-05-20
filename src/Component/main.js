import {BsFacebook,BsLinkedin,BsWhatsapp}from 'react-icons/bs'

const Main =()=>{
    return(
        <>
        <div className=" w-full h-[70%] bg-white  rounded-b-xl drop-shadow-lg flex flex-col justify-around items-center ">
            <h3 className='pt-[30px] text-[20px]'><span className='text-red-800'>M</span>essoudi Rachid</h3>
            <div  className='flex justify-around items-center w-full '>
            <BsFacebook size={45} className='text-blue-600 hover:text-blue-400 cursor-pointer' />
            <BsLinkedin size={45} className='text-blue-800 hover:text-blue-400 cursor-pointer'/>
            <BsWhatsapp size={45} className='text-green-600 hover:text-green-400 cursor-pointer'/>
            </div>

            <button className=" hover:bg-slate-500 w-[100px] h-[40px] bg-violet-200 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow-2xl">
       <a href="https://www.dropbox.com/home?preview=Rachid+cv+(1).pdf">cv</a>
            </button>
        </div>
        </>
    )
}
export default Main

        
