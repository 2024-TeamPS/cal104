CREATE TABLE user_tb (
    user_code BIGINT NOT NULL, -- BIGINT 타입의 소셜 API 고유 유저코드
    nickname VARCHAR(10) NOT NULL, -- 한글, 영문, 숫자 중 한 가지 반드시 포함, 공백 가능
    social_type VARCHAR(6) NOT NULL, -- kakao
    join_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    is_deleted BOOLEAN NULL, -- 삭제 여부
    PRIMARY KEY (user_code)
);

CREATE TABLE plan_tb (
    plan_code SERIAL NOT NULL, -- AUTO_INCREMENT
    group_code SERIAL NOT NULL, -- AUTO_INCREMENT
    user_code BIGINT NOT NULL, -- BIGINT 타입의 소셜 API 고유 유저코드
    title VARCHAR(50) NOT NULL,
    content TEXT NOT NULL,
    start_time TIMESTAMP NULL, -- 하루종일 체크시 0:00
    end_time TIMESTAMP NULL, -- 하루종일 체크시 23:59
    map_inform TEXT NULL,
    create_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (plan_code)
);

CREATE TABLE group_tb (
    group_code SERIAL NOT NULL, -- AUTO_INCREMENT
    group_name VARCHAR(20) NOT NULL,
    group_master BIGINT NOT NULL,
    PRIMARY KEY (group_code)
);

CREATE TABLE alert_tb (
    alert_code SERIAL NOT NULL, -- AUTO_INCREMENT
    user_code BIGINT NOT NULL, -- BIGINT 타입의 소셜 API 고유 유저코드
    alert_content VARCHAR(200) NOT NULL,
    alert_type VARCHAR(10) NOT NULL,
    target_code INT NOT NULL,
    create_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    is_checked BOOLEAN NOT NULL DEFAULT FALSE, -- 확인 여부
    is_deleted BOOLEAN NOT NULL DEFAULT FALSE, -- 삭제 여부
    PRIMARY KEY (alert_code)
);

CREATE TABLE group_member_tb (
    user_code BIGINT NOT NULL, -- BIGINT 타입의 소셜 API 고유 유저코드
    group_code INT NOT NULL, -- AUTO_INCREMENT
    PRIMARY KEY (user_code, group_code)
);

CREATE TABLE chat_tb (
    chat_code SERIAL NOT NULL, -- AUTO_INCREMENT
    group_code INT NOT NULL, -- AUTO_INCREMENT
    user_code BIGINT NOT NULL, -- BIGINT 타입의 소셜 API 고유 유저코드
    chat_content TEXT NOT NULL,
    create_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (chat_code)
);

CREATE TABLE notice_tb (
    notice_code SERIAL NOT NULL, -- AUTO_INCREMENT
    title VARCHAR(50) NOT NULL,
    content TEXT NOT NULL,
    notice_type VARCHAR(10) NOT NULL DEFAULT 'public', -- public, error, etc
    created_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_time TIMESTAMP NOT NULL,
    is_deleted BOOLEAN NOT NULL DEFAULT FALSE, -- 삭제 여부
    PRIMARY KEY (notice_code)
);

CREATE TABLE qna_tb (
    qnd_code SERIAL NOT NULL, -- AUTO_INCREMENT
    user_code BIGINT NOT NULL, -- BIGINT 타입의 소셜 API 고유 유저코드
    title VARCHAR(50) NOT NULL,
    content TEXT NOT NULL,
    qna_type VARCHAR(10) NOT NULL, -- account, etc
    created_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    is_reply BOOLEAN NOT NULL DEFAULT FALSE, -- 답변 여부
    PRIMARY KEY (qnd_code)
);
