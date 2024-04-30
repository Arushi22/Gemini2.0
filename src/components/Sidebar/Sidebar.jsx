import './Sidebar.css';
import { FiMenu } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { IoChatboxOutline, IoSettingsOutline  } from "react-icons/io5";
import { FaRegQuestionCircle, FaHistory  } from "react-icons/fa";
import { useContext, useState } from 'react';
import { Context } from '../../context/Context';

function Sidebar() {
    const[extended, setExtended]=useState(false);
    const {onSent, prevPrompts, setRecentPrompt, newChat} = useContext(Context)

    const loadPrompt = async(prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

  return (
    <div className='sidebar'>
        <div className="top">
            <FiMenu className='menu' onClick={()=>setExtended(prev=>!prev)} /> 
            <div onClick={()=>newChat()} className='new-chat'>
                <FaPlus />
                {extended?<p>New chat</p>:null}
                
            </div>
            {extended ? <div className="recent">
                <p className="recent-title ">Recent</p>
                {prevPrompts.map((item, index)=>{
                    return(
                        <div onClick={()=>loadPrompt(item)} className="recent-entry">
                            <IoChatboxOutline className='w-5' />
                            <p>{item.slice(0,18)} ...</p>
                        </div>
                    )
                })}
                
            </div> : 
                null
            }
            
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <FaRegQuestionCircle className='w-5'/>
                {extended? <p>Help</p> : null}
            </div>
            <div className="bottom-item recent-entry">
                <FaHistory className='w-5'/>
                {extended? <p>Activity</p> : null}
                
            </div>
            <div className="bottom-item recent-entry">
                <IoSettingsOutline className='w-5'/>
                {extended? <p>Settings</p> : null}                
            </div>
        </div>
    </div>
  )
}

export default Sidebar