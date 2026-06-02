export default function Navbar() {
  return (
    <div className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        
        <h1 className="text-xl font-bold text-green-700">
          NutriSource
        </h1>

        <div className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-green-600">Home</a>
          <a href="#" className="hover:text-green-600">About</a>
          <a href="#" className="hover:text-green-600">Platform</a>
          <a href="#" className="hover:text-green-600">Contact</a>
        </div>

        <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
          Get Started
        </button>

      </div>
    </div>
  );
}