-- select a character, join a move, and join its associated attributes -- replace 'Falcon Punch' in the query 

with

attr_types as (select (select id from moves where name = 'Falcon Punch') as id, type
from attributes 
where id in (select attribute_id from attributes_group
			 						where move_id =
							   			(select id from moves where name = 'Falcon Punch')))

select
characters.name as character,
moves.name as move, moves.description as move_description,
string_agg(attr_types.type, ', ') as attributes
from characters_moves
join attr_types on attr_types.id = move_id
join moves on moves.id = move_id
join characters on characters.id = character_id
group by moves.name, moves.description, characters.name;
