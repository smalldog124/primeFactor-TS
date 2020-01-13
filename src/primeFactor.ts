export default function primeFactor(n: number, callback:Function){
    let result: number[] = new Array()
    let divider = 2;
    while(n != 1){
        if (n%divider == 0){
            result.push(divider)
            n /= divider
        }else{
            divider++
        }
    }
    callback(result)
}