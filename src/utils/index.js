import { MONTHS_ENUM } from './const';

export const numToMonth = (time) =>{ 
    const monthAndYear = time.split(' ')

    return `${MONTHS_ENUM.at(monthAndYear.at(0) - 1)} ${monthAndYear.at(1)}`;
}

export const sliceStr = (str) => str.substr(0, 2) 
