import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Error404Props {
  videoSrc?: string
  heading?: string
  subtext?: string
  backButtonLabel?: string
  backButtonHref?: string
}

export function Error404({
  videoSrc = "/dancing-claude.mp4",
  heading = "(404) Looks like the page you're looking for got lost somewhere.",
  subtext = "But hey — even the most advanced AI sometimes takes an unexpected path.",
  backButtonLabel = "Back to Home",
  backButtonHref = "/",
}: Error404Props) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&display=swap" rel="stylesheet" />
      <div className="flex flex-col items-center">
        <div className="relative mb-16">
          <div className="relative z-10">
            <div className="relative overflow-hidden rounded-lg shadow-2xl rotate-[4deg] hover:rotate-0 transition-transform duration-300">
              <video
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="w-[360px] h-[220px] object-cover"
              />
            </div>
          </div>
        </div>

        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-doto mb-6 text-balance leading-tight">{heading}</h1>
          <p className="text-muted-foreground text-base md:text-lg mb-10 font-sans">{subtext}</p>
          <Button asChild className="rounded-lg px-6 py-3 font-sans">
            <Link href={backButtonHref} className="flex items-center gap-2">
              {backButtonLabel}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
