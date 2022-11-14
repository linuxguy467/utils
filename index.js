
module.exports = {
    /**
     * Converts string to proper Case.
     * @param {string} str
     * @return {string}
     */
    titleCase(str) {
        return str.toLowerCase().split(' ').map(word => 
            word.replace(word[0], word[0].toUpperCase())
        ).join(' ');
    },
    
};
