import Image from "next/image";
import styles from "./about.module.css";
export default function Education() {
  return (
    <div id="education" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>EDUCATION</h1>
          <div className={styles.details}>
            <div className={styles.educationDetails}>
              <Image
                alt="myImage"
                src="/assets/tafeWSI.png"
                width={330}
                height={170}
              />
              <h2>
                Diploma Of Software Development (ICA50711) - 2016 South Western
                Sydney Institute
              </h2>
            </div>
            <div className={styles.educationDetails}>
              <Image
                alt="myImage"
                src="/assets/cybersoft.png"
                width={330}
                height={170}
              />
              <h2>
                Certificate Of Completion In FrontEnd Development - 2023
                Cybersoft Academy, HCM
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
