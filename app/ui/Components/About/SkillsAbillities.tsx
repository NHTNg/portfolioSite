import styles from "./about.module.css";

export default function SkillsAbillities() {
  return (
    <div className={styles.section} id="skills">
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>VARIOUS SKILLS I'VE LEARNED SO FAR</h1>
          <div className={styles.gallery}>
            <img
              className={styles.gridImg}
              src="/skillimg/Next.png"
              alt="next"
            />
            <img
              className={styles.gridImg}
              src="/skillimg/React.png"
              alt="react"
            />
            <img
              className={styles.gridImg}
              src="/skillimg/Typescript.png"
              alt="ts"
            />
            <img
              className={styles.gridImg}
              src="/skillimg/Mantine.png"
              alt="mantine"
            />
            <img
              className={styles.gridImg}
              src="/skillimg/Figma.png"
              alt="figma"
            />
            <img className={styles.gridImg} src="/skillimg/js.png" alt="js" />
            <img
              className={styles.gridImg}
              src="/skillimg/Html.png"
              alt="html"
            />
            <img className={styles.gridImg} src="/skillimg/Css.png" alt="css" />
          </div>
        </div>
      </div>
    </div>
  );
}
