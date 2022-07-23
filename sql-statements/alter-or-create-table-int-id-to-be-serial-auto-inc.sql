-- Postgres does not have a true 'serial' type
-- Under the hood, it uses a 'sequence' to do it's auto-incrementing serial type 

--alter

create sequence attributes_group_seq;

alter table attributes_group
alter column id set default nextval('attributes_group_seq');

alter sequence attributes_group_seq owned by attributes_group.id;

-- create

create sequence attributes_seq;

create table attributes (
	id integer not null default nextval('attributes_seq'),
	type varchar(80) not null,
	description text null
);

alter sequence attributes_seq owned by attributes.id;

