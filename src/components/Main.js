import { useContext } from 'react'
import './Main.css'
import { Context } from '../Context'
import logo from '../images/logo.png'

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

    return (
        <>
            <div className='main'>
                <div className='nav'>
                    <p>Gemini</p>
                    <i className="fa-regular fa-user"></i>
                </div>
                <div className='main-container'>
                    {!showResult ? <>
                        <div className='greet'>
                            <p><span>Hello, Dev.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className='cards'>
                            <div className='card'>
                                <p>Suggest beautiful places to see on an upcoming road trip</p>
                                <i className="fa-regular fa-compass"></i>
                            </div>
                            <div className='card'>
                                <p>Briefly summarize this concept: urban planning</p>
                                <i className="fa-regular fa-lightbulb"></i>
                            </div>
                            <div className='card'>
                                <p>Brainstorm team bonding Activities for our work retreat</p>
                                <i className="fa-regular fa-message"></i>
                            </div>
                            <div className='card'>
                                <p>Improve the readabaility of the following code</p>
                                <i className="fa-solid fa-code"></i>
                            </div>
                        </div>
                    </>
                        : <div className='result'>
                            <div className='result-title'>
                                <i className="fa-regular fa-user"></i>
                                <p>{recentPrompt}</p>
                            </div>
                            <div className='result-data'>
                                <img src={logo} alt="" />
                                {loading ?
                                    <div className='loader'>
                                        <hr/>
                                        <hr/>
                                        <hr/>
                                    </div>
                                    :
                                    <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                                }
                            </div>
                        </div>
                    }

                    <div className='main-bottom'>
                        <div className='search-box'>
                            <input onChange={(e) => setInput(e.target.value)} value={input} type='text' placeholder='Enter your prompt here' className='inp'/>
                            <div>
                                <i className="fa-regular fa-image"></i>
                                <i className="fa-solid fa-microphone"></i>
                                {input?<i onClick={() => onSent()} className="fa-solid fa-share"></i>:null}
                            </div>
                        </div>
                        <p className='bottom-info'>
                            Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main
