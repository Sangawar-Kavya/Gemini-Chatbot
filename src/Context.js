import { createContext, useState } from "react";
import run from "./gemini";

export const Context = createContext()

const ContextProvider = (props) => {

    const[input, setInput]=useState(" ")  //used for saving input data
    const[recentPrompt, setRecentPrompt]=useState(" ") //when send button is clicked the input flied data will be stored here and display in main component
    const[prevPrompt, setPrevPrompt]=useState([ ]) //it is used to store all the input history and display it in sidebar at recent tab
    const[showResult, setShowResult]=useState(false) //once this function is true it will hide the greet and cards part of main component , and it will display the output for the given question
    const[loading, setLoading]=useState(false) //if it is true it will display loading animation and after getting the data we will make it falls
    const[resultData, setResultData]=useState(" ") // it is used to display data on our webpage

    const delayPara=(index,nextword)=>{
        setTimeout(function (){
            setResultData(prev=>prev+nextword)
        },75*index)
    }

    const newChat =()=>{
        setLoading(false)
        setShowResult(false)
    }
    const onSent = async (prompt) => {

        setResultData("")
        setLoading(true)
        setShowResult(true)
        let response;
        if (prompt !== undefined){
            response = await run(prompt)
            setRecentPrompt(prompt)
        }
        else{
            setPrevPrompt(prev=>[...prev,input])
            setRecentPrompt(input)
            response = await run(input)
        }
        let responseArray = response.split("**")
        let newResponse=""
        for (let i=0 ; i<responseArray.length ; i++){
            if(i===0 || i%2 !==1){
                newResponse += responseArray[i]
            }else{
                newResponse +="<b>"+responseArray[i]+"</b>"
            }
        }
        let newResponse2 = newResponse.split("*").join("<br/>")
        let newResponseArray =newResponse2.split(" ")
        for (let i=0; i<newResponseArray.length; i++)
        {
            const nextword = newResponseArray[i]
            delayPara(i,nextword+" ")
        }
        setLoading(false)
        setInput("")
    }

    const contextValue = {
        prevPrompt, 
        setPrevPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt, 
        showResult, 
        loading,
        resultData,
        input,
        setInput,
        newChat
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider