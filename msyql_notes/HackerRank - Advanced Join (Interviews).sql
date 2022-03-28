SELECT
	ss.challenge_id,
    SUM(ss.total_submissions) AS total_submissions,
    SUM(ss.total_accepted_submissions) AS total_accepted_missions
FROM submission_stats AS ss GROUP by ss.challenge_id;

SELECT
	vs.challenge_id,
    SUM(vs.total_views) AS total_views,
    SUM(vs.total_unique_views) AS total_unique_views
FROM view_stats AS vs
GROUP BY vs.challenge_id;

SELECT
	con.contest_id,
    con.hacker_id,
    con.name,
    SUM(sg.total_submissions),
    SUM(sg.total_accepted_submissions),
    SUM(vg.total_views),
    SUM(vg.total_unique_views)
FROM contests AS con
JOIN colleges AS col USING (contest_id)
JOIN challenges AS cha USING (college_id)
LEFT JOIN
	(SELECT ss.challenge_id,
		SUM(ss.total_submissions) AS total_submissions,
		SUM(ss.total_accepted_submissions) AS total_accepted_submissions
	FROM submission_stats AS ss
    GROUP BY ss.challenge_id) AS sg USING (challenge_id)
LEFT JOIN
    (SELECT vs.challenge_id,
		SUM(vs.total_views) AS total_views,
        SUM(vs.total_unique_views) AS total_unique_views
	FROM view_stats AS vs
	GROUP BY vs.challenge_id) AS vg USING (challenge_id)
GROUP BY con.contest_id, con.hacker_id, con.name
HAVING SUM(sg.total_submissions) +
	   SUM(sg.total_accepted_submissions) +
       SUM(vg.total_views) +
       SUM(vg.total_unique_views) > 0
ORDER BY con.contest_id;