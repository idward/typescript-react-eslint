/**
 * 抽象类(不能被实例化)
 * 包含抽象方法
 */
abstract class Department {
  constructor(public name: string) {}

  abstract printMessage(): void;

  printName() {
    console.log('department name is ' + this.name);
  }
}

class AccountingDepartment extends Department {
  constructor(name: string) {
    super(name);
  }

  printMessage() {
    console.log('this is meeting message');
  }

  sayHello() {
    console.log('hello');
  }
}

// 可以实例化子类
const meeting: Department = new AccountingDepartment('AAAA');
meeting.printName();
meeting.printMessage();

export default AccountingDepartment;
