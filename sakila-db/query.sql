!-- Level 1

# 7. Write a SQL query to return the names of all actors who have appeared in more than 20 films in the database.
SELECT
    CONCAT(
        actor.first_name,
        ' ',
        actor.last_name
    ) AS full_name
FROM film_actor
    RIGHT JOIN actor ON actor.actor_id = film_actor.actor_id
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
