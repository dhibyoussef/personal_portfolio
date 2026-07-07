import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { useState } from "react"

export default function HeroVideo() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer"
      onClick={() => setIsPlaying(true)}
    >
      {/* Background gradient with animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-blue-500/20" />
      
      {/* Animated background pattern */}
      <motion.div
        className="absolute inset-0 opacity-40"
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          repeatType: "mirror"
        }}
        style={{
          backgroundImage: `linear-gradient(45deg, rgba(85, 68, 255, 0.1) 25%, transparent 25%, transparent 50%, rgba(85, 68, 255, 0.1) 50%, rgba(85, 68, 255, 0.1) 75%, transparent 75%, transparent)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Play button */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ scale: isPlaying ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          {/* Animated rings */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white/40"
            animate={{ scale: [1, 1.3], opacity: [1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white/20"
            animate={{ scale: [1, 1.6], opacity: [1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
          />

          {/* Play button circle */}
          <div className="relative w-20 h-20 rounded-full bg-gradient-to-r from-primary via-accent to-blue-500 flex items-center justify-center shadow-2xl shadow-primary/50">
            <Play className="w-8 h-8 text-white fill-white ml-1" />
          </div>
        </motion.div>
      </motion.div>

      {/* Overlay on play */}
      {isPlaying && (
        <motion.iframe
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 w-full h-full rounded-2xl"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}

      {/* Close button when playing */}
      {isPlaying && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={(e) => {
            e.stopPropagation()
            setIsPlaying(false)
          }}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" />
          </svg>
        </motion.button>
      )}

      {/* Text overlay */}
      {!isPlaying && (
        <motion.div
          className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/60 to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Watch My Work in Action</h3>
            <p className="text-white/80 text-sm">See how I build amazing digital experiences</p>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
