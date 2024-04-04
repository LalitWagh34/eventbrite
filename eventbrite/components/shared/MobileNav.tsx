import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { NavItems } from "./NavItems"

  

export const MobileNav = () => {
  return (
    <nav className="md:hidden">
        <Sheet>
            <SheetTrigger className="align-middle">
                <Image src={"/assets/icons/menu.svg"}
                    alt="menu"
                    height={24}
                    width={24}
                    className="cursor-pointer"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
              <Image
                src={"logo.svg"}
                alt="logo"
                width={128}
                height={38}
              />
              <Separator className="border border-red-500"/>
              <NavItems/>
            </SheetContent>
        </Sheet>

    </nav>
  )
}
