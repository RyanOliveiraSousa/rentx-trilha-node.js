import { test } from '../../test/utils'
import isServer from './isServer'

test('isServer', t => {
  // we have jsdom's window
  // isServer should present false
  t.false(isServer)
})
