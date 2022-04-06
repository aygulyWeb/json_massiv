// 8)  Преобразуйте его в JSON и выведите productName и categoryName  в document отсортированном виде 

const products = [
	{ productId: 1, productName: 'Товар 2', categoryId: 1 },
	{ productId: 2, productName: 'Товар 1', categoryId: 2 },
	{ productId: 3, productName: 'Товар 4', categoryId: 3 },
	{ productId: 4, productName: 'Товар 3', categoryId: 4 },
	{ productId: 5, productName: 'Товар 6', categoryId: 5 },
	{ productId: 6, productName: 'Товар 5', categoryId: 1 },
	{ productId: 7, productName: 'Товар 8', categoryId: 2 },
	{ productId: 8, productName: 'Товар 7', categoryId: 3 },
	{ productId: 9, productName: 'Товар 10', categoryId: 4 },
	{ productId: 10, productName: 'Товар 9', categoryId: 5 },
	{ productId: 11, productName: 'Товар 12', categoryId: 1 },
	{ productId: 12, productName: 'Товар 11', categoryId: 2 },
	{ productId: 13, productName: 'Товар 25', categoryId: 3 },
	{ productId: 14, productName: 'Товар 18', categoryId: 4 },
	{ productId: 15, productName: 'Товар 15', categoryId: 5 },
	{ productId: 16, productName: 'Товар 16', categoryId: 1 },
	{ productId: 17, productName: 'Товар 17', categoryId: 2 },
	{ productId: 18, productName: 'Товар 14', categoryId: 3 },
	{ productId: 19, productName: 'Товар 19', categoryId: 4 },
	{ productId: 20, productName: 'Товар 20', categoryId: 5 },
	{ productId: 21, productName: 'Товар 23', categoryId: 1 },
	{ productId: 22, productName: 'Товар 22', categoryId: 2 },
	{ productId: 23, productName: 'Товар 21', categoryId: 3 },
	{ productId: 24, productName: 'Товар 24', categoryId: 4 },
	{ productId: 25, productName: 'Товар 13', categoryId: 5 }
];


////////////////// JSON format

const jsonFormat = JSON.stringify(products);
console.log(jsonFormat);

/////////////// foreach

const foreachProducts = products.forEach(item => console.table(item));

//////////// map

let names = products.map(index => index.productName);
console.table(names);

const sortId = products.sort((a, b) => a.categoryId - b.categoryId);
console.log(sortId)

///////////// sort

const sortName = products.sort((a, b) => {
	if (a.productName < b.productName)
		return -1
	if (a.productName > a.productName)
		return 1
	return 0;
})

console.log(sortName);

//////////////// reduce

const summa = products.reduce((sum, current) => sum + current.categoryId, 0);
console.log(summa);


/////////////////////////////

const categories = [
	{ categoryId: 1, categoryName: 'Футболки' },
	{ categoryId: 2, categoryName: 'Майки' },
	{ categoryId: 3, categoryName: 'Носки' },
	{ categoryId: 4, categoryName: 'Джинсы' },
	{ categoryId: 5, categoryName: 'Брюки' },
];

// Перебор массив объектов
let namesCategory = categories.map(index => index.categoryName);
console.table(namesCategory);

//сортировка

const sortCategory = categories.sort((a, b) => {
	if (a.categoryName < b.categoryName)
		return -1
	if (a.categoryName > a.categoryName)
		return 1
	return 0;
})

console.log(sortCategory);