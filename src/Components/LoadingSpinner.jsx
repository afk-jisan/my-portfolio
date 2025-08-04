export default function Waiting() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin font-outfit" />
      <p className="text-gray-500 text-sm">Loading...</p>
    </div>
  );
}
