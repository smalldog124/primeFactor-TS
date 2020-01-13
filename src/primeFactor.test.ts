import primeFactor from './primeFactor'
describe('primeFactor', () => {
    it("Input 2 should be array [2]",()=>{
        const expected = [2]
        const num = 2

       primeFactor(num,function(actual:number){
           expect(actual).toEqual(expected)
       })
    })
});