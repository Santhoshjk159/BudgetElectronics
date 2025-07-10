import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';

const EmptyState = ({ searchTerm, selectedCategory }) => {
  const getEmptyMessage = () => {
    if (searchTerm && selectedCategory !== 'All') {
      return `No components found for "${searchTerm}" in ${selectedCategory} category`;
    } else if (searchTerm) {
      return `No components found for "${searchTerm}"`;
    } else if (selectedCategory !== 'All') {
      return `No components found in ${selectedCategory} category`;
    }
    return 'No components available';
  };

  const getEmptySubMessage = () => {
    if (searchTerm || selectedCategory !== 'All') {
      return 'Try adjusting your search or filter criteria';
    }
    return 'Please try refreshing the page';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center py-16 px-4"
    >
      {/* Empty State Illustration */}
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        <div className="relative">
          <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full flex items-center justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-800/30 dark:to-purple-800/30 rounded-full flex items-center justify-center">
              {searchTerm ? (
                <Search className="w-16 h-16 text-blue-500 dark:text-blue-400" />
              ) : (
                <Filter className="w-16 h-16 text-purple-500 dark:text-purple-400" />
              )}
            </div>
          </div>
          {/* Floating elements */}
          <motion.div
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-300 dark:bg-yellow-500 rounded-full opacity-70"
          />
          <motion.div
            animate={{
              y: [10, -10, 10],
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -bottom-2 -left-6 w-6 h-6 bg-green-300 dark:bg-green-500 rounded-full opacity-70"
          />
          <motion.div
            animate={{
              y: [-5, 15, -5],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute top-16 -left-8 w-4 h-4 bg-pink-300 dark:bg-pink-500 rounded-full opacity-70"
          />
        </div>
      </motion.div>

      {/* Empty State Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center max-w-md"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {getEmptyMessage()}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          {getEmptySubMessage()}
        </p>

        {/* Action Suggestions */}
        {(searchTerm || selectedCategory !== 'All') && (
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {searchTerm && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg text-sm"
              >
                Searching for: "{searchTerm}"
              </motion.div>
            )}
            {selectedCategory !== 'All' && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg text-sm"
              >
                Category: {selectedCategory}
              </motion.div>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default EmptyState;
