# Write your MySQL query statement below
select employee.employee_id, team_size from employee
inner join
(select team_id, count(employee_id) team_size from employee
group by team_id)t1
on employee.team_id=t1.team_id