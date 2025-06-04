const snippets = [
    {
      id: 1,
      lines: [
        'def say_hello():',
        '    print("Hello, world!")',
        'say_hello()'
      ]
    },
    {
        id: 2,
        lines: [
          'def sum_even(n):',
          '    total = 0',
          '    for i in range(n + 1):',
          '        if i % 2 == 0:',
          '            total += i',
          '    return total',
          'print(sum_even(10))'
        ]
      },
      {
        id: 3,
        lines: [
          'def is_prime(n):',
          '    if n < 2:',
          '        return False',
          '    for i in range(2, int(n ** 0.5) + 1):',
          '        if n % i == 0:',
          '            return False',
          '    return True',
          'print(is_prime(7))'
        ]
      },

      {
  id: 4,
  lines: [
    'def reverse_string(s):',
    '    return s[::-1]',
    'print(reverse_string("python"))'
  ]
}
  ];
  export default snippets;
  