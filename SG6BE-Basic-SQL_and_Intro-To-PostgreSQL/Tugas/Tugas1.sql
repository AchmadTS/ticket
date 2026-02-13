SELECT c.name, c.city, o.course AS book_title, o.price, o.order_date
FROM orders AS o JOIN customers AS c ON o.customer_id = c.id
WHERE (c.city = 'Bandung' OR c.city = 'Jakarta') AND o.price >= 180000 ORDER BY o.price DESC;