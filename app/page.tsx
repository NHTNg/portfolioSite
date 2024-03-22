import styles from "./page.module.css";
import DeveloperCard from "./ui/Components/DevCard";
// import Brands from "./ui/Components/MasonryLayout";

export default function Home() {
  return (
    <div className={styles.main}>
      <DeveloperCard />
      {/* <Brands /> */}
    </div>
  );
}
