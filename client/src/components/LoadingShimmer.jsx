import React from 'react';
import { motion } from 'framer-motion';

const LoadingShimmer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700"
        >
          {/* Image shimmer */}
          <div className="h-48 shimmer"></div>
          
          <div className="p-6">
            {/* Title shimmer */}
            <div className="w-3/4 h-6 shimmer rounded mb-3"></div>

            {/* Description shimmer */}
            <div className="space-y-2 mb-4">
              <div className="w-full h-4 shimmer rounded"></div>
              <div className="w-5/6 h-4 shimmer rounded"></div>
              <div className="w-4/6 h-4 shimmer rounded"></div>
            </div>

            {/* Price shimmer */}
            <div className="flex items-center justify-between mb-6">
              <div className="w-16 h-8 shimmer rounded"></div>
            </div>

            {/* Button shimmer */}
            <div className="w-full h-12 shimmer rounded-xl"></div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default LoadingShimmer;
