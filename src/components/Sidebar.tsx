"use client"
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import Link from "next/link";
import { ArchiveRestore, ArchiveX, BadgeDollarSign, BadgeEuro, BadgeJapaneseYen, DollarSign, Euro, JapaneseYen, LogOut, Package, PanelBottom, PlusSquare, ShoppingBag, Users, Wallet } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "./ui/tooltip";
import { useRouter } from "next/router";

export function Sidebar() {
  return (
    <div className="flex w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex flex-col">
        <nav className=" flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            <Link href={"/"} className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full">
              <Wallet className="w-4 h-4" />
              <span className="sr-only">Dashboard Avatar</span>
            </Link>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={"/americas"} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground">
                  <BadgeDollarSign color="#006400" className="w-5 h-5" />
                  <span className="sr-only">Filtrar Por Americas</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Filtrar Por Americas</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={"/europa"} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground">
                  <BadgeEuro color="#006400" className="w-5 h-5" />
                  <span className="sr-only">Filtrar Por Europa</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Filtrar Por Europa</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={"/asia"} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground">
                  <BadgeJapaneseYen color="#006400" className="w-5 h-5" />
                  <span className="sr-only">Filtrar Por Ásia</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Filtrar Por Ásia</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>

      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 bg-[#013025]">
        <header>
          <Sheet>
            <SheetTrigger asChild>
              <Button size={"icon"} variant={"outline"} className="sm:hidden">
                <PanelBottom className="w-5 h-5" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side={"left"} className="sm:max-w-x">
              <nav className="grid gap-6 text-lg font-medium">
                <Link href="" className="flex h-10 w-10 bg-primary rounded-full text-lg items-center justify-center text-primary-foreground md:text-base" prefetch={false}>
                  <Package className="h-5 w-5" />
                  <span className="sr-only">Home</span>
                </Link>
                <Link href={"/americas"} className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" prefetch={false}>
                  <ArchiveRestore className="h-5 w-5" />
                  Filtrar Por Americas
                </Link>
                <Link href={"/europa"} className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" prefetch={false}>
                  <ArchiveX className="h-5 w-5" />
                  Filtrar Por Europa
                </Link>
                <Link href={"/asia"} className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" prefetch={false}>
                  <Users className="h-5 w-5" />
                  Filtrar Por Ásia
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </header>
      </div>
    </div>
  );
}
