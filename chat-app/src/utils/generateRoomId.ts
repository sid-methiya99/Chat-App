import { customAlphabet } from 'nanoid'

const alphabet = 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz123456789' // no O, 0, I, l
const nanoId = customAlphabet(alphabet, 6)
export const roomId = nanoId().toUpperCase()
