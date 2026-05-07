-- Handle duplicate emails by keeping only the most recent entry
DELETE FROM `User`
WHERE `id` NOT IN (
  SELECT MAX(id) FROM (
    SELECT MAX(id) as id FROM `User` GROUP BY `email`
  ) as max_ids
);

-- CreateIndex: Add unique constraint on email
CREATE UNIQUE INDEX `User_email_key` ON `User`(`email`);



