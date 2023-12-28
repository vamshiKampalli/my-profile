import { useSelector } from 'react-redux';
import styles from './projects.module.css';

function Projects() {
  const profileData = useSelector((state) => state.profile.data);

  return (
    <div className={styles.timeline}>
      {profileData.experience?.map((experience, index) => (
        <div
          key={experience.organization}
          className={`${styles.container} ${
            index % 2 ? styles.right : styles.left
          }`}
        >
          <div className={styles.content}>
            <h4>
              {experience.organization},{experience.location}. [
              {new Date(experience.startDate).toLocaleString('default', {
                month: 'short',
              })}{' '}
              {new Date(experience.startDate).getFullYear()}-
              {experience.endDate
                ? new Date(experience.endDate).toLocaleString('default', {
                    month: 'short',
                  })
                : 'present'}{' '}
              {experience.endDate
                ? new Date(experience.endDate).getFullYear()
                : ''}
              ]
            </h4>
            <h4>{experience.title}</h4>
            <hr />
            <h4>Projects</h4>
            {experience.projects?.map((project) => (
              <div key={project.name} className={styles.project_detail}>
                <h4>{project.name}</h4>
                <p>{project.description}</p>
                <p>
                  <span style={{ fontWeight: 'bold' }}>Tech stack: </span>
                  {project.techstack.join(', ')}
                </p>
                {experience.projects.length > 1 && <hr />}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
