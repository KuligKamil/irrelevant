#!/usr/bin/env ./node_modules/.bin/ts-node-script
export function sum(a: number, b: number) {
  return a + b
}

// 1. Array of numbers.
const numbers = [3, 1, -3, 3, 5, 2, -4, 4, 4, 4, -150]

// 1.0. Return last element of an array.
const last: number | null = null

// 1.1. Check if array contains 5.
const has5: boolean | null = null

// 1.2. Return array with each element being squared.
const squared: number[] | null = null

// 1.3. Implement remove(arr, num) which removes "num" from "arr" if it's present.
function remove(arr: number[], num: number): number[] | null {
  return null
}

// 1.4. Retrieve only unique values from the array above.
const unique: number[] | null = null

// 1.5. Sum of all positive numbers.
const sumOfPositive: number | null = null

// 1.6. Calculate median and mean in the array above.
const medianAndMean: { median: number; mean: number } | null = null

// 1.7 Implement n! without recursion.
function factorial(n: number): number | null {
  return null
}

// 1.8. Implement rotateLeft(arr, num) which rotates the "arr" by "num" to the left
// For example rotateLeft(numbers, 2) should return [-3, 3, 5, 2, -4, 4, 4, 4, -150, 3, 1]
function rotateLeft(arr: number[], num: number): number[] | null {
  return null
}

// 2. Array of objects.

interface User {
  id: number
  name: string
  age: number
  group: 'editor' | 'admin'
}

const users: User[] = [
  { id: 11, name: 'Adam Raymond Richard', age: 23, group: 'editor' },
  { id: 47, name: 'John Noah Oliver', age: 28, group: 'admin' },
  { id: 85, name: 'William Liam', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver James', age: 28, group: 'admin' },
]

// 2.0. Remove first element from the array, then add it, then remove last element from the array, then add it.

// 2.1. Retrieve only administrators from the array above.
const administrators: User[] | null = null

// 2.2. Retrieve user with name 'William Liam'.
const williamLiam: User | null = null

// 2.3. Check if there's any editor with age > 30.
const isEditorWithAge30: boolean | null = null

// 2.4. Retrieve all users initials (for example above it should return ['ARR', 'JNO', 'WL', 'OJ']).
const initials: string[] | null = null

// 2.5. Implement removeById(arr, id) which removes user with "id" field equal to "id" from "arr" (if it's present).
function removeById(arr: User[], id: number): User[] | null {
  return null
}

// 2.6. Get the the smallest age.
const smallestAge: number | null = null

// 2.7 Implement groupBy(arr, callback) which accepts callback that will be used to categorize array elements.
// For example: groupBy(users, ({ group }) => group) should return:
// {
//   admin: [
//     { id: 47, name: 'John Noah Oliver', age: 28, group: 'admin' },
//     { id: 97, name: 'Oliver James', age: 28, group: 'admin' }
//   ],
//   editor: [
//     { id: 11, name: 'Adam Raymond Richard', age: 23, group: 'editor' },
//     { id: 85, name: 'William Liam', age: 34, group: 'editor' },
//   ]
// }
function groupBy<T, U extends string | number | symbol>(arr: T[], callback: (item: T) => U): Record<U, T[]> | null {
  return null
}

// 2.8 Return an array of objects showing average age for each group
const averageAgeOfGroups: { group: User['group']; averageAge: number } | null = null

// 2.9 Return number of words in the following poem:
const poem = `Roses are red,
  Violets are blue.
  Vodka is cheaper,
  than dinner for two`

const numberOfWords: number | null = null
