import { cn } from "@/lib/utils";
import {
  ChartColumnStacked,
  ClipboardCheck,
  House,
  LogOut,
  ShoppingBag,
  Wallet,
} from "lucide-react";
import { useState } from "react";

function SideNav() {
  const iconContainerStyles = "flex justify-center items-center w-full h-14";
  const iconStyles =
    "text-zinc-500 hover:text-indigo-400 border-l-4 border-[#1f2029] hover:border-indigo-400 h-full w-full p-4";
  const iconStylesActive =
    "text-zinc-500 text-indigo-400 border-l-4 border-[#1f2029] border-indigo-400 h-full w-full p-4";

  const [isHovering, setIsHovering] = useState<boolean>(false);

  return (
    <div className="h-screen w-16 bg-[#1f2029] flex flex-col justify-between">
      <div>
        <div className="w-full h-16 flex justify-center items-center">
          <img
            className="rounded-full h-8 w-8 ml-2"
            src="/dashboard/main-logo.jpg"
            alt="Logo"
          />
        </div>
        <div className={cn(iconContainerStyles)}>
          <House className={cn(isHovering ? iconStyles : iconStylesActive)} />
        </div>
        <div
          className={cn(iconContainerStyles)}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <ChartColumnStacked
            className={cn(iconStyles)}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          />
        </div>
        <div className={cn(iconContainerStyles)}>
          <ClipboardCheck
            className={cn(iconStyles)}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          />
        </div>
        <div className={cn(iconContainerStyles)}>
          <Wallet
            className={cn(iconStyles)}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          />
        </div>
        <div className={cn(iconContainerStyles)}>
          <ShoppingBag
            className={cn(iconStyles)}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          />
        </div>
      </div>

      <div className={cn(iconContainerStyles)}>
        <LogOut
          className={cn(iconStyles)}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        />
      </div>
    </div>
  );
}

export default SideNav;
