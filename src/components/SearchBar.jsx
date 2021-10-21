
import { useState } from "react";
import style from "./style.module.css";
import { BiSearchAlt } from "react-icons/bi";
import PropTypes from "prop-types";


export function SearchBar ({handleSubmit}){

    const [text, setText] = useState("");
    const [placeholder, setPlaceholder]=useState("What to search?")

    const handleInput = (event) => {        
           setText(event.target.value)        
     }
    
const onSubmit=(event) => {
                event.preventDefault();
                if (text.trim() !== "") { 
                handleSubmit(text.trim());
                    setPlaceholder(text);
                    setText("")
                } else {
                    setPlaceholder("What to search?")
                }
            }

    return<>
        <div className={style.searchCont}>
            <form onSubmit={onSubmit}>
                
                
                <input
                
                className={style.input}
                type="text"
                value={text}
                placeholder={placeholder}
                onChange={handleInput }
                />
                <div className={style.iconCont}                  
                    onClick={onSubmit}>                                   
                    <BiSearchAlt className={style.icon}/>
                </div>
            </form>
        </div>
    </>
};

SearchBar.propTypes = {
    searchRequest:PropTypes.func
}



