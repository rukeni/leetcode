# Write your MySQL query statement below
SELECT
    t1.id,
    t1.name
FROM
    students t1
LEFT OUTER JOIN
    departments t2
ON
    t1.department_id = t2.id
WHERE
    t2.id IS NULL;