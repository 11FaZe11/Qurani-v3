"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HijriCalendar } from "@/components/hijri-calendar"
import { HadithDisplay } from "@/components/hadith-display"
import { TasbihCounter } from "@/components/tasbih-counter"
import { useTheme as useAppTheme } from "@/contexts/theme-context"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { Calendar, BookOpen, Bookmark } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { useEffect, useState, Suspense } from "react"

// Client component that safely uses useSearchParams
function TabSelector({ onTabChange }: { onTabChange: (tab: string) => void }) {
  const searchParams = useSearchParams()

  useEffect(() => {
    const tabParam = searchParams.get("tab")
    if (tabParam && ["calendar", "hadith", "tasbih"].includes(tabParam)) {
      onTabChange(tabParam)
    }
  }, [searchParams, onTabChange])

  return null
}

export default function IslamicResourcesPage() {
  const { currentTheme } = useAppTheme()
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"
  const [activeTab, setActiveTab] = useState("calendar")

  return (
    <div
      className={cn(
        "min-h-[calc(100vh-4rem)] py-8 px-4",
        isDark ? "bg-gradient-to-b from-gray-900 to-gray-800" : `bg-gradient-to-b ${currentTheme.gradient}`,
      )}
    >
      <div className="max-w-6xl mx-auto">
        <h1
          className={cn("text-3xl font-bold mb-8 text-center", isDark ? "text-emerald-400" : currentTheme.textPrimary)}
        >
          Islamic Resources
        </h1>

        <Suspense fallback={null}>
          <TabSelector onTabChange={setActiveTab} />
        </Suspense>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-8">
            <TabsTrigger value="calendar" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Calendar</span>
            </TabsTrigger>
            <TabsTrigger value="hadith" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>Hadith</span>
            </TabsTrigger>
            <TabsTrigger value="tasbih" className="flex items-center gap-2">
              <Bookmark className="h-4 w-4" />
              <span>Tasbih</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="calendar" className="flex justify-center">
            <HijriCalendar />
          </TabsContent>

          <TabsContent value="hadith">
            <HadithDisplay />
          </TabsContent>

          <TabsContent value="tasbih">
            <TasbihCounter />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

