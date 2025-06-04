const snippets = [
    {
      id: 1,
      lines: [
        "#include <iostream>",
        "using namespace std;",
        "",
        "int main() {",
        "    cout << \"Hello, world!\" << endl;",
        "    for (int i = 1; i <= 5; i++) {",
        "        cout << \"Line \" << i << endl;",
        "    }",
        "    return 0;",
        "}"
      ]
    },
    {
      id: 2,
      lines: [
        "#include <iostream>",
        "using namespace std;",
        "",
        "int main() {",
        "    int sum = 0;",
        "    for (int i = 1; i <= 10; i++) {",
        "        sum += i;",
        "    }",
        "    cout << \"Suma este: \" << sum << endl;",
        "    return 0;",
        "}"
      ]
    },
    {
      id: 3,
      lines: [
        "#include <iostream>",
        "using namespace std;",
        "",
        "int main() {",
        "    int num;",
        "    cout << \"Introdu un numar: \";",
        "    cin >> num;",
        "    if (num % 2 == 0) {",
        "        cout << \"Par\" << endl;",
        "    } else {",
        "        cout << \"Impar\" << endl;",
        "    }",
        "    return 0;",
        "}"
      ]
    },
    {
      id: 4,
      lines: [
        "#include <iostream>",
        "using namespace std;",
        "",
        "int square(int x) {",
        "    return x * x;",
        "}",
        "",
        "int main() {",
        "    int n;",
        "    cout << \"Numar: \";",
        "    cin >> n;",
        "    cout << \"Patratul este: \" << square(n) << endl;",
        "    return 0;",
        "}"
      ]
    },
    {
      id: 5,
      lines: [
        "#include <iostream>",
        "using namespace std;",
        "",
        "int main() {",
        "    int a = 5, b = 10;",
        "    cout << \"Inainte: a=\" << a << \", b=\" << b << endl;",
        "    int temp = a;",
        "    a = b;",
        "    b = temp;",
        "    cout << \"Dupa: a=\" << a << \", b=\" << b << endl;",
        "    return 0;",
        "}"
      ]
    },
  ];
  
  export default snippets;