import styles from "./Modal.module.css";
import Program from "./Program";

type ModalProp = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const contents = [
  {
    href: "/",
    srcImg: "/imagesDesktop/windowsupdate.png",
    label: "Windows Update",
    active: false,
  },
  {
    href: "/devcard",
    srcImg: "/imagesDesktop/devcardIcon.png",
    label: "Dev Card",
    active: true,
  },
  {
    href: "/about",
    srcImg: "/imagesDesktop/notepad.png",
    label: "About Me",
    active: true,
  },
  {
    href: "/",
    srcImg: "/imagesDesktop/mydocs.png",
    label: "Favorites",
    active: false,
  },
  {
    href: "/",
    srcImg: "/imagesDesktop/fileOpen.png",
    label: "Documents",
    active: false,
  },
  {
    href: "/",
    srcImg: "/imagesDesktop/setting.png",
    label: "Settings",
    active: false,
  },
  {
    href: "/",
    srcImg: "/imagesDesktop/search.png",
    label: "Find",
    active: false,
  },
  {
    href: "/",
    srcImg: "/imagesDesktop/help.png",
    label: "Help",
    active: false,
  },
  {
    href: "/not-found",
    srcImg: "/imagesDesktop/keys.png",
    label: "Log off",
    active: true,
  },
  {
    href: "/",
    srcImg: "/imagesDesktop/shutdown.png",
    label: "Shut down",
    active: true,
  },
];

export default function ModalPopup({ open, setOpen }: ModalProp) {
  return (
    <div className={open ? styles.modalOpen : styles.modalClose}>
      <div className={styles.side}>
        <span>Windows98</span>
      </div>
      <div className={styles.contentList}>
        {contents.map((item, index) => {
          return <Program setOpen={setOpen} {...item} key={index} />;
        })}
      </div>
    </div>
  );
}
