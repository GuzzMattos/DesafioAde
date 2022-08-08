import styles from './Footer.module.css'
function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <h1>1200+<br></br>Cources</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer<br></br> adipiscing elit nibh euismod tincidunt ut<br></br> laoreet dolore</p>
            </div>
            <div className={styles.linhavertical}></div>
            <div>
                <h1>10K+<br></br>Lessons</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer<br></br> adipiscing elit, elit nibh euismo.</p>
            </div>
            <div className={styles.linhavertical}></div>
            <div>
                <h1>Qualified<br></br>Teachers</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer<br></br> adipiscing elit.</p>
            </div>
        </footer>
    )
}

export default Footer