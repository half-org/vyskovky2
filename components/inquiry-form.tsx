"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { BRAND, SERVICES } from "@/lib/data";

const schema = z.object({
  name: z.string().min(2, "Zadej prosím jméno"),
  company: z.string().optional(),
  email: z.string().email("Neplatný e-mail"),
  phone: z
    .string()
    .min(9, "Telefon je krátký")
    .regex(/^[+\d\s()]+$/, "Pouze čísla, + a mezery"),
  service: z.string().min(1, "Vyber typ práce"),
  height: z.string().optional(),
  place: z.string().min(2, "Zadej město nebo lokalitu"),
  when: z.string().optional(),
  message: z.string().min(10, "Krátký popis (alespoň 10 znaků)"),
  consent: z.boolean().refine((v) => v === true, {
    message: "Souhlas je povinný",
  }),
});

type FormValues = z.input<typeof schema>;

export function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { service: "", consent: false },
  });

  const onSubmit = async (data: FormValues) => {
    // Stub — in production you'd POST to /api/inquiry or a server action.
    await new Promise((r) => setTimeout(r, 900));
    console.log("Inquiry:", data);
    setSubmitted(true);
    reset();
  };

  return (
    <section id="poptavka" className="relative bg-bg">
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-x-6 gap-y-12 px-6 py-32 md:py-48 lg:gap-x-12 lg:px-16">
        {/* Side column */}
        <div className="col-span-12 lg:col-span-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-rust-bright">
            §06 / Poptávkový list
          </span>
          <h2 className="mt-4 font-display uppercase text-[clamp(40px,5vw,76px)] leading-[0.93]">
            Pošli{" "}
            <span className="font-serif italic font-light text-fg-dim">
              ten
            </span>
            <br />
            formulář.
          </h2>
          <p className="mt-8 max-w-sm font-serif text-[16px] leading-[1.65] text-fg-dim">
            Ozveme se do 24 hodin. Pokud spěchá, raději zavolej —{" "}
            <a
              href={BRAND.phoneHref}
              className="text-fg underline underline-offset-4 decoration-rust-bright hover:text-rust-bright"
            >
              {BRAND.phone}
            </a>
            .
          </p>

          <ul className="mt-12 flex flex-col gap-4 border-l border-line pl-6 font-mono text-[11px] uppercase tracking-[0.22em] text-fg-dim">
            <li>↘ Cenová nabídka do 48 hodin</li>
            <li>↘ Obhlídka místa zdarma</li>
            <li>↘ Pojištění do 50 mil. Kč</li>
            <li>↘ Pracovní okno už za 2 — 3 týdny</li>
          </ul>
        </div>

        {/* Form */}
        <div className="col-span-12 lg:col-span-8 relative">
          <span className="corner-mark corner-tl" />
          <span className="corner-mark corner-tr" />
          <span className="corner-mark corner-bl" />
          <span className="corner-mark corner-br" />

          <div className="absolute right-4 top-4 flex flex-col items-end gap-1 font-mono text-[9px] uppercase tracking-[0.28em] text-mute">
            <span>FORM № 06—2026</span>
            <span>REV. C</span>
          </div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="ok"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="flex min-h-[520px] flex-col items-start justify-center gap-6 border border-line bg-bg-soft p-10"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-rust-bright">
                  Odesláno · {new Date().toISOString().slice(0, 10)}
                </span>
                <h3 className="font-display text-[clamp(36px,5vw,72px)] uppercase leading-[0.92]">
                  Máme to.{" "}
                  <span className="font-serif italic font-light text-fg-dim">
                    Ozveme se.
                  </span>
                </h3>
                <p className="max-w-md font-serif text-[15px] leading-[1.55] text-fg-dim">
                  Poptávka přistála v naší schránce. Do 24 hodin se Ti ozveme
                  e-mailem nebo telefonem.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="border border-line px-4 py-2 font-mono text-[10px] uppercase tracking-[0.24em] hover:border-fg"
                >
                  Poslat další poptávku
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                onSubmit={handleSubmit(onSubmit)}
                className="relative grid grid-cols-2 gap-px overflow-hidden border border-line bg-line"
                noValidate
              >
                <Field
                  label="Jméno"
                  required
                  error={errors.name?.message}
                  className="col-span-2 md:col-span-1"
                >
                  <input
                    {...register("name")}
                    placeholder="Jan Novák"
                    className={inputCls}
                  />
                </Field>
                <Field
                  label="Firma"
                  optional
                  className="col-span-2 md:col-span-1"
                >
                  <input
                    {...register("company")}
                    placeholder="(nepovinné)"
                    className={inputCls}
                  />
                </Field>

                <Field
                  label="E-mail"
                  required
                  error={errors.email?.message}
                  className="col-span-2 md:col-span-1"
                >
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="jan@firma.cz"
                    className={inputCls}
                  />
                </Field>
                <Field
                  label="Telefon"
                  required
                  error={errors.phone?.message}
                  className="col-span-2 md:col-span-1"
                >
                  <input
                    type="tel"
                    {...register("phone")}
                    placeholder="+420 ___ ___ ___"
                    className={inputCls}
                  />
                </Field>

                <Field
                  label="Typ práce"
                  required
                  error={errors.service?.message}
                  className="col-span-2 md:col-span-1"
                >
                  <select
                    {...register("service")}
                    className={cn(inputCls, "appearance-none pr-10")}
                  >
                    <option value="">— Vyber —</option>
                    {SERVICES.map((s) => (
                      <option key={s.no} value={s.name}>
                        {s.no} · {s.name}
                      </option>
                    ))}
                    <option value="jine">Jiné / kombinace</option>
                  </select>
                </Field>
                <Field
                  label="Odhad výšky / rozsahu"
                  optional
                  className="col-span-2 md:col-span-1"
                >
                  <input
                    {...register("height")}
                    placeholder="např. 18 m, 600 m²"
                    className={inputCls}
                  />
                </Field>

                <Field
                  label="Místo realizace"
                  required
                  error={errors.place?.message}
                  className="col-span-2 md:col-span-1"
                >
                  <input
                    {...register("place")}
                    placeholder="Město / adresa"
                    className={inputCls}
                  />
                </Field>
                <Field
                  label="Kdy ideálně"
                  optional
                  className="col-span-2 md:col-span-1"
                >
                  <input
                    {...register("when")}
                    placeholder="např. červen 2026"
                    className={inputCls}
                  />
                </Field>

                <Field
                  label="Popis zakázky"
                  required
                  error={errors.message?.message}
                  className="col-span-2"
                >
                  <textarea
                    rows={5}
                    {...register("message")}
                    placeholder="Co potřebuješ udělat? Klidně rovnou s odkazem na fotky."
                    className={cn(inputCls, "resize-none min-h-[140px]")}
                  />
                </Field>

                <div className="col-span-2 flex flex-col gap-6 bg-bg p-8 md:p-10">
                  <label className="flex items-start gap-3 font-serif text-[13.5px] leading-[1.5] text-fg-dim">
                    <input
                      type="checkbox"
                      {...register("consent")}
                      className="mt-1 h-4 w-4 flex-none appearance-none border border-line bg-bg checked:border-fg checked:bg-rust-bright"
                    />
                    <span>
                      Souhlasím se zpracováním osobních údajů pro účely
                      vyhotovení cenové nabídky. Data nikam neposíláme.
                    </span>
                  </label>
                  {errors.consent && (
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-rust-bright">
                      ! {errors.consent.message}
                    </span>
                  )}

                  <div className="flex items-center justify-between gap-4 border-t border-line pt-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
                      Odpověď do 24 hodin
                    </span>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={cn(
                        "group inline-flex items-center gap-3 border border-fg bg-fg px-6 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-bg transition-all",
                        "hover:bg-rust-bright hover:border-rust-bright hover:text-fg",
                        isSubmitting && "opacity-60",
                      )}
                    >
                      <span>
                        {isSubmitting ? "Odesílám…" : "Odeslat poptávku"}
                      </span>
                      <span className="inline-block transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full bg-bg px-6 py-5 font-serif text-[15.5px] text-fg placeholder:text-mute outline-none focus:bg-bg-soft transition-colors caret-rust-bright";

function Field({
  label,
  required,
  optional,
  error,
  children,
  className,
}: {
  label: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative flex flex-col bg-bg", className)}>
      <div className="flex items-center justify-between px-6 pt-4">
        <label className="font-mono text-[10px] uppercase tracking-[0.24em] text-fg-dim">
          {label}
          {required && <span className="ml-1 text-rust-bright">*</span>}
        </label>
        {optional && (
          <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-mute">
            nepov.
          </span>
        )}
        {error && (
          <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-rust-bright">
            ! {error}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}
