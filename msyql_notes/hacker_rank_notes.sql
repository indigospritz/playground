-- THE PADS
SELECT CONCAT (NAME, '(', LEFT(OCCUPATION, 1), ')')
FROM OCCUPATIONS
ORDER BY NAME;

SELECT CONCAT('There are a total of ', COUNT(OCCUPATION), ' ', LOWER(OCCUPATION), 's.')
FROM OCCUPATIONS
GROUP BY OCCUPATION
ORDER BY COUNT(OCCUPATION), OCCUPATION;


-- WEATHER OBSERVATION 19
SELECT 
    ROUND(SQRT(POW(MIN(LAT_N) - MAX(LAT_N), 2) + POW(MIN(LONG_W) - MAX(LONG_W), 2)), 4)
FROM STATION;


-- WEATHER OBSERVATION 18
SELECT
    ROUND(ABS(MIN(LAT_N) - MAX(LAT_N)) + ABS(MIN(LONG_W) - MAX(LONG_W)), 4)
FROM STATION;


-- WEATHER OBSERVATION 17
SELECT ROUND(LONG_W, 4)
FROM STATION
WHERE LAT_N > 38.7780
ORDER BY LAT_N
LIMIT 1;


-- WEATHER OBSERVATION 16
SELECT ROUND(MIN(LAT_N), 4)
FROM STATION
WHERE LAT_N > 38.7780;


-- WEATHER OBSERVATION 15
SELECT ROUND(LONG_W, 4)
FROM STATION
WHERE LAT_N < 137.2345
ORDER BY LAT_N DESC
LIMIT 1;


-- WEATHER OBSERVATION 14
SELECT ROUND(MAX(LAT_N), 4)
FROM STATION
WHERE LAT_N < 137.2345
LIMIT 1;


-- WEATHER OBSERVATION 13
SELECT ROUND(SUM(LAT_N), 4) FROM STATION WHERE LAT_N BETWEEN 38.7880 AND 137.2345;



-- WEATHER OBSERVATION 12
SELECT DISTINCT CITY
FROM STATION
WHERE NOT REGEXP_LIKE(`CITY`, '^[aeiou]', 'i') AND NOT REGEXP_LIKE(`CITY`, '[aeiou]$', 'i');


-- WEATHER OBSERVATION 11
SELECT DISTINCT CITY
FROM STATION
WHERE REGEXP_LIKE(`CITY`, '^[^aeiou]|[^aeiou]$', 'i');



-- WEATHER OBSERVATION 10
SELECT DISTINCT CITY
FROM STATION
WHERE REGEXP_LIKE(`CITY`, '[^aeiou]$', 'i');


-- WEATHER OBSERVATION 9
SELECT DISTINCT CITY
FROM STATION
WHERE REGEXP_LIKE(`CITY`, '^[^aeiou]', 'i');


-- WEATHER OBSERVATION 8
SELECT DISTINCT CITY
FROM STATION
WHERE REGEXP_LIKE(`CITY`, '^[aeiou]', 'i') AND REGEXP_LIKE(`CITY`, '[aeiou]$', 'i');


-- WEATHER OBSERVATION 7
SELECT DISTINCT CITY
FROM STATION
WHERE REGEXP_LIKE(`CITY`, '[aeiou]$', 'i');


-- WEATHER OBSERVATION 6
SELECT DISTINCT CITY
FROM STATION
WHERE REGEXP_LIKE(`CITY`, '^[AEIOU]', 'c');


-- pattern (case insensitive) beginning with b
SELECT * FROM pet WHERE name LIKE 'b%';

-- pattern (case insensitive) ending with fy
SELECT * FROM pet WHERE name LIKE '%fy';


-- pattern (case insensitive) containing (anywhere) w
SELECT * FROM pet WHERE name LIKE '%w%';


--  find names containing exactly five characters
SELECT * FROM pet WHERE name LIKE '_____';


-- WEATHER OBSERVATION 3
SELECT DISTINCT CITY FROM STATION
WHERE MOD(ID,2) = 0;



-- INTERVIEWS
SELECT
	con.contest_id,
    con.hacker_id,
    con.name,
    SUM(sg.total_submissions),
    SUM(sg.total_accepted_submissions),
    SUM(vg.total_views),
    SUM(vg.total_unique_views)
FROM contests con
JOIN colleges col ON con.id = col.id
JOIN challenges AS cha ON col.id = cha.id
LEFT JOIN
	(SELECT ss.challenge_id,
		SUM(ss.total_submissions) AS total_submissions,
		SUM(ss.total_accepted_submissions) AS total_accepted_submissions
	FROM submission_stats ss
    GROUP BY ss.challenge_id)
    sg USING (challenge_id)
    )





