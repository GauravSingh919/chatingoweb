import Image from "next/image";
import Link from "next/link";
import { Bolt, Leaf, Home, Lightbulb } from "lucide-react";

export const metadata = {
  title: "About Us - Chatingo",
};

export default function AboutPage() {
  return (
    <main className="bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[520px] w-full">
        <Image
          src="/images/SmileMan.jpeg"
          alt="Friends enjoying a drink"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-end px-6 pb-12">
          <div>
            <h1 className="AvantGarde-Bold text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl">
              About us
            </h1>
            <p className="mt-4 max-w-3xl text-sm text-white/80 md:text-base">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto.
            </p>
          </div>
        </div>
        {/* Curve effect */}
        <div className="absolute -bottom-5 left-0 right-0 z-10 mx-6 h-10 rounded-t-[28px] bg-[#0a0a0a]" />
      </section>

      {/* Content container */}
      <section className="relative z-20 mx-auto max-w-6xl px-6">
        {/* Mission & Vision */}
        <div className="rounded-3xl border border-white/10 bg-[#0b0b0b]/90 p-6 sm:p-10 md:p-12">
          <h2 className="AvantGarde-Bold text-2xl sm:text-3xl md:text-4xl">
            Mission & Vision
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
            ipsa quae ab illo inventore veritatis et quasi architecto.
          </p>

          {/* Our Values */}
          <h3 className="AvantGarde-Bold mt-10 text-2xl sm:text-3xl">Our Values</h3>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
            ipsa quae ab illo inventore veritatis et quasi architecto.
          </p>

          {/* Our Story */}
          <h3 className="AvantGarde-Bold mt-12 text-2xl sm:text-3xl">Our Story</h3>

          {/* Timeline */}
          <div className="mt-6">
            <div className="relative mb-8 flex items-center gap-3">
              <Bolt className="h-5 w-5 text-lime-400" />
              <div className="h-px flex-1 border-t border-dashed border-white/30" />
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Lightbulb className="h-4 w-4 text-lime-400" />
                  Why We Began
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  In a world full of communication tools, we noticed people were feeling more
                  distant than ever. Chatingo was our answer to that disconnect.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Leaf className="h-4 w-4 text-lime-400" />
                  How It Began
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  From a small garage in Silicon Valley, our founders set out to create a
                  platform that prioritizes real human connection over noise and distraction.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Home className="h-4 w-4 text-lime-400" />
                  Where We Are Now
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Today, Chatingo connects millions globally—staying true to our mission of
                  turning everyday chats into meaningful moments.
                </p>
              </div>
            </div>
          </div>

          {/* Team */}
          <h3 className="AvantGarde-Bold mt-12 text-2xl sm:text-3xl">Meet Our Team</h3>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Card 1 */}
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a]">
              <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
                <div className="relative h-72 sm:h-full">
                  <Image
                    src="/images/Man.jpeg"
                    alt="Team member"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-6xl leading-none text-white/10">“</div>
                  <h4 className="mt-2 font-semibold">Emma Johansson - Director, NordStudio</h4>
                  <p className="mt-3 text-sm text-white/70">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                    praesentium voluptatum deleniti atque corrupti quos dolores et quas.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a]">
              <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
                <div className="p-6 order-2 sm:order-1">
                  <div className="text-6xl leading-none text-white/10">“</div>
                  <h4 className="mt-2 font-semibold">Emma Johansson - Director, NordStudio</h4>
                  <p className="mt-3 text-sm text-white/70">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                    praesentium voluptatum deleniti atque corrupti quos dolores et quas.
                  </p>
                </div>
                <div className="relative order-1 h-72 sm:order-2 sm:h-full">
                  <Image
                    src="/images/Girl.png"
                    alt="Team member"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a]">
              <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
                <div className="relative h-72 sm:h-full">
                  <Image
                    src="/images/PhoneMan.png"
                    alt="Team member"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-6xl leading-none text-white/10">“</div>
                  <h4 className="mt-2 font-semibold">Emma Johansson - Director, NordStudio</h4>
                  <p className="mt-3 text-sm text-white/70">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                    praesentium voluptatum deleniti atque corrupti quos dolores et quas.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a]">
              <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
                <div className="p-6 order-2 sm:order-1">
                  <div className="text-6xl leading-none text-white/10">“</div>
                  <h4 className="mt-2 font-semibold">Emma Johansson - Director, NordStudio</h4>
                  <p className="mt-3 text-sm text-white/70">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                    praesentium voluptatum deleniti atque corrupti quos dolores et quas.
                  </p>
                </div>
                <div className="relative order-1 h-72 sm:order-2 sm:h-full">
                  <Image
                    src="/images/Lady.png"
                    alt="Team member"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer-like section inside page */}
        <div className="mt-12 border-t border-white/10 py-8 text-white/70">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-0 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-2 text-white">
                <Bolt className="h-5 w-5 text-lime-400" />
                <span className="font-semibold">Chatingo</span>
              </div>
              <p className="mt-2 max-w-xl text-sm">
                Create. Grow. Chat. Sell. We make sales simple—turn your DMs into cash.
              </p>
              <nav className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                <Link href="#" className="hover:text-white">
                  About
                </Link>
                <Link href="#" className="hover:text-white">
                  Contact Us
                </Link>
                <Link href="#" className="hover:text-white">
                  Security
                </Link>
                <Link href="#" className="hover:text-white">
                  Privacy
                </Link>
                <Link href="#" className="hover:text-white">
                  Terms
                </Link>
              </nav>
            </div>
            <div className="flex w-full items-center gap-4 sm:w-auto">
              <Link
                href="#"
                className="rounded-full bg-lime-400 px-5 py-2 text-sm font-semibold text-black hover:bg-lime-300"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="mx-auto mt-6 max-w-6xl px-0 text-xs text-white/50">
            © 2077 Chatingo. All rights reserved.
          </div>
        </div>
      </section>
    </main>
  );
}