# Write your MySQL query statement below
select name,sum(t.amount) as balance
from Transactions t
left join Users u
on t.account=u.account
group by t.account
having balance>10000