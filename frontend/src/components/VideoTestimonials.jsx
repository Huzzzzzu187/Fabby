import React, { useRef, useEffect, useState } from 'react';

const videos = [
  {
    id: 1,
    src: "https://assets.mixkit.co/videos/preview/mixkit-senior-man-smiling-and-looking-at-camera-34533-large.mp4",
    name: "Caregiver Story",
    text: "Makes caregiving easier"
  },
  {
    id: 2,
    src: "https://assets.mixkit.co/videos/preview/mixkit-nurse-checking-patient-in-hospital-bed-34440-large.mp4",
    name: "Hospital Partner",
    text: "Reliable and comfortable"
  },
  {
    id: 3,
    src: "https://assets.mixkit.co/videos/preview/mixkit-female-nurse-with-senior-patient-in-wheelchair-34531-large.mp4",
    name: "Family Comfort",
    text: "Restored our dignity"
  },
  {
    id: 4,
    src: "https://assets.mixkit.co/videos/preview/mixkit-physical-therapist-working-with-senior-patient-34535-large.mp4",
    name: "Everyday Comfort",
    text: "Highly recommend Fabby"
  }
];

const VideoCard = ({ video }) => {
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div 
      className="relative flex-shrink-0 w-64 md:w-80 aspect-[9/16] rounded-2xl overflow-hidden shadow-lg snap-center cursor-pointer group transition-transform duration-300 hover:scale-[1.02]"
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={video.src}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
      {/* Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-white font-bold text-xl">{video.name}</h3>
        {video.text && <p className="text-white/80 text-sm mt-1">{video.text}</p>}
        
        {/* Play/Pause indicator icon */}
        <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="material-symbols-outlined text-white text-sm">play_pause</span>
        </div>
      </div>
    </div>
  );
};

const VideoTestimonials = () => {
  const scrollRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let interval;
    if (!isHovering) {
      interval = setInterval(() => {
        if (scrollRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
          // If we reached the end, scroll back to the beginning
          if (scrollLeft + clientWidth >= scrollWidth - 10) {
            scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            // Scroll right by approximately one card width including gap
            scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
          }
        }
      }, 3000); // scrolls every 3 seconds
    }
    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Care That Touches Lives
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real experiences from people who trust our products every day.
          </p>
        </div>

        {/* Scroll Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory px-4 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={() => setIsHovering(true)}
          onTouchEnd={() => setIsHovering(false)}
        >
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
        
        {/* Helper style to hide webkit scrollbar but keep functionality */}
        <style dangerouslySetInnerHTML={{__html: `
          .overflow-x-auto::-webkit-scrollbar {
            display: none;
          }
        `}} />
      </div>
    </section>
  );
};

export default VideoTestimonials;
