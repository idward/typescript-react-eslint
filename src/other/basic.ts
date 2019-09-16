export default class BasicTypescript {
  static info() {
    console.log('This is from basic component');
  }
}

function hello<T>(...args: T[]): T[] {
  console.log(args.length);

  return args;
}

hello<string | number>('1', 2);

/**
 * 枚举
 */
enum OrderStatus {
  Start = 'S',
  Unpaid = 'U',
}

console.log(OrderStatus.Start);
console.log(OrderStatus.Unpaid);

interface A {
  a: number;
  b: string;
}

interface B {
  b: string;
  c: number;
}

interface C {
  b: string;
  d: boolean;
}

/**
 * 联合
 */
type Union = A | B | C;

const union: Union = {
  a: 1,
  b: '123',
};

console.log(union);

/**
 * 交叉
 */
type Cross = A & B & C;

const cross: Cross = {
  a: 1,
  b: '123',
  c: 3,
  d: false,
};

console.log(cross);

/**
 * 类型断言
 */
// interface Teacher {
//   teach(): void;
// }

// interface Student {
//   learn(): void;
// }

// function getPerson(): Teacher | Student {
//   return {} as Teacher;
// }

// const person = getPerson();
// (<Teacher>person).teach();
// (<Student>person).learn();

// function isTeacher(p: Teacher | Student): p is Teacher {
//   return (<Teacher>p).teach !== undefined;
// }

// if(isTeacher(person)) {
//     person.teach();
// } else {
//     person.learn();
// }

/**
 * Promise all(所有Promise)
 * 所有请求成功才得到结果
 */
function fetchUserInfo(userId: string): Promise<any> {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve({ userId });
    }, 1000);
  });
}

function fetchCartInfo(userId: string): Promise<any> {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve({ userId });
    }, 1200);
  });
}

function fetchGoodsInfo(goodsId: string): Promise<any> {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve({ goodsId });
    }, 1500);
  });
}

Promise.all([
  fetchUserInfo('123'),
  fetchCartInfo('1235'),
  fetchGoodsInfo('AS34567'),
]).then(response => {
  console.log(response);
});

/**
 * ReadOnly 只读
 */
interface Point {
  readonly x: number;
  readonly y: number;
}

// const p: Point = { x: 10, y: 3 };
// p.x = 12;

let a = [2, 4, 5];

const n: ReadonlyArray<number> = a;
// n.push(6);
// n.length = 100;
a = n as number[];
