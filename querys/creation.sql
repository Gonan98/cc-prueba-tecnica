create table users(
	user_id INTEGER not null primary key,
	name VARCHAR(50) not null,
	last_name VARCHAR(50) not null
);

create table user_movements(
	user_movement_id SERIAL not null primary key,
	movement_type VARCHAR(50) not null,
	amount decimal not null,
	date DATE not null,
	user_id INTEGER not null, 
	
	foreign key (user_id) references users (user_id)
)

INSERT INTO users (user_id, name, last_name) VALUES
(1024, 'Miles', 'Morales'),
(99410, 'Lucia', 'Fernandez'),
(23481, 'Carlos', 'Rivas'),
(12894, 'Maria', 'Salazar'),
(4020, 'Javier', 'Pineda');

INSERT INTO user_movements (movement_type, amount, date, user_id) VALUES
('subscription', 450000, '2021-12-01', 1024),
('withdrawal', 120000, '2021-12-02', 1024),
('subscription', 980000, '2021-12-03', 99410),
('withdrawal', 300000, '2021-12-04', 99410),
('subscription', 1500000, '2021-12-05', 23481),
('withdrawal', 650000, '2021-12-06', 23481),
('subscription', 220000, '2021-12-07', 12894),
('withdrawal', 90000, '2021-12-08', 12894),
('subscription', 780000, '2021-12-09', 4020),
('withdrawal', 410000, '2021-12-10', 4020),
('subscription', 560000, '2021-12-11', 1024),
('withdrawal', 200000, '2021-12-12', 99410),
('subscription', 1340000, '2021-12-13', 23481),
('withdrawal', 500000, '2021-12-14', 12894),
('subscription', 890000, '2021-12-15', 4020),
('withdrawal', 10000, '2021-12-16', 1024),
('subscription', 310000, '2021-12-17', 99410),
('withdrawal', 720000, '2021-12-18', 23481),
('subscription', 640000, '2021-12-20', 12894),
('withdrawal', 950000, '2021-12-22', 4020);

