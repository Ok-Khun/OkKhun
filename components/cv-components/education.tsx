import styles from "../../styles/Cv.module.css";

type EducationProps = {
    yearOfGraduation: number;
    degree: string;
    schoolName: string;
  };
  
  const Education = ({
    yearOfGraduation,
    degree,
    schoolName,
  }: EducationProps) => {
    return (
      <div className={styles.edu}>
        <div className={styles.eduYear}>
          <span>{yearOfGraduation}</span>
        </div>
        <div className={styles.eduDivider}>
          <span>-</span>
        </div>
        <div className={styles.eduSchoolMajor}>
          <span>{degree}</span>
          <span style={
            {
              fontWeight: "bold"
            }
          }>{schoolName}</span>
        </div>
      </div>
    );
  };

export default Education