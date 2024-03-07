function fibonacci(num) {
    if (num <= 0) {
        return "Invalid input";
    } else if (num === 1) {
        return 0;
    } else if (num === 2) {
        return 1;
    } else {
        let fibSeries = [0, 1];
        for (let i = 2; i < num; i++) {
            fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
        }
        return fibSeries[num - 1];
    }
}

module.exports = fibonacci;
