import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Tag } from 'lucide-react';

const Card = ({ component, index }) => {
  const truncateDescription = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Microcontrollers': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      'Sensors': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      'Displays': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
      'Modules': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
      'Actuators': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
      'Tools': 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
      'Input': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
      'Output': 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300',
      'Power': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
    };
    return colors[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/30 overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
    >
      {/* Product Image */}
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
        {component.image ? (
          <img
            src={component.image}
            alt={component.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        {/* Fallback icon when image fails to load or doesn't exist */}
        <div 
          className={`absolute inset-0 flex items-center justify-center text-6xl ${component.image ? 'hidden' : 'flex'}`}
          style={{ display: component.image ? 'none' : 'flex' }}
        >
          {component.icon}
        </div>
        {/* Category badge overlay */}
        <div className="absolute top-3 right-3">
          <div className={`px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 ${getCategoryColor(component.category)}`}>
            {component.category}
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
          {component.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
          {truncateDescription(component.description)}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Tag className="w-4 h-4 text-green-500" />
            <span className="text-2xl font-bold text-green-600 dark:text-green-400">
              ₹{component.price}
            </span>
          </div>
        </div>

        {/* Buy Now Button */}
        <motion.a
          href={component.buyUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="block w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 text-center group/button"
        >
          <div className="flex items-center justify-center space-x-2">
            <span>Buy Now</span>
            <ExternalLink className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-200" />
          </div>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Card;
