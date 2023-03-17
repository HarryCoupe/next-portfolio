import Link from "next/link";
import styles from './CustomLink.module.css'
import { useState } from "react";

export default function CustomLink(props){
    const { page, selectedPage, changeSelected, href} = props;

    const selectedText = () =>{
        changeSelected(page);
    }

    return(
            <Link href={(href==='/home') ? '/' : props.href} passHref legacyBehavior>
                <a onClick={selectedText} className={styles.links}>
                    {selectedPage === page ? "-" : page}
                </a> 
            </Link>
    )
}