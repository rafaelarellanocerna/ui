'use strict';

/// convert date to string YYYY-MM-DD HH:mm:ss
function convertDate(date) {
    return date.toISOString().slice(0, 19).replace('T', ' ');
}

module.exports = convertDate;
//# sourceMappingURL=convertDate.js.map
