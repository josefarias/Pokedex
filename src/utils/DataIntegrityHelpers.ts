// @ts-nocheck
import { camelize } from './StringHelpers'

// NOTE: Another way to do this would be to give each property default values.
//  Using this pattern allows us to set a `defaultValues: ServerInterface`
//  constant for all models. Which gives us a way to use the same defaults for
//  class properties and empty versions of our models.
export function enforceDataIntegrity(obj: Object, defaultValues: Object) {
  Object.keys(defaultValues).forEach((key: string) => {
    if (obj[camelize(key)]) return

    obj[camelize(key)] = defaultValues[key]
  })
}
