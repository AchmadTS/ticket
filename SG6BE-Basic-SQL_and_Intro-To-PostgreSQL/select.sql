SELECT * FROM orders;

SELECT * FROM orders WHERE order_date BETWEEN '2024-01-01' AND '2024-01-31';

SELECT * FROM orders WHERE price > 250000;

SELECT * FROM orders WHERE course LIKE '%SQL%';

SELECT course, price FROM orders ORDER BY price ASC LIMIT 3;

SELECT DISTINCT city FROM customers;

SELECT c.name, c.city, o.course, o.price, o.order_date FROM orders AS o JOIN customers AS c ON o.customer_id = c.id;

SELECT c.city, SUM(o.price) AS total_spend FROM orders AS o JOIN customers AS c ON o.customer_id = c.id GROUP BY c.city HAVING SUM(o.price) > 1000000;