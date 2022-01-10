# Write your MySQL query statement below
SELECT W.name as warehouse_name, sum(volume*units) as volume 
FROM Warehouse W JOIN (SELECT *, (Width * Length * Height) as volume FROM Products GROUP BY product_id) P
ON W.product_id = P.product_id
GROUP BY name