const userEntry:[string, number] = ['oppie', 19]; //tuple

type ResponseRow = [status:number, message?:string]; 
const r11: ResponseRow = [200, 'OK'];
const r22: ResponseRow = [404]; //message is optional

const corners: readonly[number, number]= [0, 0]; //readonly tuple
