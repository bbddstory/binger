CREATE DATABASE `foreverj_phantom_zone` /*!40100 DEFAULT CHARACTER SET utf8 */;


CREATE TABLE `foreverj_phantom_zone`.`friends` (
  `user_id` VARCHAR(20) NOT NULL,
  `friend_id` VARCHAR(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='For storing friends lists of users.';


CREATE TABLE `foreverj_phantom_zone`.`recommendations` (
  `user_id` varchar(20) NOT NULL,
  `video_id` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='For storing recommendations lists of users.';


CREATE TABLE `foreverj_phantom_zone`.`users` (
  `id` varchar(20) NOT NULL DEFAULT '',
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `foreverj_phantom_zone`.`videos` (
  `id` varchar(20) NOT NULL,
  `eng_title` varchar(200) NOT NULL,
  `orig_title` varchar(200) DEFAULT NULL,
  `year` varchar(4) NOT NULL,
  `runtime` varchar(10) DEFAULT NULL,
  `stars` varchar(200) DEFAULT NULL,
  `director` varchar(100) DEFAULT NULL,
  `creator` varchar(100) DEFAULT NULL,
  `plot` varchar(800) DEFAULT NULL,
  `imdb` varchar(10) DEFAULT NULL,
  `rating` varchar(3) DEFAULT NULL,
  `douban` varchar(10) DEFAULT NULL,
  `mtime` varchar(10) DEFAULT NULL,
  `trailer` varchar(100) DEFAULT NULL,
  `featurette` varchar(100) DEFAULT NULL,
  `status` varchar(1) DEFAULT NULL,
  `category` varchar(20) DEFAULT NULL,
  `poster` varchar(200) DEFAULT NULL,
  `subtitle` varchar(200) DEFAULT NULL,
  `prod` varchar(20) DEFAULT NULL,
  `comments` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `video_idx` (`eng_title`,`year`,`category`,`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='A super table for storing all kinds of video, including movie, TV, documentary, animation and so on.';


CREATE TABLE `foreverj_phantom_zone`.`watch_later` (
  `user_id` varchar(20) NOT NULL,
  `video_id` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='For storing watcher later lists of users.';