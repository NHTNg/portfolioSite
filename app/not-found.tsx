import Notification from "./ui/Components/DesktopWindows/NotificationFrame/Notification";
import Image from "next/image";
export default function NotFound() {
  return (
    <Notification>
      <Image
        src="/imagesDesktop/warning.png"
        alt="warning"
        width={80}
        height={80}
      />
      <h3>The site is under development, sorry for the inconvenient</h3>
    </Notification>
  );
}
