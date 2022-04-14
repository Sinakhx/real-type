import realTypeOf from '../lib';

describe('realType', () => {
    it('should return the real type of a value', () => {
        expect(realTypeOf(1)).toBe('Number');
        expect(realTypeOf(Number(1))).toBe('Number');
        expect(realTypeOf(14n)).toBe('BigInt');
        expect(realTypeOf(BigInt(1))).toBe('BigInt');
        expect(realTypeOf(true)).toBe('Boolean');
        expect(realTypeOf(Boolean(false))).toBe('Boolean');
        expect(realTypeOf('foo')).toBe('String');
        expect(realTypeOf(null)).toBe('Null');
        expect(realTypeOf(undefined)).toBe('Undefined');
        expect(realTypeOf(Symbol('foo'))).toBe('Symbol');
        expect(realTypeOf([])).toBe('Array');
        expect(realTypeOf(new Array(8))).toBe('Array');
        expect(realTypeOf(Array.from([12]))).toBe('Array');
        expect(realTypeOf({})).toBe('Object');
        expect(realTypeOf(Object.create(null))).toBe('Object');
        expect(realTypeOf(new Proxy({}, {}))).toBe('Object');
        expect(realTypeOf(() => {})).toBe('Function');
        expect(realTypeOf(function () {})).toBe('Function');
        expect(realTypeOf(async () => {})).toBe('AsyncFunction');
        expect(realTypeOf(function* () {})).toBe('GeneratorFunction');
        expect(realTypeOf(new Map([[1, 2]]).entries())).toBe('Map Iterator');
        expect(realTypeOf(new Promise(() => {}))).toBe('Promise');
        expect(realTypeOf(/foo/)).toBe('RegExp');
        expect(realTypeOf(new RegExp('foo*'))).toBe('RegExp');
        expect(realTypeOf(new Date())).toBe('Date');
        expect(realTypeOf(new RegExp('foo'))).toBe('RegExp');
        expect(realTypeOf(new Error('foo'))).toBe('Error');
        expect(realTypeOf(new Map())).toBe('Map');
        expect(realTypeOf(new Map([['foo', 'bar']]))).toBe('Map');
        expect(realTypeOf(new Set())).toBe('Set');
        expect(realTypeOf(new WeakMap())).toBe('WeakMap');
        expect(realTypeOf(new WeakSet())).toBe('WeakSet');
        expect(realTypeOf(new Int8Array())).toBe('Int8Array');
        expect(realTypeOf(new Uint8Array())).toBe('Uint8Array');
        expect(realTypeOf(new Uint8ClampedArray())).toBe('Uint8ClampedArray');
        expect(realTypeOf(new Int16Array())).toBe('Int16Array');
        expect(realTypeOf(new Uint16Array())).toBe('Uint16Array');
        expect(realTypeOf(new Int32Array())).toBe('Int32Array');
        expect(realTypeOf(new Uint32Array())).toBe('Uint32Array');
        expect(realTypeOf(new Float32Array())).toBe('Float32Array');
        expect(realTypeOf(new Float64Array())).toBe('Float64Array');
        expect(realTypeOf(new BigInt64Array())).toBe('BigInt64Array');
        expect(realTypeOf(new BigUint64Array())).toBe('BigUint64Array');
        expect(realTypeOf(new ArrayBuffer(1))).toBe('ArrayBuffer');
        expect(realTypeOf(new SharedArrayBuffer(1))).toBe('SharedArrayBuffer');
        expect(realTypeOf(new DataView(new ArrayBuffer(1)))).toBe('DataView');
        expect(realTypeOf(new URL('http://foo.com'))).toBe('URL');
        expect(realTypeOf(new URLSearchParams('foo=bar'))).toBe('URLSearchParams');
    });

    it('special case for "NaN"', () => {
        expect(realTypeOf(NaN)).toBe('NaN');
    });

    it('special case for "Class"', () => {
        class Foo {}
        expect(realTypeOf(Foo)).toBe('Class');
        expect(realTypeOf(new Foo())).toBe('Object');
    });
});
