import moment from "moment";
import { data } from "react-router-dom";

export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const getInitials = (name) => {
    if(!name) return "";

    const words = name.split(" ");
    let initails = "";

    for(let i =0;i<Math.min(words.length,2);i++) {
        initails += words[i][0];
    }
    return initails.toUpperCase();
}

export const addThousandsSeperator = (num) => {
    if(num == null || isNaN(num)) return "";

    const [integerPart, fractionPart] = num.toString().split(",");
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g,",");

    return fractionPart
    ? `${formattedInteger}.${fractionPart}`
    : formattedInteger;
};

export const prepareExpenseBarChartData = (data = []) => {
    const charData = data.map((item) => ({
        category: item?.category,
        amount: item?.amount,
    }));

    return charData;
}

export const prepareIncomeBarChartData = (data = []) => {
    const sortedData = [...data].sort((a,b) => new Date(a.date) -new Date(b.date));

    const charData = sortedData.map((item) => ({
        month: moment(item?.date).format("Do MMM"),
        amount: item?.amount,
        source: item?.source,
    }));

    return charData;
};

export const prepareExpenseLineChartData = (data = []) => {
    const sortedData = [...data].sort((a,b) => new Date(a.date) - new Date(b.date));

    const charData = sortedData.map((item) => ({
        month: moment(item?.date).format("Do MMM"),
        amount: item?.amount,
        category: item?.category,
    }));

    return charData;
};