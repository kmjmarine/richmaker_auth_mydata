-- migrate:up
-- migrate:up
CREATE TABLE `histories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL,
  `user_name` varchar(20) NOT NULL,
  `provider_id` int NOT NULL,
  `category_id` int NOT NULL,
  `is_monthly` tinyint NOT NULL DEFAULT (false),
  `amount` decimal(10,2) NOT NULL,
  `is_get` tinyint NOT NULL DEFAULT (false),
  `getted_at` timestamp NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- migrate:down
DROP TABLE `histories`


-- migrate:down

