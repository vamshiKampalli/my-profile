import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useSelector } from 'react-redux';

import styles from './my_intro.module.css';
import AboutMe from "../about";

const MyIntro = () => {
    const profileData = useSelector((state) => state.profile.data);

    return  (<>
        <header className={styles.header}>
            <div className={styles.overlay}></div>
            <div className={styles.headerContainer}>
                <div className={styles.thumbnail}></div>
                <h1 className={styles.name}>{profileData.name}</h1>
                <h3 className={styles.job}>Web Developer</h3>
                <div className={styles.social_links}>
                    <a href={profileData.linkedInUrl} rel="noreferrer" target="_blank">
                        <FaLinkedinIn />
                    </a>
                    <a href={profileData.gitHubUrl} rel="noreferrer" target="_blank">
                        <FaGithub />
                    </a>
                </div>
            </div>
        </header>
        <AboutMe profileData={profileData}/>
    </>);
}

export default MyIntro;