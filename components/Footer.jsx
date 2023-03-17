import { Icon, IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from './Footer.module.css'

export default function Footer(){
    const Twitter = "https://twitter.com/HarryCoupeDev";
    const GitHub = "https://github.com/HarryCoupe";
    const LinkedIn = "https://www.linkedin.com/in/hc1295/";

    const handleClick = () =>{

    }
    
    return(
        <footer>
            <a href={GitHub} target="_blank">
                <IconButton size="large" className={styles.buttonColor} >
                    <GitHubIcon fontSize="large"/>
                </IconButton>
            </a>

            <a href={Twitter} target="_blank">
                <IconButton size="large" className={styles.buttonColor}>
                    <TwitterIcon fontSize="large"/>
                </IconButton>
            </a>

            <a href={LinkedIn} target="_blank">
                <IconButton size="large" className={styles.buttonColor}>
                    <LinkedInIcon fontSize="large"/>
                </IconButton>
            </a>
        </footer>
    )
}