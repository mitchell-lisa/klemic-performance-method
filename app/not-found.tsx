import { Cta, Kicker } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center px-5 sm:px-8">
      <div className="mx-auto w-full max-w-6xl py-24">
        <Kicker>404</Kicker>
        <h1 className="display mt-4 text-6xl sm:text-8xl">
          Out of bounds<span className="text-gold">.</span>
        </h1>
        <p className="mt-6 max-w-md text-mist">
          That page doesn&rsquo;t exist. Get back in the game.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Cta href="/">Back to Home</Cta>
          <Cta href="/signup" variant="outline">
            Sign Up
          </Cta>
        </div>
      </div>
    </section>
  );
}
