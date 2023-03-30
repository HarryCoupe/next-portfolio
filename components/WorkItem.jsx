import { Button } from "@mui/material";
import Image from "next/image";
import styles from './WorkItem.module.css'

export default function WorkItem(props){
    const { inputObject } = props;
    const { img, title, info, gitLink, alt } = inputObject;

    return(
        <div className={styles.workItem}>

            <h1>{title}</h1>
            <p>            
            <Image
                className={styles.workImageLeft}
                src={img}
                alt={alt}
            />
            {info}
            </p>

            <Button 
                className={styles.workButton}
                target="_blank" 
                variant="outlined" 
                href={gitLink}
                size="large">
            Github Link
            </Button>
        </div>
    )
}