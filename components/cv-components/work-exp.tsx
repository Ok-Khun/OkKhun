import styles from "../../styles/Cv.module.css";

type WorkExpProps = {
    companyName: string;
    duration: string;
    location: string;
    exp: WorkExpComponentProps[];
  };
  
  type WorkExpComponentProps = {
    position: string;
    duration: string;
    description: string | string[];
    projects: {
      project: string,
      link: string
    }[]
  };
  
  const WorkExpComponent = ({
    position,
    duration,
    description,
    projects
  }: WorkExpComponentProps) => {
    return (
      <div className={styles.exp}>
        <span className={styles.workExpSpan} style={{fontWeight:"bold"}}>{position}</span>
        <span className={styles.workExpSpan}>{duration}</span>
        <span className={styles.workExpSpan}>Description:</span>
        {description instanceof Array ? (
          <ul>
            {description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        ) : (
          description
        )}
        {
          projects instanceof Array && projects.length >= 1 &&
          <>
          <span className={styles.workExpSpan}>Completed Projects:</span>
          <ul>
          {
            projects.map((item, i) => <li key={i} className={styles.projectLink}>
              <a href={item.link} target="_blank">{item.project}</a>
            </li>)
          }
          </ul>
          </>  
        }
      </div>
    );
  };
  
  const WorkExp = ({ companyName, duration, location, exp }: WorkExpProps) => {
    return (
      <div className={styles.workExp}>
        <h3>{companyName}</h3>
        <span className={styles.workExpSpan}>{duration}</span>
            <span className={styles.workExpSpan}>{location}</span>
            <hr />
        {exp.map(
              (
                { position, duration, description, projects }: WorkExpComponentProps,
                i: number
              ) => (
                <WorkExpComponent
                  key={i}
                  position={position}
                  duration={duration}
                  description={description}
                  projects={projects}
                />
              )
            )}
      </div>
    );
  };

export default WorkExp