{var customerName = 'bob'}

function upperCaseCustomerName(){
    return customerName = customerName.toUpperCase();
};
function setBestCustomer(){
    bestCustomer = 'not bob';
    console.log(bestCustomer)
};
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
};
const leastFavoriteCustomer = 'bonnie';

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'bob';
};