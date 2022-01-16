# Write your MySQL query statement below
SELECT
    t.customer_id,
    COUNT(t.visit_id) AS "count_no_trans"
FROM
    (SELECT
        t1.visit_id,
        t1.customer_id
    FROM
        visits t1
    LEFT OUTER JOIN
        transactions t2
    ON
        t1.visit_id = t2.visit_id
    WHERE
        t2.transaction_id IS NULL) t
GROUP BY
    t.customer_id;