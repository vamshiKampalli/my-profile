import { BlobProvider, StyleSheet } from '@react-pdf/renderer';

import {replaceYearofExperience} from '../../util';
import styles from './about.module.css';
import Resume from '../resume';

const AboutMe = ({profileData}) => {

    // Style fo download CV button. Because it is inside BlobProvider.
    const pdfStyles = StyleSheet.create({
        downloadLink: {
            background: '#FF9000',
            color: '#FFF',
            textTransform: 'uppercase',
            padding: '18px 36px',
            borderRadius: '30px',
            textDecoration: 'none',
            margin: '16px 0',
            display: 'inline-block'
        },
        link: {
            textDecoration: 'none',
        }
    });

    return (<>
        <h2 className={styles.about_me}>About Me</h2>
        <section className={styles.about_me_container}>
            <div className={styles.contact_info}>
                <div className={styles.contact_fields}>
                    <div className={styles.contact_field}>
                        <span className={styles.label}>Full Name: </span>
                        <span  className={styles.value}>{profileData.name}</span>
                    </div>
                    <div className={styles.contact_field}>
                        <span className={styles.label}> Phone: </span>
                        <span  className={styles.value}>{profileData.mobile}</span> 
                    </div>
                    <div className={styles.contact_field}>
                        <span className={styles.label}>Email: </span>
                        <span  className={styles.value}>{profileData.email}</span>
                    </div>
                    <div className={styles.contact_field}>
                        <span className={styles.label}>Location: </span>
                        <span  className={styles.value}>{profileData.currentLocation}</span>
                    </div>
                </div>
            </div>
            <div className={styles.brief_intro}>
                <h2>Hello There!</h2>
                <p>{replaceYearofExperience(profileData.summary, profileData.dateOfJoiningIT)}</p>
                <p>
                    <BlobProvider document={<Resume profileData={profileData}/>}>
                        {({ url, blob }) => (
                        <a href={url} target="_blank" rel="noreferrer" style={pdfStyles.link}>
                            <span style={pdfStyles.downloadLink}>Download CV</span>
                        </a>
                        )}
                    </BlobProvider>
                </p>
            </div>
        </section>
    </>)
}

export default AboutMe;