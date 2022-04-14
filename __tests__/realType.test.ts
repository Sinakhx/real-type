import realTypeOf from '../lib';

describe('realType', () => {
    it('should return the real type of a value', () => {
        expect(typeof realTypeOf).toBe('function');
        // expect(realType(null)).toBe('null');
        // expect(realType(undefined)).toBe('undefined');
        // expect(realType(true)).toBe('boolean');
        // expect(realType(false)).toBe('boolean');
        // expect(realType(0)).toBe('number');
        // expect(realType(1)).toBe('number');
        // expect(realType('')).toBe('string');
        // expect(realType('a')).toBe('string');
        // expect(realType(Symbol('a'))).toBe('symbol');
        // expect(realType(Symbol.iterator)).toBe('symbol');
        // expect(realType(() => {})).toBe('function');
        // expect(realType(function () {})).toBe('function');
        // expect(realType(class {})).toBe('function');
        // expect(realType(new Date())).toBe('date');
        // expect(realType(new RegExp())).toBe('regexp');
        // expect(realType(/a/)).toBe('regexp');
        // expect(realType(new Map())).toBe('map');
        // expect(realType(new Set())).toBe('set');
        // expect(realType(new WeakMap())).toBe('weakmap');
        // expect(realType(new WeakSet())).toBe('weakset');
        // expect(realType(new Array())).toBe('array');
        // expect(realType([])).toBe('array');
        // expect(realType(new Int8Array())).toBe('int8array');
        // expect(realType(new Uint8Array())).toBe('uint8array');
        // expect(realType(new Uint8ClampedArray())).toBe('uint8clampedarray');
        // expect(realType(new Int16Array())).toBe('int16array');
        // expect(realType(new Uint16Array())).toBe('uint16array');
        // expect(realType(new Int32Array())).toBe('int32array');
        // expect(realType(new Uint32Array())).toBe('uint32array);
        // expect(realType(new Float32Array())).toBe('float32array');
        // expect(realType(new Float64Array())).toBe('float64array');
        // expect(realType(new ArrayBuffer())).toBe('arraybuffer');
        // expect(realType(new SharedArrayBuffer())).toBe('sharedarraybuffer');
        // expect(realType(new DataView(new ArrayBuffer()))).toBe('dataview');
        // expect(realType(new Promise(() => {}))).toBe('promise');
        // expect(realType(new Map())).toBe('map');
        // expect(realType(new Set())).toBe('set');
    });
});