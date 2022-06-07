import '../Styles/Contact.css';
import React, {useState} from 'react'
import Axios from 'axios'

function Contact() {

    const [conMethod, setConMethod] = useState('')
    const [content, setContent] = useState('')



    const submitEnquiry = () => {
        Axios.post('http://localhost:3001/enquiry/post', {
            conMethod: conMethod, content : content
        });
        alert("successfully inserted");
        document.getElementById("method").value ="";
        document.getElementById("inquiry").value ="";
    }

    // const cancelform =() => {
        
    // }

    return (
        <div className='contact'>
            <div className='title'>
                <h1>Contact Us</h1>
                <p>For any enquiry, please fill the info box below</p>
            </div>
            <div className='infobox'>

                <label>聯絡方式 :</label>
                <input id="method" className='contact_method' type='text' onChange={(e)=>{
                    setConMethod(e.target.value)
                }} placeholder=' eg. Whatsapp 12345678/ IG @realgone.hk'/>

                <label>內容 :</label>
                <textarea id="inquiry" className='content' type='text' onChange={(e)=>{
                    setContent(e.target.value)
                }} placeholder=' 請輸入查詢的內容' rows={5} cols={50}/>

                <button className='submit' type='submit' onClick={()=>{
                    submitEnquiry();
                }}>Submit</button>
            </div>
        </div>
    )
}

export default Contact