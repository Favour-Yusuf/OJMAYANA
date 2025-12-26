import Image from "next/image";

export default function CinematicDivider() {
  return (
    <section className="relative h-[80vh] bg-black">
      <Image
        src="https://res.cloudinary.com/defbalxci/image/upload/v1765903946/DSC09404_gztwxv.jpg"
        alt="Studio Archive"
        fill
        className="object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-black/30" />
    </section>
  );
}
