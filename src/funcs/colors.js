const createColors = function(n, func = (i) => {
    return 0x14f << i
}) {
    let da = Array.from(new Array(n), (v, i) => "#" + ("000000" + func(i).toString(16)).substr(-6))
    return da
}


export {createColors}
