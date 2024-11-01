const getTotalExperience = (startDate) => {
    const endDate = new Date();
    const ms = endDate.getTime() - startDate.getTime();

    const date = new Date(ms);

    return Math.abs(date.getUTCFullYear() - 1970);
};

const getMonthAndYear = (dateStr) => {
    if(!dateStr) return '';

    const date = new Date(dateStr);

    return date.toLocaleString('default', { month: 'long', year: 'numeric' });

};
export {getTotalExperience, getMonthAndYear};

