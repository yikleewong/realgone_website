import '../Styles/QnA.css';
import React, { useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'
import Faq from "react-faq-component"
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';

function QnA() {

   const [qnaList, setqnaList] = useState([])
   const [rows, setRowsOption] = useState(null)

    useEffect(() => {
        if(rows) {
            setTimeout(() =>{
                rows[0].expand()
            }, 10000);
            setTimeout(() => {
                rows[0].close();
            }, 20000);
            setTimeout(() => {
                rows[0].scrollIntoView();
                // rows[0].scrollIntoView(true);
            }, 30000);
        }
    }, [rows] )

    useEffect(() => {
        Axios.get('http://localhost:3001/qna/get').then((response) => {
            console.log(response)
            setqnaList(response.data)
        })
    },[])

    const styles = {
        bgColor: '#f7f0f5',
        rowTitleColor: "brown",
        rowTitleTextSize: 'larger',
        rowContentTextSize: 'medium',
        rowContentPaddingTop: '10px',
        rowContentPaddingBottom: '10px',
        rowContentPaddingLeft: '50px',
        rowContentPaddingRight: '150px',
        // rowContentColor: 'grey',
    }
    
    const config = {
        animate: true,
        // arrowIcon: "V",
        tabFocus: false
    }


    return (
        
        <div className='QnA'>
            <div className='title'>
                <h1>Q&A</h1>
                <p>find your answer below, if not, please <Link to='/Contact' className='linkcontact'>contact us</Link></p>
            </div>
            {qnaList.map(value => (
                <div className='FAQ-box' key={value.id}>
                    <Faq 
                        data={{
                            title: "",
                            rows:[
                                {
                                    title: value.Questions,
                                    content: value.Answers,
                                },
                            ],

                        }}
                        styles={styles}
                        config={config}
                        getRowOptions={setRowsOption}
                    />
                </div>
            ))}
                    
                   
            
        </div>
        
    )
}

export default QnA
