export default function getMonthOrder(currentMonth) {
    let monthOrder = [];

    //for(let i = currentMonth - 3; i <= 12; i++) monthOrder.push(`${i}`);
    //for(let i = 1; i < currentMonth - 3; i++) monthOrder.push(`${i}`);
    for(let i = currentMonth; i <= 12; i++) monthOrder.push(`${i}`);

    return monthOrder;
}