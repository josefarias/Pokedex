export function getIdFromUrl(url: string = ""): number {
  const tokenizedUrl = url.split('/')
  return parseInt(tokenizedUrl[tokenizedUrl.length - 2])
}

// NOTE: This is needed because PokeAPI tends to return resources in the form of:
//  {
//    resource: {
//      join_table_attr1,
//      join_table_attr2,
//      actual_resource: {
//        attr1,
//        attr2
//      }
//    }
//  }
//  `.extractFromNestedResource` can be used to obtain `actual_resource` attrs when needed.
export function extractFromNestedResource(attrs: any, resourceName: string, attrName: string) {
  if (!attrs[resourceName]) return

  return attrs[resourceName][attrName]
}
