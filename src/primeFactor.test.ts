import primeFactor from './primeFactor'
describe('primeFactor', () => {
    it("Input 2 should be array [2]",()=>{
        const expected = [2]
        const num = 2

        const actual = primeFactor(num)

        expect(actual).toEqual(expected)
    })
});