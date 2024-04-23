"use client";
import useDragger from "../hooks/useDragger";
import Frame from "../ui/Components/DesktopWindows/AppFrame/Frame";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  useDragger("frame");
  return <Frame id="frame">{children}</Frame>;
}
