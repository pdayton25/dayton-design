import React from "react";


const Contact = () => {
    return (
        <form>
            <label>
                Name / Company
                <input type='text' name='name' onChange={()=>{}}></input>
            </label>
            <label>
                Email
                <input type='text' name='name'  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" onChange={()=>{}}></input>
            </label>
            <label>
                Describe your needs
                <input type='text' name='message' onChange={()=>{}}></input>  
            </label>
            <label>
                Budget
                <input type='text' name='budget' onChange={()=>{}}></input>  
            </label>
        </form>
    )
}
export default Contact;