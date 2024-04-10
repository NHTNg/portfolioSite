import styles from "./about.module.css";
import Image from "next/image";

const skills = [
  {
    src: "/skillimg/Next.png",
    alt: "Next",
  },
  {
    src: "/skillimg/React.png",
    alt: "React",
  },
  {
    src: "/skillimg/Typescript.png",
    alt: "Typescript",
  },
  {
    src: "/skillimg/Mantine.png",
    alt: "Mantine",
  },
  {
    src: "/skillimg/Figma.png",
    alt: "Figma",
  },
  {
    src: "/skillimg/js.png",
    alt: "js",
  },
  {
    src: "/skillimg/Html.png",
    alt: "next",
  },
  {
    src: "/skillimg/Css.png",
    alt: "Css",
  },
];

export default function SkillsAbillities() {
  return (
    <div className={styles.section} id="skills">
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>VARIOUS SKILLS I HAVE LEARNED SO FAR</h1>
          <div className={styles.gallery}>
            {skills.map((skill, index) => (
              <Image
                key={index}
                src={skill.src}
                alt={skill.alt}
                className={styles.gridImg}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
