import { deterministicInterfaceColor } from 'utils/Colors'

describe('.deterministicInterfaceColor', () => {
  it('always returns the same color for the same input', () => {
    const number = Math.floor(Math.random())
    const color = deterministicInterfaceColor(number)

    Array.from({ length: 5 }, () => {
      expect(deterministicInterfaceColor(number)).toStrictEqual(color)
    });
  })
})
