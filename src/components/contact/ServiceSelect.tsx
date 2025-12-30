export default function ServiceSelect() {
  return (
    <div className="space-y-2">
      <label className="block text-xs uppercase tracking-widest text-white/50">
        Service Type
      </label>

      <select
        name="service_type"
        required
        className="w-full bg-black border-b border-white/30 py-3 text-white outline-none focus:border-[#dfaa26]"
      >
        <option value="">Select a service</option>

        <optgroup label="Photography">
          <option>Fashion / E-commerce Photography</option>
          <option>Product Photography</option>
          <option>Portrait / Lifestyle Photography</option>
          <option>Corporate Event Photography</option>
          <option>Documentary Photography</option>
          <option>Food Photography</option>
          <option>Pre-Wedding Photography</option>
        </optgroup>

        <optgroup label="Videography">
          <option>Fashion / E-commerce Videography</option>
          <option>Corporate Event Coverage</option>
          <option>Interviews</option>
          <option>Personal Branding Videos</option>
          <option>Podcasts</option>
          <option>YouTube Videos</option>
          <option>Video Editing Services</option>
          <option>Mini Influencer Campaign Videos</option>
        </optgroup>

        <optgroup label="Other">
          <option>Branding Services</option>
        </optgroup>
      </select>
    </div>
  )
}
