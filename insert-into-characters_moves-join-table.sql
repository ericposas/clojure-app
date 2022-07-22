with

autoinc as (select 1 as id, 0 as character_id, 0 as move_id
from characters_moves),

_moves as (select 1 as id, id as move_id, 0 as character_id
from moves where name = 'Falcon Punch'),

_chars as (select 1 as id, 0 as move_id, id as character_id
from characters where name = 'Captain Falcon'),

complexquery as (select m.move_id, c.character_id
from _moves m
join _chars c on c.move_id = m.character_id)

insert into characters_moves
select (select max(id) + 1 from characters_moves) as id, character_id, move_id
from complexquery

-- Replace "Falcon Punch" and "Captain Falcon" with appropriate character values
