select "customers"."firstName", "customers"."lastName" , sum("amount") as total_sum
from "customers"
join "payments" using("customerId")
group by "customerId"
order by total_sum DESC;
