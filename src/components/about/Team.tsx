import Image from "next/image"

type TeamMember = {
  name: string
  role: string
  image: string
}

const team: TeamMember[] = [
   {
    name: "Benjamin Olisaemeka Ojukwu",
    role: "Creative Director",
    image: "https://res.cloudinary.com/defbalxci/image/upload/v1767420923/BENJAMIN_OLISA_Creative_director_g7dtrv.png",
  },
  {
    name: "Nonye Ezeaka",
    role: "Creative Manager",
    image: "https://res.cloudinary.com/defbalxci/image/upload/v1767361649/NONYE_EZEAKA_hgxxil.jpg",
  },
  {
    name: "Aaron Bhutto (Blaq)",
    role: " Assistant photographer ",
    image: "https://res.cloudinary.com/defbalxci/image/upload/v1767361651/AARON_HEBRON_BHUTTO_qjooks.jpg",
  },
 
]

export default function Team() {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-40 border-t border-[#dfaa26]/40">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <p className="mb-20 text-xs uppercase tracking-widest text-white/50">
          The Team
        </p>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
          {team.map((member, i) => (
            <div key={i} className="group">

              {/* Image */}
              <div className="relative w-full h-[60vh] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  priority={i === 0}
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

              {/* Text */}
              <div className="mt-6">
                <p className="text-xl font-bold">
                  {member.name}
                </p>
                <p className="mt-1 text-sm text-[#dfaa26]/70">
                  {member.role}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
