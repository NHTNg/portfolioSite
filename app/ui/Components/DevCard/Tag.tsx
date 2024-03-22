import styles from "./DevCard.module.css";

const Tag = ({ tag }: { tag: string }) => {
  return <span className={styles.tag}>#{tag}</span>;
};

export default Tag;
