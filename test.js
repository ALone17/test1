// Список курсов
let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
    { name: "Courses in France", prices: [null, 100] }
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];



const cours = courses.filter(el => filterPrice(el.prices, requiredRange2));

// Нужен нижний порог и верхний порог цен



function filterPrice(prices, required) {
    let check = true;
    let max = 0;
    required.forEach((el) => { if (el >= max) max = el });
    prices.forEach((el, index) => {
        if (index === 0 && el > max) check = false;
        if (index === 0 && el === null && prices[prices.length - 1] > max) check = false;
    });

    return check;
}


console.log(cours);

// как то так 😊 тут много чего нужно объяснять 