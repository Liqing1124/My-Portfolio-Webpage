export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Compact Navigation Bar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 rounded-full shadow-lg px-6 py-3 z-10">
        <div className="flex space-x-6">
          <a href="#about" className="ghost-box text-gray-700 dark:text-gray-300 hover:text-blue-500 font-medium">About</a>
          <a href="#projects" className="ghost-box text-gray-700 dark:text-gray-300 hover:text-blue-500 font-medium">Projects</a>
          <a href="#blogs" className="ghost-box text-gray-700 dark:text-gray-300 hover:text-blue-500 font-medium">Blogs</a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>
            <div className="w-48 h-48 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-8 flex items-center justify-center">
              <span className="text-gray-600 dark:text-gray-300">Profile Image</span>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-700">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="w-full h-48 bg-gray-300 dark:bg-gray-600 rounded mb-4 flex items-center justify-center">
                  <span className="text-gray-600 dark:text-gray-300">Project Image</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Project 1</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              {/* Project 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="w-full h-48 bg-gray-300 dark:bg-gray-600 rounded mb-4 flex items-center justify-center">
                  <span className="text-gray-600 dark:text-gray-300">Project Image</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Project 2</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              {/* Project 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="w-full h-48 bg-gray-300 dark:bg-gray-600 rounded mb-4 flex items-center justify-center">
                  <span className="text-gray-600 dark:text-gray-300">Project Image</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Project 3</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Blogs Section */}
        <section id="blogs" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">Blogs</h2>
            <div className="space-y-8">
              {/* Blog Post 1 */}
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Blog Post Title 1</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Published on January 1, 2023</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              {/* Blog Post 2 */}
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Blog Post Title 2</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Published on February 1, 2023</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              {/* Blog Post 3 */}
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Blog Post Title 3</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Published on March 1, 2023</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
