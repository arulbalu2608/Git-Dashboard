
//format date as DD/MM/YYYY
export const getFormattedDate = (date) => {
    const dateObject = new Date(date);
    const day = dateObject.getUTCDate();
    const month = dateObject.getUTCMonth() + 1;
    const year = dateObject.getUTCFullYear();

    //add 0 if date less than 10
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    const formattedDate = `${formattedDay}-${formattedMonth}-${year}`;
    return formattedDate

}
