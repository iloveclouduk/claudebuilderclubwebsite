import { Error404 } from "@/components/ui/pixelated-404-not-found"

export default function NotFound() {
  return (
    <Error404
      postcardImage="/claude-builder-club-postcard.svg"
      postcardAlt="Claude Builder Club Postcard"
      curvedTextTop="Claude Builder Club"
      curvedTextBottom="Northumbria University"
      heading="(404) Looks like the page you're looking for got lost somewhere."
      subtext="But hey — even the most advanced AI sometimes takes an unexpected path."
      backButtonLabel="Back to Home"
      backButtonHref="/"
    />
  )
}