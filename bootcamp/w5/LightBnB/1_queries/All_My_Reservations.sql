SELECT reservations.id, properties.title, reservations.start_date, properties.cost_per_night, avg(property_reviews.rating) as average_rating
FROM reservations
JOIN properties on properties.id = reservations.property_id
JOIN property_reviews ON property_reviews.reservation_id = reservations.id
WHERE reservations.guest_id = 1
GROUP BY reservations.id, properties.title, properties.cost_per_night
ORDER BY reservations.start_date;