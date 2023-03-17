import Link from "next/link";
import styles from './Header.module.css'

export default function Header(){
    return(
            
                <header>
                    <h1>
                        <Link href='/' className={styles.homeLink}>
                            Harry Coupe
                        </Link>
                    </h1>
                    <p>Web Developer & Design Enthusiast</p>
                    
                </header>
            
    )
}