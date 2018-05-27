const assert=require('assert');
const path=require('path');
const fs= require('fs');
const solc=require('solc');

const inboxPath= path.resolve(__dirname,'contracts','inbox.sol');
const source= fs.readFileSync(inboxPath,'utf8');

module.exports= solc.compile(source,1).contracts[':Inbox'];


//testing
// class Car{
//     park(){
//         return 'stopped';
//     }
//     drive(){
//         return 'vroom';
//     }
// }
//
// describe('Car',()=>{
//     it('can park',()=>{
//         const car= new Car();
//         assert.equal(car.park(),'stopped');
//     });
// });
