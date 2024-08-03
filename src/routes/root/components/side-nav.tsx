import { cn } from "@/lib/utils";
import {
  ChartColumnStacked,
  ClipboardCheck,
  House,
  LogOut,
  ShoppingBag,
  Signature,
  Wallet,
} from "lucide-react";

function SideNav() {
  const iconContainerStyles = "flex justify-center items-center w-full h-14";
  const iconStyles =
    "text-zinc-500 hover:text-indigo-400 border-l-4 border-neutral-800 hover:border-indigo-400 h-full w-full p-4";

  return (
    <div className="h-screen w-16 bg-neutral-800 flex flex-col justify-between">
      <div>
        <p className="w-full h-16 flex justify-center items-center">
          <Signature className="text-indigo-400" />
        </p>
        <div className={cn(iconContainerStyles)}>
          <House className={cn(iconStyles)} />
        </div>
        <div className={cn(iconContainerStyles)}>
          <ChartColumnStacked className={cn(iconStyles)} />
        </div>
        <div className={cn(iconContainerStyles)}>
          <ClipboardCheck className={cn(iconStyles)} />
        </div>
        <div className={cn(iconContainerStyles)}>
          <Wallet className={cn(iconStyles)} />
        </div>
        <div className={cn(iconContainerStyles)}>
          <ShoppingBag className={cn(iconStyles)} />
        </div>
      </div>

      <div className={cn(iconContainerStyles)}>
        <LogOut className={cn(iconStyles)} />
      </div>
    </div>
  );
}

export default SideNav;
