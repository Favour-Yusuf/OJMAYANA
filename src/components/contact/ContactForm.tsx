import ServiceSelect from "./ServiceSelect"
import RateCardDropdown from "../RateCardDropdown"

export default function ContactForm() {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-32">
      <div className="max-w-4xl mx-auto">
        <p className="mb-10 text-xs uppercase tracking-widest text-white/50">
          Project enquiry
        </p>

        <form
          className="space-y-12"
          action="https://formspree.io/f/your-form-id"
          method="POST"
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
          <Input
            label="Preferred Date & Time"
            name="preferred_datetime"
            type="datetime-local"
          />

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
              className="border border-white px-10 py-4 text-sm uppercase tracking-widest transition hover:bg-white hover:text-black"
            >
              Submit enquiry
            </button>

            {/* Rate cards */}
            <div className="text-xs uppercase tracking-widest text-white/60">
              <RateCardDropdown />
            </div>
          </div>
        </form>
      </div>
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
        className="w-full bg-transparent border-b border-white/30 py-3 text-white outline-none focus:border-white"
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
