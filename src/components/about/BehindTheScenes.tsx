type BTSVideo = {
  src: string
  caption: string
}

const btsVideos: BTSVideo[] = [
  {
    src: "https://res.cloudinary.com/defbalxci/video/upload/v1767364445/Online_Converter_-_Convert_Image_Video_Audio_Document_Files_bmqh9v.mp4",
    caption: "Every story starts with intention.",
  },
  {
    src: "https://res.cloudinary.com/defbalxci/video/upload/v1767364843/Online_Converter_-_Convert_Image_Video_Audio_Document_Files_3_uyzdqb.mp4",
    caption: "Direction before the camera rolls.",
  },
  {
    src: "https://res.cloudinary.com/defbalxci/video/upload/v1767363348/Video_Compressor___Reduce_Video_File_Size_Online_uyx71r.mp4",
    caption: "Real moments, captured honestly.",
  },
]

export default function BehindTheScenes() {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-40 border-t border-[#dfaa26]/50">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-24 max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-widest text-white/50">
            Behind the scenes
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white/80">
            How the work comes together.
          </h2>
        </div>

        {/* Story grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">

          {/* Video 1 */}
          <div className="md:col-span-7">
            <VideoCard video={btsVideos[0]} />
          </div>

          {/* Video 2 */}
          <div className="md:col-span-5 md:mt-32">
            <VideoCard video={btsVideos[1]} />
          </div>

          {/* Video 3 */}
          <div className="md:col-span-8">
            <VideoCard video={btsVideos[2]} />
          </div>

        </div>
      </div>
    </section>
  )
}


function VideoCard({ video }: { video: BTSVideo }) {
  return (
    <div className="space-y-6">

      {/* Video */}
      <div className="relative w-full h-[55vh] overflow-hidden bg-black">
        <video
          src={video.src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Caption */}
      <p className="max-w-md text-lg font-light text-white/70">
        {video.caption}
      </p>

    </div>
  )
}
