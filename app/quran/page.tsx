"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import { ChevronLeft, ChevronRight, Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme as useAppTheme } from "@/contexts/theme-context"
import { SurahDisplay } from "@/components/surah-display"
import type { QuranSurah } from "@/lib/quran-text"
import { surahList } from "@/lib/surah-list"
import { useTheme } from "next-themes"

export default function QuranPage() {
  const [currentSurah, setCurrentSurah] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")
  const [allSurahs, setAllSurahs] = useState<Omit<QuranSurah, "verses">[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { currentTheme } = useAppTheme()
  const searchParams = useSearchParams()
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  // Initialize from URL parameter if available
  useEffect(() => {
    const surahParam = searchParams.get("surah")
    if (surahParam) {
      const surahNumber = Number.parseInt(surahParam, 10)
      if (!isNaN(surahNumber) && surahNumber >= 1 && surahNumber <= 114) {
        setCurrentSurah(surahNumber)
      }
    }
  }, [searchParams])

  // Load all surah info
  useEffect(() => {
    async function loadAllSurahs() {
      try {
        setIsLoading(true)
        // Use the local surahList instead of fetching
        setAllSurahs(surahList)
      } catch (error) {
        console.error("Failed to load surah list:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadAllSurahs()
  }, [])

  // Filter surahs based on search query
  const filteredSurahs = allSurahs.filter(
    (surah) =>
      surah.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      surah.englishName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      surah.number.toString().includes(searchQuery),
  )

  const goToPreviousSurah = () => {
    if (currentSurah > 1) {
      setCurrentSurah(currentSurah - 1)
      window.scrollTo(0, 0)
    }
  }

  const goToNextSurah = () => {
    if (currentSurah < 114) {
      setCurrentSurah(currentSurah + 1)
      window.scrollTo(0, 0)
    }
  }

  const handleSurahSelect = (surahNumber: number) => {
    setCurrentSurah(surahNumber)
    window.scrollTo(0, 0)
  }

  return (
    <div
      className={cn(
        "min-h-[calc(100vh-4rem)]",
        isDark ? "bg-gradient-to-b from-gray-900 to-gray-800" : `bg-gradient-to-b ${currentTheme.gradient}`,
      )}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar with surah list */}
          <div className="w-full md:w-80 md:flex-shrink-0">
            <div
              className={cn(
                "sticky top-20 rounded-lg border shadow-sm",
                isDark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200",
              )}
            >
              <div className={cn("p-4 border-b", isDark ? "border-gray-800" : "border-gray-200")}>
                <h2 className={cn("text-xl font-bold mb-4", isDark ? "text-emerald-400" : currentTheme.textPrimary)}>
                  Surahs
                </h2>
                <div className="relative">
                  <Search
                    className={cn("absolute left-2.5 top-2.5 h-4 w-4", isDark ? "text-gray-400" : "text-gray-500")}
                  />
                  <Input
                    type="search"
                    placeholder="Search surah..."
                    className={cn("pl-8", isDark && "bg-gray-800 border-gray-700 text-white")}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <ScrollArea className="h-[calc(100vh-16rem)]">
                <div className="p-2">
                  {isLoading
                    ? Array.from({ length: 10 }).map((_, i) => (
                        <Skeleton key={i} className={cn("h-16 w-full mb-2", isDark && "bg-gray-800")} />
                      ))
                    : filteredSurahs.map((surah) => (
                        <button
                          key={surah.number}
                          onClick={() => handleSurahSelect(surah.number)}
                          className={cn(
                            "w-full text-left p-3 rounded-md mb-1 transition-colors",
                            currentSurah === surah.number
                              ? isDark
                                ? "bg-gray-800"
                                : cn(currentTheme.accent)
                              : isDark
                                ? "hover:bg-gray-800"
                                : "hover:bg-gray-50",
                          )}
                        >
                          <div className="flex items-center">
                            <div
                              className={cn(
                                "w-8 h-8 rounded-full flex items-center justify-center font-medium mr-3",
                                isDark
                                  ? "bg-emerald-900 text-emerald-400"
                                  : cn(currentTheme.primaryLight, currentTheme.textPrimary),
                              )}
                            >
                              {surah.number}
                            </div>
                            <div className="flex-1">
                              <div className={cn("font-medium", isDark ? "text-white" : "text-gray-800")}>
                                {surah.englishName}
                              </div>
                              <div className={cn("text-sm", isDark ? "text-gray-400" : "text-gray-500")}>
                                {surah.name} • {surah.numberOfAyahs} verses
                              </div>
                            </div>
                          </div>
                        </button>
                      ))}
                </div>
              </ScrollArea>
            </div>
          </div>

          {/* Main content with Quran text */}
          <div className="flex-1">
            <div
              className={cn(
                "rounded-lg border p-6 shadow-sm",
                isDark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200",
              )}
            >
              <SurahDisplay surahNumber={currentSurah} />

              {/* Navigation buttons */}
              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={goToPreviousSurah}
                  disabled={currentSurah === 1}
                  className={cn("flex items-center gap-2", isDark && "border-gray-700 hover:bg-gray-800 text-white")}
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous Surah
                </Button>

                <Button
                  variant="outline"
                  onClick={goToNextSurah}
                  disabled={currentSurah === 114}
                  className={cn("flex items-center gap-2", isDark && "border-gray-700 hover:bg-gray-800 text-white")}
                >
                  Next Surah
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

