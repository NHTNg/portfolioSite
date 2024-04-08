import Clock from "../Clock/Clock";
import styles from "./Taskbar.module.css";

export default function Taskbar() {
  return (
    <div className={styles.taskbar}>
      <div>
        <button className={styles.startbutton}></button>
      </div>
      <Clock />
    </div>
  );
}
