"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useTheme as useAppTheme } from "@/contexts/theme-context"
import { useTheme } from "next-themes"
import Image from "next/image"
import { Clock, Droplets, BookOpen } from "lucide-react"

export default function PrayerGuidePage() {
  const { currentTheme } = useAppTheme()
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"
  const [activeTab, setActiveTab] = useState("ablution")

  // Ablution (Wudu) steps
  const ablutionSteps = [
    {
      id: 1,
      title: "Intention (Niyyah)",
      arabicTitle: "النية",
      description: "Make the intention in your heart to perform wudu for the purpose of prayer.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Washing Hands",
      arabicTitle: "غسل اليدين",
      description: "Wash your hands up to the wrists three times, ensuring between the fingers are washed.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Rinsing the Mouth",
      arabicTitle: "المضمضة",
      description: "Take water into your mouth and rinse it thoroughly three times.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Sniffing Water",
      arabicTitle: "الاستنشاق",
      description: "Sniff water into your nostrils and blow it out three times.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      title: "Washing the Face",
      arabicTitle: "غسل الوجه",
      description: "Wash your face from forehead to chin and ear to ear three times.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      title: "Washing Arms",
      arabicTitle: "غسل اليدين إلى المرفقين",
      description: "Wash your right arm from wrist to elbow three times, then the left arm.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 7,
      title: "Wiping the Head",
      arabicTitle: "مسح الرأس",
      description: "Wipe your wet hands over your head from front to back once.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 8,
      title: "Wiping the Ears",
      arabicTitle: "مسح الأذنين",
      description: "Wipe the inside and outside of your ears with wet fingers once.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 9,
      title: "Washing the Feet",
      arabicTitle: "غسل القدمين",
      description: "Wash your right foot up to the ankle three times, then the left foot.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  // Prayer (Salah) steps
  const prayerSteps = [
    {
      id: 1,
      title: "Standing (Qiyam)",
      arabicTitle: "القيام",
      description:
        "Stand facing the Qibla (direction of the Ka'bah in Mecca). Raise your hands to your ears and say 'Allahu Akbar' (Allah is the Greatest).",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Recitation (Qira'at)",
      arabicTitle: "القراءة",
      description:
        "Place your right hand over your left hand on your chest. Recite Surah Al-Fatihah followed by any other surah or verses from the Quran.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Bowing (Ruku)",
      arabicTitle: "الركوع",
      description:
        "Say 'Allahu Akbar' and bow with your back straight and hands on your knees. Say 'Subhana Rabbiyal Adheem' (Glory be to my Lord, the Most Great) three times.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Standing after Ruku",
      arabicTitle: "الرفع من الركوع",
      description:
        "Rise from bowing and say 'Sami Allahu liman hamidah, Rabbana wa lakal hamd' (Allah hears those who praise Him. Our Lord, praise be to You).",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      title: "Prostration (Sujood)",
      arabicTitle: "السجود",
      description:
        "Say 'Allahu Akbar' and prostrate with your forehead, nose, palms, knees, and toes touching the ground. Say 'Subhana Rabbiyal A'la' (Glory be to my Lord, the Most High) three times.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      title: "Sitting between Prostrations",
      arabicTitle: "الجلسة بين السجدتين",
      description:
        "Rise from prostration saying 'Allahu Akbar' and sit briefly. Say 'Rabbi ighfir li' (My Lord, forgive me).",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 7,
      title: "Second Prostration",
      arabicTitle: "السجدة الثانية",
      description: "Say 'Allahu Akbar' and prostrate again as before, saying 'Subhana Rabbiyal A'la' three times.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 8,
      title: "Sitting for Tashahhud",
      arabicTitle: "التشهد",
      description:
        "After completing the required number of rak'ahs (units of prayer), sit for the final Tashahhud. Recite the Tashahhud and send blessings upon the Prophet Muhammad (peace be upon him).",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 9,
      title: "Concluding the Prayer",
      arabicTitle: "التسليم",
      description:
        "Turn your face to the right saying 'Assalamu alaikum wa rahmatullah' (Peace and mercy of Allah be upon you), then to the left repeating the same words.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  // Prayer times information
  const prayerTimes = [
    { name: "Fajr", arabicName: "الفجر", description: "Dawn prayer, before sunrise" },
    { name: "Dhuhr", arabicName: "الظهر", description: "Midday prayer, after the sun passes its zenith" },
    {
      name: "Asr",
      arabicName: "العصر",
      description:
        "Afternoon prayer, when the shadow of an object is the same length as the object plus its shadow at noon",
    },
    { name: "Maghrib", arabicName: "المغرب", description: "Sunset prayer, after sunset" },
    { name: "Isha", arabicName: "العشاء", description: "Night prayer, after the twilight has disappeared" },
  ]

  return (
    <div
      className={cn(
        "min-h-[calc(100vh-4rem)] py-8 px-4",
        isDark ? "bg-gradient-to-b from-gray-900 to-gray-800" : `bg-gradient-to-b ${currentTheme.gradient}`,
      )}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className={cn("text-3xl font-bold mb-2", isDark ? "text-emerald-400" : currentTheme.textPrimary)}>
            Prayer & Ablution Guide
          </h1>
          <h2 className={cn("text-xl font-semibold", isDark ? "text-emerald-300" : currentTheme.textSecondary)}>
            دليل الصلاة والوضوء
          </h2>
          <p className={cn("mt-4 max-w-3xl mx-auto", isDark ? "text-gray-300" : "text-gray-600")}>
            A comprehensive guide to performing ablution (Wudu) and prayer (Salah) in Islam, with step-by-step
            instructions and visual guidance.
          </p>
        </div>

        <Tabs defaultValue="ablution" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-8">
            <TabsTrigger value="ablution" className="flex items-center gap-2">
              <Droplets className="h-4 w-4" />
              <span>Ablution (الوضوء)</span>
            </TabsTrigger>
            <TabsTrigger value="prayer" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>Prayer (الصلاة)</span>
            </TabsTrigger>
            <TabsTrigger value="times" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Prayer Times</span>
            </TabsTrigger>
          </TabsList>

          {/* Ablution (Wudu) Content */}
          <TabsContent value="ablution">
            <Card className={cn(isDark && "bg-gray-800 border-gray-700")}>
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <h2 className={cn("text-2xl font-bold", isDark ? "text-emerald-400" : currentTheme.textPrimary)}>
                    How to Perform Ablution (Wudu)
                  </h2>
                  <h3 className={cn("text-xl", isDark ? "text-emerald-300" : currentTheme.textSecondary)}>
                    كيفية الوضوء
                  </h3>
                  <p className={cn("mt-2", isDark ? "text-gray-300" : "text-gray-600")}>
                    Ablution (Wudu) is the Islamic procedure for cleansing parts of the body before prayer.
                  </p>
                </div>

                <div className="space-y-8">
                  {ablutionSteps.map((step) => (
                    <div key={step.id} className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="relative h-48 w-full rounded-lg overflow-hidden">
                          <Image
                            src={step.image || "/placeholder.svg"}
                            alt={`Step ${step.id}: ${step.title}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <div className="flex items-center gap-2 mb-2">
                          <div
                            className={cn(
                              "flex items-center justify-center w-8 h-8 rounded-full text-white font-bold",
                              isDark ? "bg-emerald-700" : currentTheme.primary,
                            )}
                          >
                            {step.id}
                          </div>
                          <h3 className={cn("text-xl font-semibold", isDark ? "text-white" : "text-gray-800")}>
                            {step.title}
                          </h3>
                        </div>
                        <h4 className={cn("text-lg mb-2", isDark ? "text-emerald-300" : currentTheme.textSecondary)}>
                          {step.arabicTitle}
                        </h4>
                        <p className={cn(isDark ? "text-gray-300" : "text-gray-600")}>{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 rounded-lg bg-opacity-50 border border-dashed text-center">
                  <h3
                    className={cn("text-lg font-semibold mb-2", isDark ? "text-emerald-400" : currentTheme.textPrimary)}
                  >
                    Important Notes
                  </h3>
                  <ul
                    className={cn(
                      "list-disc list-inside text-left space-y-2",
                      isDark ? "text-gray-300" : "text-gray-600",
                    )}
                  >
                    <li>Wudu should be performed in the correct sequence as shown above.</li>
                    <li>Each part should be washed thoroughly, ensuring water reaches all required areas.</li>
                    <li>
                      Wudu is invalidated by natural discharges, deep sleep, unconsciousness, or touching private parts.
                    </li>
                    <li>
                      If you are unable to use water due to illness or unavailability, you may perform Tayammum (dry
                      ablution).
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Prayer (Salah) Content */}
          <TabsContent value="prayer">
            <Card className={cn(isDark && "bg-gray-800 border-gray-700")}>
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <h2 className={cn("text-2xl font-bold", isDark ? "text-emerald-400" : currentTheme.textPrimary)}>
                    How to Perform Prayer (Salah)
                  </h2>
                  <h3 className={cn("text-xl", isDark ? "text-emerald-300" : currentTheme.textSecondary)}>
                    كيفية الصلاة
                  </h3>
                  <p className={cn("mt-2", isDark ? "text-gray-300" : "text-gray-600")}>
                    Prayer (Salah) is one of the five pillars of Islam, performed five times daily.
                  </p>
                </div>

                <div className="space-y-8">
                  {prayerSteps.map((step) => (
                    <div key={step.id} className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="relative h-48 w-full rounded-lg overflow-hidden">
                          <Image
                            src={step.image || "/placeholder.svg"}
                            alt={`Step ${step.id}: ${step.title}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <div className="flex items-center gap-2 mb-2">
                          <div
                            className={cn(
                              "flex items-center justify-center w-8 h-8 rounded-full text-white font-bold",
                              isDark ? "bg-emerald-700" : currentTheme.primary,
                            )}
                          >
                            {step.id}
                          </div>
                          <h3 className={cn("text-xl font-semibold", isDark ? "text-white" : "text-gray-800")}>
                            {step.title}
                          </h3>
                        </div>
                        <h4 className={cn("text-lg mb-2", isDark ? "text-emerald-300" : currentTheme.textSecondary)}>
                          {step.arabicTitle}
                        </h4>
                        <p className={cn(isDark ? "text-gray-300" : "text-gray-600")}>{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 rounded-lg bg-opacity-50 border border-dashed text-center">
                  <h3
                    className={cn("text-lg font-semibold mb-2", isDark ? "text-emerald-400" : currentTheme.textPrimary)}
                  >
                    Number of Rak'ahs (Units) in Each Prayer
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
                    <div className={cn("p-3 rounded-lg", isDark ? "bg-gray-700" : "bg-emerald-50")}>
                      <h4 className={cn("font-semibold", isDark ? "text-emerald-400" : currentTheme.textPrimary)}>
                        Fajr
                      </h4>
                      <p className={cn(isDark ? "text-gray-300" : "text-gray-600")}>2 Rak'ahs</p>
                    </div>
                    <div className={cn("p-3 rounded-lg", isDark ? "bg-gray-700" : "bg-emerald-50")}>
                      <h4 className={cn("font-semibold", isDark ? "text-emerald-400" : currentTheme.textPrimary)}>
                        Dhuhr
                      </h4>
                      <p className={cn(isDark ? "text-gray-300" : "text-gray-600")}>4 Rak'ahs</p>
                    </div>
                    <div className={cn("p-3 rounded-lg", isDark ? "bg-gray-700" : "bg-emerald-50")}>
                      <h4 className={cn("font-semibold", isDark ? "text-emerald-400" : currentTheme.textPrimary)}>
                        Asr
                      </h4>
                      <p className={cn(isDark ? "text-gray-300" : "text-gray-600")}>4 Rak'ahs</p>
                    </div>
                    <div className={cn("p-3 rounded-lg", isDark ? "bg-gray-700" : "bg-emerald-50")}>
                      <h4 className={cn("font-semibold", isDark ? "text-emerald-400" : currentTheme.textPrimary)}>
                        Maghrib
                      </h4>
                      <p className={cn(isDark ? "text-gray-300" : "text-gray-600")}>3 Rak'ahs</p>
                    </div>
                    <div className={cn("p-3 rounded-lg", isDark ? "bg-gray-700" : "bg-emerald-50")}>
                      <h4 className={cn("font-semibold", isDark ? "text-emerald-400" : currentTheme.textPrimary)}>
                        Isha
                      </h4>
                      <p className={cn(isDark ? "text-gray-300" : "text-gray-600")}>4 Rak'ahs</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Prayer Times Content */}
          <TabsContent value="times">
            <Card className={cn(isDark && "bg-gray-800 border-gray-700")}>
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <h2 className={cn("text-2xl font-bold", isDark ? "text-emerald-400" : currentTheme.textPrimary)}>
                    Prayer Times
                  </h2>
                  <h3 className={cn("text-xl", isDark ? "text-emerald-300" : currentTheme.textSecondary)}>
                    أوقات الصلاة
                  </h3>
                  <p className={cn("mt-2", isDark ? "text-gray-300" : "text-gray-600")}>
                    Muslims are required to pray five times a day at specific times.
                  </p>
                </div>

                <div className="space-y-4">
                  {prayerTimes.map((prayer, index) => (
                    <div
                      key={prayer.name}
                      className={cn(
                        "p-4 rounded-lg flex flex-col md:flex-row md:items-center",
                        isDark ? "bg-gray-700" : "bg-emerald-50",
                      )}
                    >
                      <div className="md:w-1/4 mb-2 md:mb-0">
                        <h3
                          className={cn(
                            "text-xl font-semibold",
                            isDark ? "text-emerald-400" : currentTheme.textPrimary,
                          )}
                        >
                          {prayer.name}
                        </h3>
                        <h4 className={cn("text-lg", isDark ? "text-emerald-300" : currentTheme.textSecondary)}>
                          {prayer.arabicName}
                        </h4>
                      </div>
                      <div className="md:w-3/4">
                        <p className={cn(isDark ? "text-gray-300" : "text-gray-600")}>{prayer.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 rounded-lg bg-opacity-50 border border-dashed">
                  <h3
                    className={cn(
                      "text-lg font-semibold mb-2 text-center",
                      isDark ? "text-emerald-400" : currentTheme.textPrimary,
                    )}
                  >
                    Important Notes About Prayer Times
                  </h3>
                  <ul className={cn("list-disc list-inside space-y-2", isDark ? "text-gray-300" : "text-gray-600")}>
                    <li>Prayer times vary based on geographical location and time of year.</li>
                    <li>It is recommended to pray as soon as the time for prayer enters.</li>
                    <li>
                      There are three times when prayer is forbidden: during sunrise, when the sun is at its zenith, and
                      during sunset.
                    </li>
                    <li>Many mobile apps and websites provide accurate prayer times based on your location.</li>
                    <li>
                      The Adhan (call to prayer) is announced to inform Muslims that the time for prayer has entered.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-8 text-center">
          <p className={cn("text-sm", isDark ? "text-gray-400" : "text-gray-500")}>
            Note: This guide is for educational purposes. For detailed rulings, please consult with knowledgeable
            scholars.
          </p>
        </div>
      </div>
    </div>
  )
}

