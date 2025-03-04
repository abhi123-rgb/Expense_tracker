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