"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Tag, X, Grid, Layers } from "lucide-react"; // Using lucide icons
import ResizablePanels from './ResizablePanels'; // Import the ResizablePanels component

export default function CompetitionCard({ competition }) {
  const [isJoined, setIsJoined] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [view, setView] = useState<"grid" | "list">("grid");

  const { name, description, startTime, category } = competition;

  const handleJoin = () => {
    setIsJoined(true); // Set to true when joining
  };

  if (isJoined) {
    return <ResizablePanels />; // Show the ResizablePanels component after joining
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
      <div className="w-full h-full max-w-7xl mx-auto px-4 py-12 bg-[#121212] rounded-xl shadow-lg">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-sm text-gray-400 mb-6"
          >
            <Tag className="w-4 h-4" />
            Competition
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text mb-6"
          >
            {name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 mb-8"
          >
            {description}
          </motion.p>
        </div>

        {/* Filters Section */}
        <div className="relative max-w-5xl mx-auto mb-12 space-y-6">
          {/* Search */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search competitions..."
                className="w-full pl-12 pr-4 py-4 bg-[#1e1e2e]/80 hover:bg-[#1e1e2e] text-white
                  rounded-xl border border-[#313244] hover:border-[#414155] transition-all duration-200
                  placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
            </div>
          </div>

          {/* Filters Bar */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#1e1e2e] rounded-lg ring-1 ring-gray-800">
              <Tag className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-400">Categories:</span>
            </div>

            {/* Categories Filter (Just example, adjust according to actual categories) */}
            {["Coding", "Algorithm", "Machine Learning"].map((categoryItem) => (
              <button
                key={categoryItem}
                onClick={() => setSelectedCategory(categoryItem === selectedCategory ? null : categoryItem)}
                className={`group relative px-3 py-1.5 rounded-lg transition-all duration-200
                    ${selectedCategory === categoryItem
                      ? "text-blue-400 bg-blue-500/10 ring-2 ring-blue-500/50"
                      : "text-gray-400 hover:text-gray-300 bg-[#1e1e2e] hover:bg-[#262637] ring-1 ring-gray-800"
                    }`}
              >
                <span className="text-sm">{categoryItem}</span>
              </button>
            ))}

            {selectedCategory && (
              <button
                onClick={() => setSelectedCategory(null)}
                className="flex items-center gap-1 px-2 py-1 text-xs text-gray-400 hover:text-gray-300 transition-colors"
              >
                <X className="w-3 h-3" />
                Clear
              </button>
            )}

            <div className="ml-auto flex items-center gap-3">
              {/* View Toggle */}
              <div className="flex items-center gap-1 p-1 bg-[#1e1e2e] rounded-lg ring-1 ring-gray-800">
                <button
                  onClick={() => setView("grid")}
                  className={`p-2 rounded-md transition-all ${
                    view === "grid" ? "bg-blue-500/20 text-blue-400" : "text-gray-400 hover:text-gray-300 hover:bg-[#262637]"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setView("list")}
                  className={`p-2 rounded-md transition-all ${
                    view === "list" ? "bg-blue-500/20 text-blue-400" : "text-gray-400 hover:text-gray-300 hover:bg-[#262637]"
                  }`}
                >
                  <Layers className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Join Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mt-8"
        >
          <button
            onClick={handleJoin}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg rounded-xl shadow-lg hover:bg-opacity-90 transition-all duration-300"
          >
            Join Competition
          </button>
        </motion.div>
      </div>
    </div>
  );
}
