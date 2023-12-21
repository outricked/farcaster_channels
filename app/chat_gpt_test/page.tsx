import Image from "next/image";
import { Table } from "@/components/ui/table";

export default function Example() {
  return (
    <div className="flex min-h-screen bg-gray-800 text-white">
      
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 p-4 space-y-6">
        {/* Logo or user avatar placeholder */}
        <div className="bg-gray-700 rounded-full h-12 w-12 mx-auto"></div>

        {/* Navigation tabs */}
        <nav>
          <ul className="space-y-2">
            <li className="flex items-center p-2 rounded-md bg-gray-700">
              {/* Placeholder for home icon */}
              <div className="bg-gray-500 rounded h-6 w-6"></div>
              <span className="ml-3">Home</span>
            </li>
            <li className="flex items-center p-2 rounded-md hover:bg-gray-700">
              {/* Placeholder for notifications icon */}
              <div className="bg-gray-500 rounded h-6 w-6"></div>
              <span className="ml-3">Notifications</span>
            </li>
            <li className="flex items-center p-2 rounded-md hover:bg-gray-700">
              {/* Placeholder for messages icon */}
              <div className="bg-gray-500 rounded h-6 w-6"></div>
              <span className="ml-3">Messages</span>
            </li>
            <li className="flex items-center p-2 rounded-md hover:bg-gray-700">
              {/* Placeholder for bookmarks icon */}
              <div className="bg-gray-500 rounded h-6 w-6"></div>
              <span className="ml-3">Bookmarks</span>
            </li>
            <li className="flex items-center p-2 rounded-md hover:bg-gray-700">
              {/* Placeholder for profile icon */}
              <div className="bg-gray-500 rounded h-6 w-6"></div>
              <span className="ml-3">Profile</span>
            </li>
            {/* More tabs */}
            {/* ... */}
          </ul>
        </nav>
      </div>
      
      {/* Main content area */}
      <div className="flex-1 p-4 space-y-4">
        {/* Post 1 */}
        <div className="bg-gray-700 rounded-lg p-4">
          <div className="flex space-x-3">
            {/* Placeholder for image */}
            <div className="bg-gray-500 rounded-full h-12 w-12" />
            <div>
              {/* Placeholder for text */}
              <p className="text-gray-300">Username</p>
              <p className="text-gray-200">Post content...</p>
            </div>
          </div>
        </div>
        {/* More posts */}
        {/* ... */}
      </div>
      <Table></Table>
      
      {/* Detailed View */}
      <div className="w-1/3 bg-gray-700 p-4">
        {/* Placeholder for selected post details */}
        <div className="bg-gray-600 rounded-lg p-4">
          {/* Placeholder for text */}
          Detailed content...
        </div>
      </div>

    </div>
  );
}
