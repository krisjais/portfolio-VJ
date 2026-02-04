export default function MinimalTest() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold text-slate-900 dark:text-white mb-4">
          Hello Railway! 🚀
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
          This is a minimal test page to verify deployment works.
        </p>
        <div className="flex gap-4 justify-center">
          <div className="px-6 py-3 bg-indigo-600 text-white rounded-lg">
            Build: ✅ Success
          </div>
          <div className="px-6 py-3 bg-green-600 text-white rounded-lg">
            Deploy: 🔄 Testing
          </div>
        </div>
      </div>
    </div>
  )
}