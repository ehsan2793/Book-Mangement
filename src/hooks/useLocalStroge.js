import {useState,useEffect} from "react";
const useLocalStroge = (key, initialValue) => {
    const [value, setValue] = useState(()=>{
        try {
            const localValue = localStorage.getItem(key)
            return localValue ? JSON.parse(localValue): initialValue
        }catch (error) {
            return initialValue;
        }
    });
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[value,setValue])
    return [value,setValue]
}


export default useLocalStroge