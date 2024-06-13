import moment from "moment-timezone";

export function formatDate(date: string) {
  return moment.tz(date, "Asia/Ho_Chi_Minh").format("LL");
}
