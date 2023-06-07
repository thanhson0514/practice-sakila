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

