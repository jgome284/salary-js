// Used to format salary data in english, US locale
function formatNumber(num) {
    if (typeof num === 'string') {
      num = Number(num)
    }
    return num.toLocaleString('en-US');
}

export {formatNumber};