// src/components/Loading.jsx
const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="flex flex-col items-center gap-4">
        {/* Red circular spinner */}
        <div className="relative w-14 h-14">
          {/* Outer ring */}
          <div className="w-full h-full rounded-full border-4 border-red-700/30" />
          {/* Animated top arc */}
          <div className="absolute inset-0 rounded-full border-4 border-t-red-600 border-r-transparent border-b-transparent border-l-transparent animate-spin" />
        </div>

        {/* Optional label */}
        <p className="text-xs uppercase tracking-[0.2em] text-red-500">
          Loading
        </p>
      </div>
    </div>
  );
};

export default Loading;
