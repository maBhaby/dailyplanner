import { MONTHS_ENUM } from './const';

export const numToMonth = (month) => MONTHS_ENUM.at(month - 1);
