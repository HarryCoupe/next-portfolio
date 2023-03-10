import { Icon, IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from './Footer.module.css'

export default function Footer(){
    return(
        <footer>
            <IconButton size="large" className={styles.buttonColor} >
                <GitHubIcon fontSize="large"/>
            </IconButton>
            <IconButton size="large" className={styles.buttonColor}>
                <TwitterIcon fontSize="large"/>
            </IconButton>
            <IconButton size="large" className={styles.buttonColor}>
                <LinkedInIcon fontSize="large"/>
            </IconButton>
        </footer>
    )
}