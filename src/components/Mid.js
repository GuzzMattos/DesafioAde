import klearningicon from '../Assets/main-logo-black.svg'
import rating from '../Assets/Rating.svg'
import styles from './Mid.module.css'
import abstract from '../Assets/Abstract.svg'
import adobe from '../Assets/Adobe.svg'
import airbnb from '../Assets/Airbnb.svg'
import alpaca from '../Assets/Alpaca.svg'
import aprio from '../Assets/Aprio.svg'


function Mid() {
    return (
        <>
            <div className={styles.retangle}>
                <div className={styles.midimgp}>
                    <div className={styles.midimgpL}>
                        <img src={klearningicon} alt="icon klearning" />
                        <p>More than 10,0000 schools trust Klearning</p>
                    </div>
                    <div className={styles.midimgpR}>
                        <img src={rating} alt="rating 5 star" />
                        <p>More than 10,0000 schools trust Klearning</p>
                    </div>
                </div>
                <div className={styles.brands}>
                    <img src={abstract} alt="logo abstract" />
                    <img src={adobe} alt="logo adobe" />
                    <img src={airbnb} alt="logo airbnb" />
                    <img src={alpaca} alt="logo alpaca" />
                    <img src={aprio} alt="logo aprio" />
                </div>
            </div>
        </>
    )
}

export default Mid