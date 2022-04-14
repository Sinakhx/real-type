const realTypeOf = (val: any) => {
    if (Number.isNaN(val)) {
        return 'NaN';
    }
    if (val?.toString && typeof val.toString === 'function' && val.toString().slice(0, 6) === 'class ') {
        return 'Class';
    }
    return Object.prototype.toString.call(val).slice(8, -1);
};

export default realTypeOf;
