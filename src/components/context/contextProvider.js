import { createContext,useState } from "react";
import run from "../config/gemini";

export const Context = createContext()

const ContextProvider = props => {

    const [changeInput,setChangeInput] = useState('')
    const [userQuery,setUserQuery] = useState('');
    const [resultData,setResultData] = useState('')
    const [load,setLoader] = useState(false)
    const [recentsHistory,setRecents] = useState([])

    const delayPara = (index,next) => {
        setTimeout(function(){
            setResultData(pre => pre + next)
        },75*index)
    }

    const getAction = async (prop) => {
        setLoader('PEN')
        setUserQuery(prop)
        setResultData('')
        let responseText = await run(prop)
        setLoader('SUC')
        setRecents(pre => [...pre,prop])
      
        let splitted = responseText.split("**")
        let newArray = '';
        for(let i=0;i < splitted.length;i++){
            if(i===0 || i % 2 !== 1){
                newArray += splitted[i]
            }else{
                newArray += "<h2>"+splitted[i]+"</h2>"
            }
        }
        let newSplitted = newArray.split('*').join("<br/>")
        let newResponse = newSplitted.split(" ");
        for(let i=0;i<newResponse.length;i++){
            const nextWord = newResponse[i];
            delayPara(i,nextWord + " ")
        }
    }
    const contextValue = {
        userQuery,
        setUserQuery,
        getAction,
        resultData,
        load,
        changeInput,
        setChangeInput,
        recentsHistory
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider


// for(let i=0;i < splitted.length;i++){
//     console.log(splitted[i],`length>>${splitted[i].length}`,i)
//     if(i===0 || i % 2 !== 1){
//         newArray += splitted[i]
//     }else{
//         newArray += "<h1 style=color:green;>"+splitted[i]+"</h1>"
//     }
// }