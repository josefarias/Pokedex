// @ts-nocheck
import { camelize } from "./StringHelpers"

export function enforceDataIntegrity(obj: Object, defaultValues: Object) {
  Object.keys(defaultValues).forEach((key: string) => {
    if (obj[camelize(key)]) return

    obj[camelize(key)] = defaultValues[key]
  })
}
