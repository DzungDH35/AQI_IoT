import moment from "moment";
export const dateFormat = date => {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

export const formatDate = (date) => {
  return moment(date).format('YYYY-M-D');
}
