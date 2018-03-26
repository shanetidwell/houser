Insert INTO property (name, address, city, state, zip, image_url, monthly_mortgage, desired_rent, user_id) 
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);

select * from property
where user_id = $9;

