import { GithubLogo , LinkedinLogo} from "phosphor-react";

import './footer.css'
function Footer(){
    return(
        <div className="footer ">
            <p> Smon Ftwi</p>
            <a href="https://github.com/SmonFtwi" 
            style={{ textDecoration: 'none', color: 'inherit' }} 
            target="_blank" 
            rel="noopener noreferrer">
            <GithubLogo size={32} /> </a>
            <a href="https://www.linkedin.com/in/smon-ftwi-59b44720a/" 
            style={{ textDecoration: 'none', color: 'inherit' }}
            target="_blank" 
            rel="noopener noreferrer">
            <LinkedinLogo size={32} /></a>
        </div>
    )
}

export default Footer;