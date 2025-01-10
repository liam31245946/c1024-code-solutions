select "countries"."name" as countries, count("cityId")as cities

from "cities"
join "countries" using("countryId")
group by "countries"."countryId"
