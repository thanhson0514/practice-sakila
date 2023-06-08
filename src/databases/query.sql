!-- Level 1
# 3. Write a SQL query to return the top 5 most rented films in the database, along with the number of times they have been rented.
SELECT `film`.film_id, `film`.title, COUNT(*) AS 'the number of times they have been rented'  
FROM `film`
LEFT JOIN (
	SELECT `inventory`.* FROM `inventory`
    LEFT JOIN `rental`
    ON `rental`.inventory_id = `inventory`.inventory_id
) AS inventory_rental
ON `film`.`film_id` = inventory_rental.film_id
GROUP BY `film`.film_id, `film`.title
ORDER BY COUNT(*) DESC
LIMIT 5;

# 7. Write a SQL query to return the names of all actors who have appeared in more than 20 films in the database.
SELECT
    CONCAT(
        actor.first_name,
        ' ',
        actor.last_name
    ) AS full_name
FROM film_actor
    LEFT JOIN actor ON actor.actor_id = film_actor.actor_id
GROUP BY film_actor.actor_id
HAVING
    COUNT(film_actor.actor_id) > 20;

# 8. Write a SQL query to return the titles of all films in the database that have a rating of 'PG-13' and a length of more than 120 minutes.
SELECT title
FROM film
WHERE
    rating = 'PG-13'
    AND length > 120;

!-- Level 2
# 1. Write a SQL query to return the top 10 customers who have generated the most revenue for the store, including their names and total revenue generated.
SELECT 
	customer.first_name, 
    customer.last_name, 
    SUM(payment.amount) AS 'total revenue generated'
FROM customer
INNER JOIN payment
ON customer.customer_id = payment.customer_id
GROUP BY 
	customer.customer_id, 
    customer.first_name, 
    customer.last_name
ORDER BY COUNT(*) DESC
LIMIT 10;

# 3. Write a SQL query to return the titles of all films in the database that have been rented at least once but never returned.
SELECT DISTINCT title
FROM film
    INNER JOIN inventory ON inventory.film_id = film.film_id
    LEFT JOIN rental ON inventory.inventory_id = rental.inventory_id
WHERE return_date IS NULL;

# 4. Write a SQL query to return the names of all actors who have appeared in at least one film in each category in the database.
SELECT first_name, last_name
FROM actor
WHERE actor_id IN (
        SELECT actor_id
        FROM film_actor
        WHERE film_id IN (
                SELECT
                    film_category.film_id
                FROM
                    film_category
                GROUP BY
                    film_category.category_id,
                    film_category.film_id
            )
    )