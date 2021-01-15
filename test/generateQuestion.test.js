import {arrayIds, randomId} from '../src/components/generateQuestion/generateQuestion'

it ('should return array of numbers', ()=>{
   expect(arrayIds(5)).toStrictEqual([1,2,3,4,5])
})
it ('should not return array with number 17', ()=>{
   expect(arrayIds(18)).toStrictEqual([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19])
})

it ('should return random number', ()=>{
   expect(randomId([1,2])).not.toBe(5)
})