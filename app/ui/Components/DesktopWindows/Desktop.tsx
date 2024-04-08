import styles from "./Desktop.module.css";
import Icon from "./DesktopIcon/DesktopIcon";
import Taskbar from "./Taskbar/Taskbar";

export default function WindowsDesktop({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.desktop}>
      <div className={styles.container}>
        <Icon
          href=""
          iconTitle="My Computer"
          iconImg="/imagesDesktop/mycomputer.png"
        />
        <Icon
          href=""
          iconTitle="Internet Explore"
          iconImg="/imagesDesktop/ie.png"
        />
        <Icon
          href="/about"
          iconTitle="About Me"
          iconImg="/imagesDesktop/document.png"
        />
        <Icon href="" iconTitle="My Works" iconImg="/imagesDesktop/docs.png" />
        <Icon
          href=""
          iconTitle="Recycle Bin"
          iconImg="/imagesDesktop/bin.png"
        />
        <Icon href="/devcard" iconTitle="Devcard.exe" iconImg="/imagesDesktop/devcardIcon.png"/>
      </div>
      {children}
      <Taskbar />
    </div>
  );
}
