function Loader() {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />
      <span className="text-sm text-gray-500">در حال بارگذاری...</span>
    </div>
  );
}

export default Loader;
