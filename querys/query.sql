-- Total de aportes y retiros para diciembre de 2021

SELECT
  movement_type,
  SUM(amount) AS total_amount
FROM user_movements
WHERE date >= '2021-12-01'
  AND date < '2022-01-01'
GROUP BY movement_type;

-- Cantidad y Monto promedio de aportes y rescates por fecha.

SELECT
  date,
  movement_type,
  COUNT(*) AS movement_count,
  AVG(amount) AS average_amount
FROM user_movements
GROUP BY date, movement_type
ORDER BY date;

-- El nombre y apellido del usuario con más aportes

SELECT
  u.name,
  u.last_name,
  COUNT(m.user_movement_id) AS total_subscriptions
FROM users u
JOIN user_movements m ON m.user_id = u.user_id
WHERE m.movement_type = 'subscription'
GROUP BY u.user_id, u.name, u.last_name
ORDER BY total_subscriptions DESC
LIMIT 1;