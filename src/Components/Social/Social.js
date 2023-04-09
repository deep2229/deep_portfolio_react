import React from 'react'
import "./Social.css"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Social = () => {
    return (
        <div>
            <nav className="social">
                <ul>
                    <li><a href="https://twitter.com/Deep644975501?t=jH3gBrsTmajWBbGyO78Z3Q&s=08" target='_blank'>Twitter <i className="fa fa-twitter"></i></a></li>
                    {/* <li><a href="https://github.com/deep2229">Github <i className="fa fa-github"></i></a></li> */}
                    <li><a href="https://www.linkedin.com/in/deep-thakkar-0587638b/" target='_blank'>Linkedin <i className="fa fa-linkedin"></i></a></li>
                    <li><a href="https://www.facebook.com/deep.thakkar.1422?mibextid=ZbWKwL" target='_blank'>Facebook <i className="fa fa-facebook-square" ></i></a></li>
                    <li><a href="https://wa.me/9033601949" target='_blank'>Whatsapp <i className="fa fa-wechat" ></i></a></li>
                    {/* <li><a href="https://github.com/highflyer910">Github <i className="fa fa-github"></i></a></li> */}
                </ul>
            </nav>
        </div>
    )
}

export default Social