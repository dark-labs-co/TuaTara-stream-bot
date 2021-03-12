
export function numberWithCommas(x) {
    if (x >= 100) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (x)
}

