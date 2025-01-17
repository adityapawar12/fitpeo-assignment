import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { BellDot, Mail, SearchIcon, Settings } from "lucide-react";

function TopNav() {
  const iconsStyles =
    "text-neutral-400 bg-zinc-700 rounded-full h-8 w-8 p-2 hidden md:block";

  return (
    <div className="h-16 w-full bg-[#1f2029] flex flex-row justify-between items-center p-4">
      <div className="w-8 h-16 flex md:hidden justify-center items-center">
        <img
          className="rounded-full h-8 w-8"
          src="/dashboard/main-logo.jpg"
          alt="Logo"
        />
      </div>
      <div
        className={cn(
          "flex h-10 items-center rounded-md border-input pl-3 text-sm bg-[#292b2f] border border-gray-700 outline-none ring-offset-gray-700 focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2"
        )}
      >
        <SearchIcon className="h-[16px] w-[16px] text-white" />
        <Input
          placeholder="Search"
          className="w-full max-2xs:max-w-40 p-2 text-white placeholder:text-white focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-transparent border-0 focus-visible:ring-offset-0 focus-visible:ring-0"
        />
      </div>
      <div className="flex flex-row justify-end gap-2">
        <Mail className={cn(iconsStyles)} />

        <Settings className={cn(iconsStyles)} />

        <BellDot className={cn(iconsStyles)} />

        <img
          className="rounded-full h-8 w-8 ml-2"
          src="/dashboard/main-profile-image.jpg"
        />
      </div>
    </div>
  );
}

export default TopNav;
