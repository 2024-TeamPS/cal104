CREATE SCHEMA IF NOT EXISTS user_service_schema;

CREATE TABLE user_service_schema.users (
	user_id BIGINT PRIMARY KEY, -- 소셜 API 에서 제공하는 고유 유저코드
	nickname VARCHAR(10) NOT NULL, -- 한글, 영문, 숫자 중 한 가지 반드시 포함, 공백 가능
	social_type VARCHAR(6) NOT NULL, -- kakao
	join_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	is_deleted BOOLEAN NOT NULL DEFAULT FALSE,
	delete_time TIMESTAMP NULL
);

CREATE SCHEMA IF NOT EXISTS plan_service_schema;

CREATE TABLE plan_service_schema.plans (
	plan_id SERIAL PRIMARY KEY,
	group_id INT NOT NULL, -- FK
	user_id BIGINT NOT NULL, -- FK
	plan_title VARCHAR(50) NOT NULL,
	plan_content TEXT NOT NULL,
	start_time TIMESTAMP NULL, -- '하루종일' 체크시 0:00
	end_time TIMESTAMP NULL, -- '하루종일' 체크시 23:59
	map_inform TEXT NULL, -- 위치정보 API 기반
	create_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE SCHEMA IF NOT EXISTS group_service_schema;

CREATE TABLE group_service_schema.groups (
	group_id SERIAL PRIMARY KEY,
	group_name VARCHAR(20) NOT NULL,
	group_master BIGINT NOT NULL
);

CREATE SCHEMA IF NOT EXISTS group_member_service_schema;

CREATE TABLE group_member_service_schema.group_members (
	user_id BIGINT NOT NULL,
	group_id INT NOT NULL
);

CREATE SCHEMA IF NOT EXISTS chat_service_schema;

CREATE TABLE chat_service_schema.chats (
	chat_id SERIAL PRIMARY KEY,
	group_id INT NOT NULL,
	user_id BIGINT NOT NULL,
	chat_content TEXT NOT NULL,
	create_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	is_deleted BOOLEAN DEFAULT FALSE,
	delete_time TIMESTAMP NULL
);

CREATE SCHEMA IF NOT EXISTS notice_service_schema;

CREATE TABLE notice_service_schema.notices (
	notice_id SERIAL PRIMARY KEY,
	notice_title VARCHAR(50) NOT NULL,
	notice_content TEXT NOT NULL,
	notice_type VARCHAR(10) NOT NULL, -- public, error, etc
	create_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	update_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	is_deleted BOOLEAN DEFAULT FALSE,
	delete_time TIMESTAMP NULL
);

CREATE SCHEMA IF NOT EXISTS alert_service_schema;

CREATE TABLE alert_service_schema.alerts (
	alert_id SERIAL PRIMARY KEY,
	user_id BIGINT NOT NULL,
	alert_content VARCHAR(200) NOT NULL,
	alert_type VARCHAR(10) NOT NULL,
	target_code INT NOT NULL,
	create_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	is_checked BOOLEAN NOT NULL DEFAULT FALSE,
	is_deleted BOOLEAN NOT NULL DEFAULT FALSE,
	delete_time TIMESTAMP NULL
);

CREATE SCHEMA IF NOT EXISTS qna_service_schema;

CREATE TABLE qna_service_schema.qnas (
	qna_id SERIAL PRIMARY KEY,
	user_id BIGINT NOT NULL,
	qna_title VARCHAR(50) NOT NULL,
	qna_content TEXT NOT NULL,
	qna_type VARCHAR(10), -- account, etc
	create_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	is_replied BOOLEAN NOT NULL DEFAULT FALSE
);

-- user_service_schema.users 테이블에 대한 코멘트 추가
COMMENT ON COLUMN user_service_schema.users.user_id IS '소셜 API 에서 제공하는 고유 유저코드';
COMMENT ON COLUMN user_service_schema.users.nickname IS '한글, 영문, 숫자 중 한 가지 반드시 포함, 공백 가능';
COMMENT ON COLUMN user_service_schema.users.social_type IS 'kakao';

-- plan_service_schema.plans 테이블에 대한 코멘트 추가
COMMENT ON COLUMN plan_service_schema.plans.group_id IS 'Foreign key referencing groups';
COMMENT ON COLUMN plan_service_schema.plans.user_id IS 'Foreign key referencing users';
COMMENT ON COLUMN plan_service_schema.plans.start_time IS '''하루종일'' 체크시 0:00';
COMMENT ON COLUMN plan_service_schema.plans.end_time IS '''하루종일'' 체크시 23:59';
COMMENT ON COLUMN plan_service_schema.plans.map_inform IS '위치정보 API 기반';

-- chat_service_schema.chats 테이블에 대한 코멘트 추가
COMMENT ON COLUMN chat_service_schema.chats.is_deleted IS 'Soft delete flag';
COMMENT ON COLUMN chat_service_schema.chats.delete_time IS 'Deletion timestamp when soft delete is triggered';

-- notice_service_schema.notices 테이블에 대한 코멘트 추가
COMMENT ON COLUMN notice_service_schema.notices.notice_type IS 'public, error, etc';
COMMENT ON COLUMN notice_service_schema.notices.is_deleted IS 'Soft delete flag';
COMMENT ON COLUMN notice_service_schema.notices.delete_time IS 'Deletion timestamp when soft delete is triggered';

-- alert_service_schema.alerts 테이블에 대한 코멘트 추가
COMMENT ON COLUMN alert_service_schema.alerts.is_checked IS 'Notification read status';
COMMENT ON COLUMN alert_service_schema.alerts.is_deleted IS 'Soft delete flag';
COMMENT ON COLUMN alert_service_schema.alerts.delete_time IS 'Deletion timestamp when soft delete is triggered';

-- qna_service_schema.qnas 테이블에 대한 코멘트 추가
COMMENT ON COLUMN qna_service_schema.qnas.qna_type IS 'account, etc';
COMMENT ON COLUMN qna_service_schema.qnas.is_replied IS 'Q&A response status';
