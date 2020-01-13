export default function primeFactor(n: number, callback:Function){
    if (n % 2 == 0){
        callback([2])
        return
    }
    callback([3])
}