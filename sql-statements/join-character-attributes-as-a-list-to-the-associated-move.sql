-- select a move and join it's associated attributes 

with

attr_types as
  (select
    (select id from moves where name = 'Falcon Punch') as id, type
from attributes 
where id in (select attribute_id from attributes_group
			 				where move_id =
                (select id from moves where name = 'Falcon Punch')))

select moves.name, moves.description,
string_agg(attr_types.type, ', ') as attributes
from moves
join attr_types on attr_types.id = moves.id
group by moves.name, moves.description

