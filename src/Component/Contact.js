import NavBar from "../Component/NavBar";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { VscLocation } from "react-icons/vsc";
const Contact = () => {
  return (
    <>
      <NavBar />
       {/* =============== styling for labtop======> */}
       <div className="sm:bg-black sm:w-full sm:h-screen  relativ">
        <div className="sm:grid sm:grid-flow-row sm:auto-rows-max sm:items-center  sm:w-[90%] sm:left-[50%] sm:translate-x-[-50%]  sm:h-[550px]  sm:absolute sm:bottom-[50%] sm:translate-y-[calc(50%+60px)] sm:rounded-3xl hidden"> 
        {/* ==========header=====> */}
        <div className="sm:w-full sm:flex sm:flex-col sm:justify-center sm:items-center sm:py-[10px] sm:bg-gray-400 sm:rounded-t-[20px]">
        <h2 className="sm:uppercase sm:text-[30px] sm:text-gray-800 sm:font-bold">
              contact
            </h2>
            <h3 className="sm:capitalize sm:text-[20px] sm:text-gray-800 sm:font-semibold">
              me
            </h3>

        </div>
        {/* =======body======> */}
        <div className=" sm:bg-white sm:w-[100%] sm:h-full sm:grid sm:grid-cols-2 sm:gap-2 sm:rounded-b-[20px] sm:drop-shadow-xl">
           {/* dv mesInfo*/}
           <div className=" sm:w-full sm:h-full">
              <form className="sm:flex sm:flex-col sm:justify-center sm:items-center">
                <input
                  type="text"
                  placeholder=" your e-mail"
                  className="sm:my-[20px] sm:w-[90%] sm:m-auto sm:h-[40px] sm:rounded-[20px] sm:focus:outline-none sm:focus:ring sm:focus:ring-violet-300 sm:px-[20px]  sm:placeholder:text-violet-500 sm:border-b-violet-300 sm:border-b-2 sm:bg-gray-200 sm:text-blue-900 text-[20px]"
                />
                <input
                  type="text"
                  placeholder=" your name"
                  className=" sm:my-[20px] sm:w-[90%] sm:m-auto sm:h-[40px] sm:rounded-[20px] sm:focus:outline-none sm:focus:ring sm:focus:ring-violet-300 sm:px-[20px]  sm:placeholder:text-violet-500 sm:border-b-violet-300 sm:border-b-2 sm:bg-gray-200 sm:text-green-900 text-[20px]"
                />
                <textarea
                  id="message "
                  rows="3"
                  cols="50"
                  className="sm:w-[90%] sm:m-auto sm:h-[120px] sm:mb-5 sm:outline-none sm:rounded-[10px] sm:focus:outline-none sm:focus:ring sm:focus:ring-violet-300 sm:px-[20px]  sm:placeholder:text-violet-500 sm:pt-3 sm:border-b-violet-300 sm:border-b-4 sm:bg-gray-200 sm:text-blue-900 text-[20px]"
                  placeholder="your message "
                ></textarea>
                <button className="  sm:first-letter:uppercase sm:first-letter:font-bold sm:first-letter:text-white sm:w-[150px] sm:h-[60px] sm:bg-violet-300  sm:mb-[20px] sm:text-blue-900 sm:rounded-[60px]">submit</button>
              </form>
            </div>
            {/* dv mesInfoContact*/}
            <div className="sm:w-full sm:h-full sm:grid sm:grid-rows-3 sm:justify-center sm:items-center sm:gap-4 py-3">
              <div className="  sm:w-[500px] sm:m-auto sm:h-[60px]   sm:flex sm:justify-around sm:items-center sm:bg-gray-200  sm:rounded-[10px]  sm:border-b-violet-300 sm:border-b-2">
                <span className="sm:text-violet-500 sm:rounded-[50%] sm:w-[50px] sm:h-[50px] sm:p-1 sm:text-center sm:bg-white sm:border-[1px] sm:border-solid sm:border-gray-500">
                  <AiOutlinePhone size={40} />
                </span>
                <h1 className="sm:text-violet-500 sm:text-[30px]"> +212 06 82 10 48 92</h1>
              </div>
              <div className="  sm:w-[500px] sm:m-auto h-[60px]   sm:flex sm:justify-around sm:items-center sm:bg-gray-200  sm:rounded-[10px]  sm:border-b-violet-300 sm:border-b-2">
                <span className="sm:text-violet-500 sm:rounded-[50%] sm:w-[50px] sm:h-[50px] sm:p-1 sm:text-center sm:bg-white sm:border-[1px] sm:border-solid sm:border-violet-500 sm:p-2">
                  <AiOutlineMail size={30} />
                </span>
                <h1 className="sm:text-violet-500 sm:truncate sm:hover:text-clip sm:text-[30px]">
                  
                  rachidmessoudi37@gmail.com
                </h1>
              </div>
              <div className="  sm:w-[500px] sm:m-auto sm:h-[60px]   sm:flex sm:justify-around sm:items-center sm:bg-gray-200  sm:rounded-[10px]  sm:border-b-violet-300 sm:border-b-2">
                <span className="sm:text-violet-500 sm:rounded-[50%] sm:w-[50px] sm:h-[50px] sm:text-center sm:bg-white sm:border-[1px] sm:border-solid sm:border-violet-500 sm:p-2">
                  <VscLocation size={30} />
                </span>
                <p className="sm:text-[15px] sm:text-violet-500 sm:truncate sm:hover:text-clip sm:text-justify">
                  
                  lot zineb imm 2 apt 13etg 3 titt mlil mediouna casablanca
                </p>
              </div>
            </div>

        </div>
        
        
        </div>


       </div>
      
      
      
      
      
      
      
      
      
      
      
      
      {/* =============== styling for mobile======> */}
      <div className="bg-black w-full h-screen ">
        {/* dv contonire*/}
        <div className=" sm:hidden bg-gray-400 w-[90%] m-auto h-[70%] translate-y-[calc(30%-60px)] rounded-3xl grid grid-flow-row auto-rows-max  ">
          {/* dv bodyHeader*/}
          <div className=" w-full flex flex-col justify-center items-center py-[10px]">
            <h2 className="uppercase text-[30px] text-gray-800 font-bold">
              contact
            </h2>
            <h3 className="capitalize text-[20px] text-gray-800 font-semibold">
              me
            </h3>
          </div>
          {/* dv bodyInfo*/}
          <div className=" bg-white w-[100%] h-full grid grid-cols-2 gap-2 rounded-b-[20px] drop-shadow-xl">
            {/* dv phonInfo*/}
            <div className=" w-full h-full grid grid-rows-3 justify-center items-center gap-4 py-3 ">
              <div className="  w-[250px] m-auto h-[60px]   flex justify-around items-center bg-gray-200  rounded-[10px]  border-b-violet-300 border-b-2">
                <span className="text-violet-500 rounded-[50%] w-[50px] h-[50px] p-1 text-center bg-white border-[1px] border-solid border-gray-500">
                  <AiOutlinePhone size={40} />
                </span>
                <h1 className="text-violet-500 "> +212 06 82 10 48 92</h1>
              </div>
              <div className="  w-[250px] m-auto h-[60px]   flex justify-around items-center bg-gray-200  rounded-[10px]  border-b-violet-300 border-b-2">
                <span className="text-violet-500 rounded-[50%] w-[50px] h-[50px] p-1 text-center bg-white border-[1px] border-solid border-violet-500 p-2">
                  <AiOutlineMail size={30} />
                </span>
                <h1 className="text-violet-500 truncate hover:text-clip">
                  
                  rachidmessoudi37@gmail.com
                </h1>
              </div>
              <div className="  w-[250px] m-auto h-[60px]   flex justify-around items-center bg-gray-200  rounded-[10px]  border-b-violet-300 border-b-2">
                <span className="text-violet-500 rounded-[50%] w-[50px] h-[50px] text-center bg-white border-[1px] border-solid border-violet-500 p-2">
                  <VscLocation size={30} />
                </span>
                <p className="text-violet-500 truncate hover:text-clip text-justify">
                  
                  lot zineb imm 2 apt 13etg 3 titt mlil mediouna casablanca
                </p>
              </div>
            </div>
            {/* dv mesInfo*/}
            <div className=" w-full h-full">
              <form className="flex flex-col justify-center items-center">
                <input
                  type="text"
                  placeholder=" your e-mail"
                  className="my-[20px] w-[90%] m-auto h-[40px] rounded-[20px] focus:outline-none focus:ring focus:ring-violet-300 px-[20px]  placeholder:text-violet-500 border-b-violet-300 border-b-2 bg-gray-200 text-blue-900"
                />
                <input
                  type="text"
                  placeholder=" your name"
                  className=" my-[20px] w-[90%] m-auto h-[40px] rounded-[20px] focus:outline-none focus:ring focus:ring-violet-300 px-[20px]  placeholder:text-violet-500 border-b-violet-300 border-b-2 bg-gray-200 text-blue-900"
                />
                <textarea
                  id="message "
                  rows="3"
                  cols="50"
                  className="w-[90%] m-auto h-[120px] mb-5 outline-none rounded-[10px] focus:outline-none focus:ring focus:ring-violet-300 px-[20px]  placeholder:text-violet-500 pt-3 border-b-violet-300 border-b-4 bg-gray-200 text-blue-900"
                  placeholder="your message "
                ></textarea>
                                <button className="  first-letter:uppercase first-letter:font-bold first-letter:text-white w-[150px] h-[60px] bg-violet-300  mb-[10px] text-blue-900 rounded-[60px] first-litter">submit</button>

              </form>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};
export default Contact;
