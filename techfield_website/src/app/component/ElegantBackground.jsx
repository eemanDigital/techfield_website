export default function ElegantBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100/80"></div>

      {/* Geometric pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(30deg,transparent_0%,transparent_70%,#990100_70%,#990100_72%,transparent_72%,transparent_100%),linear-gradient(150deg,transparent_0%,transparent_70%,#990100_70%,#990100_72%,transparent_72%,transparent_100%)] bg-[size:60px_60px]"></div>
      </div>

      {/* Accent shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-[#990100]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-[#990100]/3 to-transparent rounded-full blur-3xl"></div>

      {/* Fine lines */}
      <div className="absolute top-1/4 left-0 w-px h-1/2 bg-gradient-to-b from-transparent via-[#990100]/10 to-transparent"></div>
      <div className="absolute top-1/3 right-0 w-px h-1/3 bg-gradient-to-b from-transparent via-[#990100]/10 to-transparent"></div>
    </div>
  );
}
