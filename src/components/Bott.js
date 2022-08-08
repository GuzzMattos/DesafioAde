import styles from './Bott.module.css'
import mulherentregando from '../Assets/mulherentregando.svg'
import iconfilm from '../Assets/iconfilm.svg'
import iconmidia from '../Assets/iconvideo.svg'
import iconcontact from '../Assets/iconcontact.svg'

function Bott() {
    return (
        <>
            <div className={styles.bot}>
                <div className={styles.botleft} >
                    <img src={mulherentregando} alt="" />
                </div>
                <div className={styles.botright}>
                    <h1>What Kind of Cources Klearning<br></br> Offer for Platform</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,<br></br> sed diam nonummy nibh euismod tincidunt ut laoreet<br></br> dolore magna aliquam erat volutpat. Ut wisi enivm ad</p>
                    <div className={styles.services}>
                        <div className={styles.servicestop}>
                            <img src={iconfilm} alt="icon film" />
                            <span>1200+ Courses</span>
                            <img src={iconmidia} alt="icon midia" />
                            <span>200+ Free vids</span>
                        </div>
                        <div className={styles.servicestop}>
                            <img src={iconcontact} alt="icon contact" />
                            <span >10K+ Lessons</span>
                            <img className={styles.icontactR} src={iconcontact} alt="icon contact" />
                            <span>Qualifed Teachers</span>
                        </div>
                        <button>Explore Cources</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bott