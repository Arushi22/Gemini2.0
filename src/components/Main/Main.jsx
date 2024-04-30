import './Main.css';
import { FaUser, FaCompass, FaLightbulb, FaCode} from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { IoMicOutline } from "react-icons/io5";
import { RiSendPlane2Line } from "react-icons/ri";
import { BiImageAdd } from "react-icons/bi";
import { useContext } from 'react';
import { Context } from '../../context/Context';
import { SiGooglegemini } from "react-icons/si";


function Main() {

  const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)

  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <FaUser  className='user-icon'/>
      </div>
      <div className="main-container">
      {
            !showResult
            ?
             <>
        <div className="greet">
          <p><span>Hello, Dev</span></p>
          <p>How can I help  you today</p>
        </div>
        
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <FaCompass className='icon'/>
          </div>
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <FaLightbulb className='icon' />
          </div>
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <MdMessage className='icon'/>
          </div>
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <FaCode className='icon' />
          </div>
        </div>     

        </>
        :<div className='result'>
            <div className="result-title">
              <FaUser  className='user-icon'/>
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <SiGooglegemini className='gemini-icon' />
              {
                loading
                ?
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
                :
                <p dangerouslySetInnerHTML={{__html:resultData}}></p>
              }
              
            </div>
        </div>
      }
        <div className="main-bottom">
         
          <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type='text' placeholder='Enter a prompt here' />
            <div className='searchIcon-containers'>
              <BiImageAdd className='search-icons'/>
              <IoMicOutline className='search-icons'/>
              {input?<RiSendPlane2Line className='search-icons' onClick={()=>onSent()} />:null}
              
            </div>
          </div>
          <p className="bottom-info">
            Lorem ipsum
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main 