import styles from "../styles/Cv.module.css"
import Image from "next/image";

// component
import ContactInfoItem from "./cv-components/contact-info-item";
import WorkExp from "./cv-components/work-exp";
import Education from "./cv-components/education";
// assets
import PhIcon from "../public/assets/icons/phone.svg";
import EmailIcon from "../public/assets/icons/email.svg";
import LinkIcon from "../public/assets/icons/link.svg";
import ProfilePic from "../public/assets/Ok-Khun.png";

const Cv = () => {
    return (
        <div>
        {/* top */}
        <div className={styles.topSection}>
          {/* Profile Pic */}
          <div className={styles.profilePic}>
            <Image
              className={styles.aweSomeDev}
              src={ProfilePic}
              width="200"
              height="200"
              alt="😎 Awesome Guy"
            />
          </div>
          {/* Basic Info */}
          <div className={styles.basicInfo}>
            <h1>Khun Okkar</h1>
            <p>Engineer (Civil/Construction)</p>
          </div>
          {/* Contact Info */}
          <div className={styles.contactInfoSection}>
            <ul className={styles.contactInfo}>
              <ContactInfoItem
                icon={PhIcon}
                iconAlt="Phone:"
                content="+95 9 964181564"
              />
              <ContactInfoItem
                icon={EmailIcon}
                iconAlt="Email:"
                content="okkar.khuno08@gmail.com"
              />
              <ContactInfoItem
                icon={LinkIcon}
                iconAlt="Link:"
                content={
                  <a href="https://t.ly/eC-l" target="_blank">
                    LinkedIn
                  </a>
                }
              />
            </ul>
          </div>
        </div>
        {/* About me */}
        <div className={styles.cvContent}>
          <h2>About Me</h2>
          <p
            style={{
              paddingLeft: "15px",
              paddingRight: "15px",
            }}
          >
            I am an experienced engineer with a proven track record in delivering
            successful construction projects. I am a team player who is able to
            work well under pressure, and I have a high level of commitment to my
            work. I am confident in my ability to deliver projects on time and to
            a high standard, and I am looking for an opportunity to use my skills
            and experience to contribute to the success of your company.
          </p>
        </div>
        {/* Work Exp */}
        <div className={styles.cvContent}>
          <h2>Expereince</h2>
          <WorkExp
            companyName="KTC GROUP"
            duration="May 2013 - October 2020"
            location="Singapore"
            exp={[
              {
                position: "Site Engineer",
                duration: "Aug 2016 - October 2020",
                description: [
                  "Prepare, review and submit method of statements, risk assessments, and safe work procedures to clients and authorities.",
                  "Liaison with clients, consultants, suppliers, contractors, and authorities.",
                  "Submission of monthly reports, progress claims, and vos to clients.",
                  "Ensure that projects are completed on time.",
                  "Ensure safety and provide necessary training to the workforce during the execution of the projects.",
                  "Project management, coordination, and supervision.",
                  "Oversee multiple subcontract projects across Singapore.",
                  "Carry out site inspections and quality control.",
                ],
                projects: [
                  "Contract T202: Woodlands North Station And Tunnels For  Thomson-East Coast Line",
                  "The Woodleigh Residences",
                  "Mixed Development At Orchard Boulevard",
                ],
              },
              {
                position: "Assistant Engineer",
                duration: "May 2013 - Aug 2016",
                description: [
                  "Assist managers in project planning and updating master programme using Microsoft project.",
                  "Preparation of monthly reports, daily reports, and recording of site activities.",
                  "Submission of shop drawings to clients and consultants.",
                  "Supervise construction activities and carry out site inspections.",
                  "Liaison with clients, consultants, and authorities.",
                ],
                projects: [
                  "Contract T2115: Advance Earthworks At Mandai Depot",
                  "Contract RD258: Wenya Bus Depot",
                ],
              },
            ]}
          />
          <WorkExp
            companyName="WOH HUP PTE LTD"
            duration="January 2013 - April 2013"
            location="Singapore"
            exp={[
              {
                position: "Junior Engineer",
                duration: "",
                description: [
                  "Carry out site inspections and supervision of construction activities.",
                  "Liaison with consultants.",
                  "Progress reporting to site managers and project managers.",
                ],
                projects: ["Project: D'leedon condominium"],
              },
            ]}
          />
        </div>
        {/* Education */}
        <div className={styles.cvContent}>
          <h2>Education Background</h2>
          <Education 
            yearOfGraduation={2016}
            degree="Bachelor of Science Construction Project Management"
            schoolName="Heriot-Watt University"
          />
          <Education 
          yearOfGraduation={2013}
          degree="Diploma in Construction Engineering"
          schoolName="BCA Academy"
          />
        </div>
        {/* CERTIFICATIONS */}
        <div className={styles.cvContent}>
          <h2>Certificaitons</h2>
          <div className={styles.certificates}>
            <ul>
              <li>BCSS (Building Construction Supervisor Safety Certificate)</li>
              <li>Develop A Risk Management Implementation Plan Certificate</li>
              <li>Confined Space Supervisor Certificate</li>
              <li>Managing Work At Height Certificate</li>
              <li>Construction Safety For Project Managers Certificate</li>
              <li>Internal Audit (QEHS) on Quality ISO9001, Env 14001 & Health & Safety OHSAS 18001 Certificate</li>
            </ul>
          </div>
        </div>
        {/* SKILLS */}
        <div className={styles.cvContent}>
          <h2>Skills</h2>
          <div className={styles.certificates}>
            <ul>
              <li>Construction Management</li>
              <li>Project Management</li>
              <li>Microsoft Office</li>
              <li>Microsoft Project</li>
              <li>AutoCAD</li>
              <li>BIM (structure),</li>
              <li>Python</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>GoLang</li>
              <li>React</li>
              <li>Node.js</li>
              <li>SQL</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
        <div className={styles.cvContent}>
          <h2>Language</h2>
          <div className={styles.certificates}>
            <ul>
              <li>English</li>
              <li>Burmese</li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Cv