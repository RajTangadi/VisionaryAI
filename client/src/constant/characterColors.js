
const characterColorMap = {
    // Vowels
    'A': 'bg-red-600',
    'E': 'bg-green-600',
    'I': 'bg-blue-600',
    'O': 'bg-orange-600',
    'U': 'bg-purple-600',
    
    // Consonants
    'B': 'bg-sky-600',
    'C': 'bg-emerald-600',
    'D': 'bg-amber-600',
    'F': 'bg-indigo-600',
    'G': 'bg-lime-600',
    'H': 'bg-teal-600',
    'J': 'bg-cyan-600',
    'K': 'bg-violet-600',
    'L': 'bg-fuchsia-600',
    'M': 'bg-rose-600',
    'N': 'bg-pink-600',
    'P': 'bg-yellow-600',
    'Q': 'bg-blue-500',
    'R': 'bg-orange-600', 
    'S': 'bg-green-500',
    'T': 'bg-purple-500',
    'V': 'bg-red-500',
    'W': 'bg-indigo-500',
    'X': 'bg-amber-500',
    'Y': 'bg-teal-500',
    'Z': 'bg-violet-500',
    
    // Default for numbers or special characters
    'default': 'bg-gray-600'
  };
  
  /**
   * Gets the background color based on the first character of a username
   * @param {string} username - The username to get color for
   * @returns {string} - Tailwind background color class
   */
  export const getColorForCharacter = (username) => {
    if (!username || username.length === 0) return characterColorMap.default;
    
    // Get first character and convert to uppercase
    const firstChar = username.charAt(0).toUpperCase();
    
    // Return the color for this character or the default if not found
    return characterColorMap[firstChar] || characterColorMap.default;
  };
  
  export default characterColorMap;