const team = [
  { name: "Nonye Ezeaka", role: "Team Member" },
  { name: "Aron", role: "Team Member" },
  { name: "Benjamin Olisa", role: "Team Member" },
]

export default function Team() {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-32">
      <div className="max-w-6xl mx-auto">
        <p className="mb-12 text-xs uppercase tracking-widest text-white/50">
          Team
        </p>

        <ul className="space-y-8">
          {team.map((member, i) => (
            <li key={i}>
              <p className="text-xl font-light">{member.name}</p>
              <p className="text-sm text-white/60">{member.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
