import Frame from "../ui/Components/DesktopWindows/AppFrame/Frame";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <Frame>{children}</Frame>;
}
