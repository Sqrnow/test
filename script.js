// 370 puntos
function findNaughtyStep(original, modified) {
  let o = modified.split('')
  let m = original.split('')
  if (original.length > modified.length) {
    o = original.split('')
    m = modified.split('')
  }
  
  console.log(o, m, 'hys')
  console.log(o.length, m.length)
  return o.find((elem, index) => 
    m[index] != elem) ?? ''
}



const original = 'abcd'
const modified = 'abcde'
console.log(findNaughtyStep(original, modified))// 'e'

const original2 = 'stepfor'
const modified2 = 'stepor'
console.log(findNaughtyStep(original2, modified2)) // 'f'

const original3 = 'iiiii'
const modified3 = 'iiiii'
console.log(findNaughtyStep(original3, modified3)) // ''




/* 

// 360 puntos
function findNaughtyStep(original, modified) {
  let o = original.split('')
  let m = modified.split('')
  console.log(o, m)
  console.log(o.length, m.length)
  if (o.length > m.length) {
    console.log('o más largo')
    return o.find((elem, index) => 
    m[index] != elem)
  } 
  return m.find((elem, index) => 
    o[index] != elem) ?? ''
}
 */
