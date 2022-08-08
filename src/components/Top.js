import klearningicon from '../Assets/main-logo.svg'
import new2 from '../Assets/new2.svg'
import mulhersegurando from '../Assets/mulhersegurando.svg'
import charts from '../Assets/charts.svg'
import playicon from '../Assets/iconplay.svg'

import styles from './Top.module.css'

function Top() {
    return (
        <section className={styles.top}>
            <header className={styles.header}>
                <img className={styles.icone} src={klearningicon} alt="klearning icone" />
                <nav>
                    <ul className={styles.nav}>
                        <li>
                            <a className={styles.item} href="">Home</a>
                        </li>
                        <li>
                            <a className={styles.item} href="">Programms</a>
                        </li>
                        <li>
                            <a className={styles.item} href="">Solutions</a>
                        </li>
                        <li>
                            <a className={styles.item} href="">Courses</a>
                        </li>
                        <li>
                            <a className={styles.item} href="">Partners</a>
                        </li>
                        <li>
                            <a className={styles.item} href="">Contacts</a>
                        </li>
                    </ul>
                </nav>
                <div className={styles.cadastro}>
                    <button className={styles.login} href="">Log in</button>
                    <button className={styles.signin} href="">Sign in</button>
                </div>
            </header>
            <div className={styles.banner}>
                <div className={styles.bannerleft}>
                    <div className={styles.newimg}>
                        <img className={styles.new2img} src={new2} alt="new com circulo" />
                        <span>Becoming a new programm certifed</span>
                    </div>
                    <h1 className={styles.h1banner}>A New Different Way <br></br>
                        to Improve Your Skill</h1>
                    <p className={styles.pbanner}>Learning is a Global training Provider based across the UK test <br></br> specializes in accredited and bsbespoke csources</p>
                    <div className={styles.buttonsbannerleft}>
                        <button>Get Started</button>
                        <img src={playicon} alt="botao de start" />
                        <span>Learn more</span>
                    </div>
                </div>
                <div className={styles.bannerright}>

                    <div className={styles.bannerrightF}>
                        <img src={mulhersegurando} alt="mulher segurando livros" />
                    </div>
                    <div className={styles.bannerrightC}>
                        <img src={charts} alt="graficos" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Top