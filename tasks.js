console.log("1-masala");
// 1. Berilgan massivning ichidan berilgan qiymat bor yoki yoqligini tekshiruvchi funksiya yozing
const names = ["Hazel", "John", "Lucy", "Sam", "Mike"];

let index = names.indexOf("Johnn");

function borYokiYoq(names, index) {
  if (index === -1) {
    return "Bu so'z mavjud emas";
  } else {
    return "Bu so'z mavjud";
  }
}

console.log(borYokiYoq(names, index));

console.log("2-masala");
// 2. Quyidagi kabi obyektlardan tashkil topgan massiv berilganda uning ichidan berilgan qiymatlarga mos keluvhi funksiya yozing

const products = [
  { id: 1, name: "Laptop", brand: "Dell", price: 999.99 },
  { id: 2, name: "Smartphone", brand: "Samsung", price: 699.99 },
  { id: 3, name: "Tablet", brand: "Apple", price: 499.99 },
  { id: 4, name: "Desktop", brand: "HP", price: 1199.99 },
];

function filterProducts(arr, key, value) {
  let array = [];

  array = arr.filter((v) => {
    return v[key] == value;
  });

  return array;
}

console.log(filterProducts(products, "brand", "Dell"));
// console.log(filterProducts(products, 'price', 699.99));

console.log("3-masala");
// 3. Quyidagi kabi massiv berilganda uning ichidan yoshlarining o'rtachasini topuvchi funksiya yozing

const students = [
  { name: "Alice", age: 22, grades: [85, 90, 92, 88] },
  { name: "Bob", age: 20, grades: [78, 85, 80, 88] },
  { name: "Charlie", age: 21, grades: [90, 92, 89, 94] },
];

function ortachaYosh(array, key) {
  let jami = 0;

  for (const v of array) {
    jami += v[key];
  }

  return jami / array.length;
}

console.log(ortachaYosh(students, "age"));

console.log("4-masala");
// Quyidagi kabi massivni priority boyicha saralab beradigan funksiya yozing

const tasks = [
  { taskName: "Task A", priority: "High", deadline: "2023-03-15" },
  { taskName: "Task B", priority: "Medium", deadline: "2023-04-10" },
  { taskName: "Task C", priority: "Low", deadline: "2023-03-01" },
  { taskName: "Task D", priority: "High", deadline: "2023-03-20" },
];

function sortByDeadline(tasks) {
  return tasks.sort((a, b) => {
    return new Date(a.deadline) - new Date(b.deadline);
  });
}

console.log(sortByDeadline(tasks));

// Should output:
// [
//   { taskName: 'Task C', priority: 'Low', deadline: '2023-03-01' },
//   { taskName: 'Task A', priority: 'High', deadline: '2023-03-15' },
//   { taskName: 'Task D', priority: 'High', deadline: '2023-03-20' },
//   { taskName: 'Task B', priority: 'Medium', deadline: '2023-04-10' },
// ]

console.log("5-masala");
// Berilgan massivdan berilgan oraliqdan berilgan oraliqqacha bolgan qiymatlarni olib beruvchi funksiya yozing

let massiv = [1, 5, 34, "Hello", 78, "world"];

function takingValue(arr) {
  let newMassiv = arr.slice(2, 4);

  return newMassiv;
}

console.log(takingValue(massiv));
