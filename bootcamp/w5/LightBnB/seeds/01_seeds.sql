INSERT INTO users (name, email, password)
VALUES ('Justin', 'justin@gmail.com','$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
('Nikta', 'nikta@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
('JOE', 'joe@hotmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u');

INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces,number_of_bathrooms, number_of_bedrooms, country,street, city, province, post_code, active)
VALUES (1 , 'modern home', 'description', 'hi',  'hello', 80, 1,2,2, 'canada', 'front', 'Toronto', 'Ontario', 'm5j0a7', TRUE),
(2 , 'stunning cottage', 'description', 'test', 'tester', 800, 5,4,4, 'canada', 'back', 'Toronto', 'Ontario', 'm5j0a8', TRUE),
(3 , 'historical', 'description', 'pic', 'pics', 160, 1,1,2, 'canada', 'middle', 'Montreal', 'Quebec', 'l4j 6j2', FALSE);

INSERT INTO reservations (start_date, end_date, property_id, guest_id)
VALUES ('2018-09-11', '2018-09-26', 1, 1),
('2019-01-04', '2019-02-01', 2, 2),
('2021-10-01', '2021-10-14', 3, 3);

INSERT INTO property_reviews (guest_id,property_id,reservation_id,rating,message)
VALUES (1, 1, 1, 10, 'message'),
(2, 2, 1, 8, 'message'),
(3, 3, 1, 6, 'message');

