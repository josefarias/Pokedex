// @ts-nocheck
import { camelize } from "./StringHelpers"

// NOTE: Another way to do this would be to give each property default values.
//  Using this pattern assumes we're creating a `defaultValues: ServerInterface`
//  constant for all models. That way, TS will call us out if we forget to
//  set a default value.
export function enforceDataIntegrity(obj: Object, defaultValues: Object) {
  Object.keys(defaultValues).forEach((key: string) => {
    if (obj[camelize(key)]) return

    obj[camelize(key)] = defaultValues[key]
  })
}
