import primeFactor from './primeFactor'
describe('primeFactor', () => {
    it("Input 2 should be array [2]",()=>{
        const expected = [2]
        const num = 2

       primeFactor(num,function(actual:number){
           expect(actual).toEqual(expected)
       })
    })

    it('Input 3 should be array [3]', () => {
        const expected = [3]
        const num = 3

       primeFactor(num,function(actual:number){
           expect(actual).toEqual(expected)
       })
    });

    it('Input 4 should be array [2,2]', () => {
        const expected = [2,2]
        const num = 4

       primeFactor(num,function(actual:number){
           expect(actual).toEqual(expected)
       })
    });

    it('Input 5 should be array [5]', () => {
        const expected = [5]
        const num = 5

       primeFactor(num,function(actual:number){
           expect(actual).toEqual(expected)
       })
    });

    it('Input 6 should be array [2,3]', () => {
        const expected = [2,3]
        const num = 6

       primeFactor(num,function(actual:number){
           expect(actual).toEqual(expected)
       })
    });

    it('Input 9 should be array [3,3]', () => {
        const expected = [3,3]
        const num = 9

       primeFactor(num,function(actual:number){
           expect(actual).toEqual(expected)
       })
    });

    it('Input 12 should be array [2,2,3]', () => {
        const expected = [2,2,3]
        const num = 12

       primeFactor(num,function(actual:number){
           expect(actual).toEqual(expected)
       })
    });

    it('Input 15 should be array [3,5]', () => {
        const expected = [3,5]
        const num = 15

       primeFactor(num,function(actual:number){
           expect(actual).toEqual(expected)
       })
    });
});