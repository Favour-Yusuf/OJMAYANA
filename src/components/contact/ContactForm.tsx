"use client"

import { useState } from "react"
import ServiceSelect from "./ServiceSelect"
import RateCardDropdown from "../RateCardDropdown"

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    // FormSubmit config (no login)
    formData.append("_captcha", "false")
    formData.append("_subject", "New Project Enquiry — OJMAYANA Studios")

    try {
      const res = await fetch(
        "https://formsubmit.co/ojmayana61@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      )

      if (!res.ok) throw new Error("Submission failed")

      setSuccess(true)
      form.reset()
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-black text-white px-6 md:px-20 py-32 relative">
      <div className="max-w-4xl mx-auto">
        <p className="mb-10 text-xs uppercase tracking-widest text-white/50">
          Project enquiry
        </p>

        <form
          className="space-y-12"
          onSubmit={handleSubmit}
        >
          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-10">
            <Input label="Name" name="name" />
            <Input label="Email" name="email" type="email" />
          </div>

          {/* Phone & Service */}
          <div className="grid md:grid-cols-2 gap-10">
            <Input label="Phone" name="phone" />
            <ServiceSelect />
          </div>

          {/* Date / Time */}
          <div className="grid md:grid-cols-2 gap-10">
  <Input
    label="Preferred Date"
    name="preferred_date"
    type="date"
  />
  <Input
    label="Preferred Time"
    name="preferred_time"
    type="time"
  />
</div>

          <input type="text" name="_honey" style={{ display: "none" }} />


          {/* Message */}
          <Textarea
            label="Tell us about your project"
            name="message"
            rows={6}
          />

          {/* Actions */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pt-6">
            <button
              type="submit"
              disabled={loading}
              className="border border-white px-10 py-4 text-sm uppercase tracking-widest transition hover:bg-white hover:text-black disabled:opacity-50"
            >
              {loading ? "Sending…" : "Submit enquiry"}
            </button>

            {/* Rate cards */}
            <div className="text-xs uppercase tracking-widest text-white/60">
              <RateCardDropdown />
            </div>
          </div>

          {error && (
            <p className="text-sm text-red-400">
              {error}
            </p>
          )}
        </form>
      </div>

      {/* Success Modal */}
      {success && (
        <SuccessModal onClose={() => setSuccess(false)} />
      )}
    </section>
  )
}



/* ----------------- */
/* Form Elements     */
/* ----------------- */

function Input({
  label,
  name,
  type = "text",
  placeholder = "",
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
}) {
  return (
    <div className="space-y-2">
      <label className="block text-xs uppercase tracking-widest text-white/50">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required
        className="w-full bg-transparent border-b border-white/30 py-3 text-white outline-none focus:border-white [color-scheme:dark]"
      />
    </div>
  )
}

function Textarea({
  label,
  name,
  rows,
}: {
  label: string
  name: string
  rows: number
}) {
  return (
    <div className="space-y-2">
      <label className="block text-xs uppercase tracking-widest text-white/50">
        {label}
      </label>
      <textarea
        name={name}
        rows={rows}
        required
        className="w-full bg-transparent border-b border-white/30 py-3 text-white outline-none focus:border-white resize-none"
      />
    </div>
  )
}




function SuccessModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur">
      <div className="max-w-md w-full bg-black border border-white/10 px-8 py-10 text-center">

        <p className="mb-4 text-xs uppercase tracking-widest text-white/50">
          Enquiry sent
        </p>

        <h3 className="mb-6 text-2xl font-light">
          Thank you for reaching out.
        </h3>

        <p className="mb-10 text-white/70 leading-relaxed">
          We’ve received your message and will get back to you shortly.
        </p>

        <button
          onClick={onClose}
          className="border border-white px-8 py-3 text-xs uppercase tracking-widest transition hover:bg-white hover:text-black"
        >
          Close
        </button>
      </div>
    </div>
  )
}
