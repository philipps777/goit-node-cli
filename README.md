# goit-node-cli

## Description

This is a simple CLI application that allows you to work with contacts. You can add, remove, list and get contacts by id.

## Installation

To install the application, you need to clone the repository and install the necessary dependencies. To do this, run the following commands:

```bash
git clone https://github.com/philipps777/goit-node-cli
cd goit-node-cli
npm install
```


## Usage

To check available options, you need to run the following command:

```bash
node index.js --help
```
## Rоманди в терміналі для перевірки

Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)

```
node index.js -a list
```

Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.

```
node index.js -a get -i 05olLMgyVQdWRwgKfg5J6
```

Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту

```
node index.js -a add -n Mango -e mango@gmail.com -p 322-22-22
```

Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.

```
node index.js -a remove -i qdggE76Jtbfd9eWJHrssH
```
