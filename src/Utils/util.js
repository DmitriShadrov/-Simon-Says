export default function Timeout(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}