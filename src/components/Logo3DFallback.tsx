interface Logo3DFallbackProps {
  className?: string;
}

export default function Logo3DFallback({ className = "" }: Logo3DFallbackProps) {
  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      <div className="text-center">
        <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-[#ffd63c] to-[#ffed4e] rounded-full flex items-center justify-center animate-pulse">
          <span className="text-4xl font-bold text-black">S</span>
        </div>
        <p className="text-white/70 text-sm">Loading 3D Model...</p>
      </div>
    </div>
  );
}
