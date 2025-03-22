"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { BookOpen, BookText, Book, Bookmark } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme as useAppTheme } from "@/contexts/theme-context"
import { useTheme } from "next-themes"

export function HeaderNavLinks({
  isMobile = false,
  onClickMobile,
}: { isMobile?: boolean; onClickMobile?: () => void }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { currentTheme } = useAppTheme()
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  const isActive = (path: string) => pathname === path

  // Desktop navigation links
  if (!isMobile) {
    return (
      <>
        <Link
          href="/"
          className={cn(
            "text-sm font-medium transition-colors",
            isActive("/")
              ? isDark
                ? "text-emerald-400"
                : currentTheme.textSecondary
              : isDark
                ? "text-gray-300"
                : "text-gray-600",
            isDark ? "hover:text-emerald-300" : `hover:${currentTheme.textSecondary}`,
          )}
        >
          Home
        </Link>
        <Link
          href="/quran"
          className={cn(
            "text-sm font-medium transition-colors flex items-center",
            isActive("/quran")
              ? isDark
                ? "text-emerald-400"
                : currentTheme.textSecondary
              : isDark
                ? "text-gray-300"
                : "text-gray-600",
            isDark ? "hover:text-emerald-300" : `hover:${currentTheme.textSecondary}`,
          )}
        >
          <Book className="h-4 w-4 mr-1" />
          Quran
        </Link>
        <Link
          href="/islamic-resources"
          className={cn(
            "text-sm font-medium transition-colors flex items-center",
            isActive("/islamic-resources")
              ? isDark
                ? "text-emerald-400"
                : currentTheme.textSecondary
              : isDark
                ? "text-gray-300"
                : "text-gray-600",
            isDark ? "hover:text-emerald-300" : `hover:${currentTheme.textSecondary}`,
          )}
        >
          <BookText className="h-4 w-4 mr-1" />
          Resources
        </Link>
        <Link
          href="/prayer-guide"
          className={cn(
            "text-sm font-medium transition-colors flex items-center",
            isActive("/prayer-guide")
              ? isDark
                ? "text-emerald-400"
                : currentTheme.textSecondary
              : isDark
                ? "text-gray-300"
                : "text-gray-600",
            isDark ? "hover:text-emerald-300" : `hover:${currentTheme.textSecondary}`,
          )}
        >
          <BookOpen className="h-4 w-4 mr-1" />
          Prayer Guide
        </Link>
        <Link
          href="/islamic-resources?tab=tasbih"
          className={cn(
            "text-sm font-medium transition-colors flex items-center",
            isActive("/islamic-resources") && searchParams.get("tab") === "tasbih"
              ? isDark
                ? "text-emerald-400"
                : currentTheme.textSecondary
              : isDark
                ? "text-gray-300"
                : "text-gray-600",
            isDark ? "hover:text-emerald-300" : `hover:${currentTheme.textSecondary}`,
          )}
        >
          <Bookmark className="h-4 w-4 mr-1" />
          Tasbih
        </Link>
        <Link
          href="/about"
          className={cn(
            "text-sm font-medium transition-colors",
            isActive("/about")
              ? isDark
                ? "text-emerald-400"
                : currentTheme.textSecondary
              : isDark
                ? "text-gray-300"
                : "text-gray-600",
            isDark ? "hover:text-emerald-300" : `hover:${currentTheme.textSecondary}`,
          )}
        >
          About
        </Link>
      </>
    )
  }

  // Mobile navigation links
  return (
    <div className="container mx-auto px-4 py-3 space-y-3">
      <Link
        href="/"
        className={cn(
          "block py-2 px-3 rounded-md font-medium",
          isActive("/")
            ? isDark
              ? "bg-gray-800 text-emerald-400"
              : cn(currentTheme.accent, currentTheme.textSecondary)
            : isDark
              ? "text-gray-300 hover:bg-gray-800"
              : "text-gray-600 hover:bg-gray-50",
        )}
        onClick={onClickMobile}
      >
        Home
      </Link>
      <Link
        href="/quran"
        className={cn(
          "flex items-center py-2 px-3 rounded-md font-medium",
          isActive("/quran")
            ? isDark
              ? "bg-gray-800 text-emerald-400"
              : cn(currentTheme.accent, currentTheme.textSecondary)
            : isDark
              ? "text-gray-300 hover:bg-gray-800"
              : "text-gray-600 hover:bg-gray-50",
        )}
        onClick={onClickMobile}
      >
        <Book className="h-4 w-4 mr-2" />
        Quran
      </Link>
      <Link
        href="/islamic-resources"
        className={cn(
          "flex items-center py-2 px-3 rounded-md font-medium",
          isActive("/islamic-resources") && !searchParams.get("tab")
            ? isDark
              ? "bg-gray-800 text-emerald-400"
              : cn(currentTheme.accent, currentTheme.textSecondary)
            : isDark
              ? "text-gray-300 hover:bg-gray-800"
              : "text-gray-600 hover:bg-gray-50",
        )}
        onClick={onClickMobile}
      >
        <BookText className="h-4 w-4 mr-2" />
        Islamic Resources
      </Link>
      <Link
        href="/prayer-guide"
        className={cn(
          "flex items-center py-2 px-3 rounded-md font-medium",
          isActive("/prayer-guide")
            ? isDark
              ? "bg-gray-800 text-emerald-400"
              : cn(currentTheme.accent, currentTheme.textSecondary)
            : isDark
              ? "text-gray-300 hover:bg-gray-800"
              : "text-gray-600 hover:bg-gray-50",
        )}
        onClick={onClickMobile}
      >
        <BookOpen className="h-4 w-4 mr-2" />
        Prayer Guide
      </Link>
      <Link
        href="/islamic-resources?tab=tasbih"
        className={cn(
          "flex items-center py-2 px-3 rounded-md font-medium",
          isActive("/islamic-resources") && searchParams.get("tab") === "tasbih"
            ? isDark
              ? "bg-gray-800 text-emerald-400"
              : cn(currentTheme.accent, currentTheme.textSecondary)
            : isDark
              ? "text-gray-300 hover:bg-gray-800"
              : "text-gray-600 hover:bg-gray-50",
        )}
        onClick={onClickMobile}
      >
        <Bookmark className="h-4 w-4 mr-2" />
        Tasbih
      </Link>
      <Link
        href="/about"
        className={cn(
          "block py-2 px-3 rounded-md font-medium",
          isActive("/about")
            ? isDark
              ? "bg-gray-800 text-emerald-400"
              : cn(currentTheme.accent, currentTheme.textSecondary)
            : isDark
              ? "text-gray-300 hover:bg-gray-800"
              : "text-gray-600 hover:bg-gray-50",
        )}
        onClick={onClickMobile}
      >
        About
      </Link>
    </div>
  )
}

