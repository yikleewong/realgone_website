import '../Styles/Footer.css';
import {React , useState }from 'react'
import InstagramIcon from "@material-ui/icons/Instagram";
import CenterModal from './centerModal'


function Footer() {

    const [showModal, setShowModal] = useState(false);


    return (
        <div className='footer'>
            <a href='https://www.instagram.com/realgone.hk/' target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
            <p id='terms' onClick={()=>setShowModal(true)}>Terms and conditions</p>
            <CenterModal show={showModal} onHide={()=>setShowModal(false)} />
            <p id='cright'>&copy; 2022 RealGone.hk</p>
        </div>
    )
}

export default Footer