import {
  arrayIds,
  randomId,
  rndArrayOfIds,
  getImg,
  checkMode
} from '../src/components/generateQuestion/generateQuestion';

it('should return array of numbers', () => {
  expect(arrayIds(5)).toStrictEqual([1, 2, 3, 4, 5]);
});
it('should not return array with number 17', () => {
  expect(arrayIds(18)).toStrictEqual([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    18,
    19,
  ]);
});

it('should return random number', () => {
  expect(randomId([1, 2])).not.toBe(5);
});

it('should return array with 4 unique elements', () => {
  let uniqueArr = [];
  const arr = [1, 1, 2, 3, 4, 4];
  expect(rndArrayOfIds(uniqueArr, arr)).not.toContain([1,1,4,4]);
  expect(rndArrayOfIds(uniqueArr, arr)).not.toContain([1,1,4,4,2]);
});

it('should return path to img', () => {
   const mode = 'people';
   const id = 32;
   expect(getImg(mode, id)).toBe(`people/32.jpg`)
 });


// jest.mock('./generateQuestion')
//  it('should return object.name from API', async() => {
//   checkMode('people').then(e=>{
//     expect(e).toBe({
//       image: 'people/4.jpg',
//       answers: ['Darth Vader', 'Leia Organa', 'Beru Whitesun lars', 'Zam Wesell'],
//       rightAnswer: 'Darth Vader',
//     })
//   })

//  });
