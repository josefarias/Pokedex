const interfaceFriendlyColors = ['water', 'grass', 'electric', 'fire', 'fairy']

interface IColor {
  [name: string]: string
}

export const Colors: IColor = {
  white: '#FFFFFF',
  black: '#000000',
  gray: '#838D98',
  charcoal: 'rgb(36,36,36)',
  bug: '#62A571',
  dark: '#050706',
  dragon: '#75B9C8',
  electric: '#FFC854',
  fairy: '#E26BA4',
  fighting: '#AF5C3F',
  fire: 'rgb(254, 109, 99)',
  flying: '#83A3AA',
  ghost: '#814EA9',
  grass: '#46B55F',
  ground: '#E49D5B',
  ice: '#87C9FF',
  normal: '#C7AAB3',
  poison: '#A665D9',
  psychic: '#E888B6',
  rock: '#95673C',
  steel: '#8CB19B',
  water: 'rgb(65, 159, 237)'
}

export function deterministicInterfaceColor(index: number): string {
  const hashedIndex = hashedIndexForInterfaceColor(index)
  const color = interfaceFriendlyColors[hashedIndex % interfaceFriendlyColors.length]
  return Colors[color]
}

function hashedIndexForInterfaceColor(index: number): number {
  return require("hash-int")(index)
}
