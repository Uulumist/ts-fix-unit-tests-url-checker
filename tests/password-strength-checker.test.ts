import {calculatePasswordStrength} from "../src/password-strength-checker";

describe('calculatePasswordStrength', () => {

    test('check for very weak password', () => {
        expect(calculatePasswordStrength('12345678')).toBe('Very Weak')
        expect(calculatePasswordStrength('qwer')).toBe('Very Weak')
    })

    test('check for weak password', () => {
        expect(calculatePasswordStrength('a12345678')).toBe('Weak')
        expect(calculatePasswordStrength('Asd123')).toBe('Weak')
        expect(calculatePasswordStrength('123456789123')).toBe('Weak')
    })

    test('check for moderate password', () => {
        expect(calculatePasswordStrength('Asd12345')).toBe('Moderate')
        expect(calculatePasswordStrength('a12345678912')).toBe('Moderate')
        expect(calculatePasswordStrength('a123456+')).toBe('Moderate')
    })

    test('check for strong password', () => {
        expect(calculatePasswordStrength('Asd1234+')).toBe('Strong')
        expect(calculatePasswordStrength('As1234567891')).toBe('Strong')
    })
})
