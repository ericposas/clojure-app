-- create new entry in attributes_group for a move id
insert into attributes_group (move_id, attribute_id)
select
	(select id from moves where name = 'Falcon Punch') as move_id,
	(select id from attributes where type = 'high knockback') as attribute_id

-- set the attributes_group_id to the correct move
update moves
set attributes_group_id = (select id from attributes_group where move_id = (select id where name = 'Falcon Punch'))
where id = (select id from moves where name = 'Falcon Punch')

-- get attribute types for a specific move
select type
from attributes
where id in (select attribute_id from attributes_group
			where move_id =
				(select id from moves where name = 'Falcon Punch'))

