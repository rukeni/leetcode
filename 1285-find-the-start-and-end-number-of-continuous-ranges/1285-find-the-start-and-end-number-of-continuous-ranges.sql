# Write your MySQL query statement below
select  min(x.log_id) 'start_id', 
        max(x.log_id) 'end_id'
from(
select l.log_id, 
       l.log_id - row_number() over(order by l.log_id asc) 'gap'
from logs l
)x 
group by x.gap