{
  let test: string = 'テストです';
  let test2: boolean = false;
  let test3: number = 111;

  const array: string[] = ['Java', 'Ruby', 'Python'];
  const array2: Array<string> = ['この', '書き方でも', 'いけるが', '使わない'];
  const array3: number[][] = [[10, 20], [30, 40]];

  const Object: { [index: string]: string } = { name: '青葉' };

  interface StringMap {
    [index: string]: string
  }

  const Object2: StringMap = { name: 'test' }

  enum Sex {
    MALE,
    FEMALE,
    UNKNOWN
  }
  let m: Sex = Sex.MALE;
}

{
  const data: [string, number, boolean] = ['hoge', 10.355, false];
}

{
  let data: string | boolean;
  data = 'hoge';
  data = false;
}

{
  let data: (string | number)[] = ['ほげ', 108, 'hoge'];
}

{
  type FooType = [ string, number, boolean ];
  let data: FooType = ['abc', 108, false];
}

{
  type Season = 'spring' | 'summer' | 'autumn' | 'winter';
  function getScene(s: Season) {
  }
  getScene('spring');
}

{
  function triangle(base: number, height: number): number {
    return base * height / 2;
  }
}

// 関数の型を明示する
{
  let triangle: (base: number, height: number) => number =
    function (base: number, height: number): number {
      return base * height / 2;
    }
}

{
  function showTime(time: Date = new Date()): string {
    return '現在の時刻：' + time.toLocaleString();
  }
}

{
  const func = (base: number = 10, height: number = 20): number => {
    return base * height / 2
  }
}

{
  function process(value: string | number) {
    if (typeof value === 'string') {
      return value.toUpperCase();
    } else {
      return value.toFixed(1);
    }
  }
}