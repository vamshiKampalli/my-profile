import { FaLinkedin, FaMobileAlt } from 'react-icons/fa';
import { MdOutlineContactMail } from 'react-icons/md';
import { GrContactInfo } from 'react-icons/gr';
import { CgWebsite } from 'react-icons/cg';
import { useSelector } from 'react-redux';
import { BlobProvider, StyleSheet } from '@react-pdf/renderer';

import vamPng from './vam.png';
import styles from './home.module.css';
import {getTotalExperience} from '../../util';
import Resume from '../resume';

function Home() {
  const profileData = useSelector((state) => state.profile.data);

  // Style fo download CV button. Because it is inside BlobProvider.
  const pdfStyles = StyleSheet.create({
    downloadLink: {
      fontSize: 16,
      width: 120,
      padding: 5,
      background: '#fff',
      margin: '10px auto',
      borderRadius: 5,
      boxShadow: '0 0 10px #9e9fa5',
      color: '#000',
      borderBottom: '2px solid #506bf2'
    },
    link: {
      textDecoration: 'none',
    }
  });

  return (
    <>
      <div className={styles.container}>
        <div className={styles.top_container}>
          <div className={styles.img}>
            <svg
              fill="#fff"
              viewBox="60 0 300 350"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#fff"
            >
              <mask id="myMask">
                <path
                  transform="translate(-25.6, -25.6), scale(13)"
                  d="M16,28.16078191064298C19.77806540407412,28.257196759095947,23.265226910282255,26.60541331875971,25.894271714641818,23.890418394798722C28.940259032533277,20.744850052710532,32.359440731676266,16.748325022027444,31.11690748273453,12.549664514106217C29.905302559464026,8.455514319838606,24.694878092705082,7.736123583731422,20.68203017069486,6.277664171154905C17.397036675515338,5.083741606330381,13.907916388483518,3.6007313602089606,10.77866245917405,5.157780877748529C7.683344072607544,6.6979447983857625,6.565703891940979,10.30049901215235,5.814777804613376,13.675289498689285C5.0707556281069115,17.01905262720488,4.749032890573651,20.598899940118653,6.719337857239598,23.40108109005977C8.82323061509933,26.39325170695073,12.343397476064915,28.067466750503677,16,28.16078191064298"
                  fill="#fff"
                  strokeWidth="0"
                ></path>
              </mask>
              <image href={vamPng} mask="url(#myMask)"></image>
            </svg>
          </div>
          <div className={styles.intro}>
            <p>
              Hello... I'm <span>{profileData.name},</span> a web application
              developer with an experience of{' '}
              {getTotalExperience(new Date(profileData.dateOfJoiningIT))}+ years
              in IT industry. I'm from Hyderabad, India.
              {/* <a
                className={styles.download_link}
                href="https://vamshikampalli.github.io/Vamshi%20Kampalli%20Web%20Developer%209%2B%20Years.pdf"
                download="VamshiKampalli_CV"
                target="_blank"
                rel="noreferrer"
              >
                Download CV
              </a> */}
              <BlobProvider document={<Resume profileData={profileData}/>}>
                {({ url, blob }) => (
                  <a href={url} target="_blank" rel="noreferrer" style={pdfStyles.link}>
                    <span style={pdfStyles.downloadLink}>Download CV</span>
                  </a>
                )}
              </BlobProvider>
            </p>
          </div>
        </div>
        <div className={styles.bottom_container}>
          <div className={styles.skills_card}>
            <h4 className={styles.title}>
              <CgWebsite size={32} />
              Skills
            </h4>
            <ul className={styles.skills_list}>
              {profileData.skills?.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className={styles.contact_card}>
            <h4 className={styles.title}>
              <GrContactInfo size={32} />
              Contact
            </h4>
            <ul className={styles.contact_list}>
              <li>
                <FaMobileAlt />
                <a href={`callto:${profileData.mobile}`}>
                  {profileData.mobile}
                </a>
              </li>
              <li>
                <MdOutlineContactMail />
                <a
                  href={`mailto:${profileData.email}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {profileData.email}
                </a>
              </li>
              <li>
                <FaLinkedin style={{ color: '#0b66c2' }} />
                <a
                  href={profileData.linkedInUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {profileData.linkedInDisplayUrl}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
