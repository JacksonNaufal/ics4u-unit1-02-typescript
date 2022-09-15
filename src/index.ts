/**
 * The program shows how to get input
 *   and deal with numbers.
 * By:      Jackson Naufali
 * Version: 1.0
 * Since:   2020-01-01
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

// let ageNumber: number

const ageString = prompt('How long is your wood?(m) ')

const logNumber = parseFloat(ageString)
const overallLog = logNumber * 20
const answer = 1100 / overallLog
console.log(`Amount of logs is >  ${answer}`)

console.log('\nDone.')
