# Write your MySQL query statement below
SELECT SchoolA.student_name member_A, SchoolB.student_name member_B, SchoolC.student_name member_C
FROM SchoolA, SchoolB, SchoolC
WHERE SchoolA.student_id != SchoolB.student_id AND SchoolB.student_id != SchoolC.student_id AND
SchoolA.student_id != SchoolC.student_id AND SchoolA.student_name != SchoolB.student_name AND SchoolB.student_name != SchoolC.student_name AND SchoolA.student_name != SchoolC.student_name