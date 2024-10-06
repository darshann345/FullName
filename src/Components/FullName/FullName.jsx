import React,{useState} from 'react';
const FullName = () =>{
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');  


    const handleSubmit = (e) => {
        e.preventDefault();
        setFullName(`${firstName} ${lastName}`.trim());
    }
    return(
        <>
            <form onSubmit = {handleSubmit}>
                <h1>Full Name Display</h1>
                <br/>
                <label htmlFor = "firstName">First Name :</label>
                <input type = "text" placeholder="" name ="First Name" id = "firstName" onChange ={(e) => setFirstName(e.target.value)} required/>
                <br/>                
                <label htmlFor = "lastName">Last Name :</label>
                <input type = "text" placeholder="" name ="Last Name" id = "lastName" onChange = {(e) => setLastName(e.target.value)} required/>
                <br/>
                <button type = "submit">Submit</button>
                {fullName && <p>Full Name : {fullName}</p>}

            </form>
        </>
    )
}
export default FullName;