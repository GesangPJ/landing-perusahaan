// section hero untuk beranda

import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroBeranda() {
  return (
    <section className="relative overflow-hidden min-h-screen">
      <div className="container mx-auto px-4 py-20 sm:py-14 lg:py-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm text-muted-foreground shadow-sm">
              <span className="mr-2 size-2 rounded-full bg-primary" />
              Solusi untuk bisnis Anda
            </div>

            <h1 className="text-4xl font-bold leading-relaxed sm:text-5xl lg:text-6xl">
              Membangun Solusi Yang Lebih Baik
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Kami membantu bisnis anda berkembang melalui solusi teknologi,
              desain profesional, dan layanan yang dirancang sesuai kebutuhan.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/kontak"className="inline-flex h-9 items-center justify-center rounded-full 
              bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-xs transition-colors hover:bg-primary/70">
              Mulai Sekarang
              </Link>

              <Link href="/kontak"className="inline-flex h-9 items-center justify-center rounded-full
              bg-secondary border-1 px-4 py-2 text-sm font-medium text-primary shadow-xs transition-colors hover:bg-secondary/70">
                  <Play className="mr-2 size-4" />
                  Lihat Portfolio
              </Link>
            </div>

            {/* Small information */}
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t pt-6 text-sm text-muted-foreground">
              <div>
                <p className="text-2xl font-semibold text-foreground">
                  15+
                </p>
                <p>Klien Puas</p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-foreground">
                  5+
                </p>
                <p>Tahun operasional</p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-foreground">
                  2 Juta
                </p>
                <p>Unit produk terjual</p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-2xl border bg-muted/30 shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex size-20 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
                    <span className="text-3xl font-bold">P</span>
                  </div>

                  <p className="text-xl font-semibold">
                    Perusahaan
                  </p>

                  <p className="mt-2 text-sm text-muted-foreground">
                    Your visual / product showcase
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -right-10 -top-10 size-40 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 size-40 rounded-full bg-primary/10 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

