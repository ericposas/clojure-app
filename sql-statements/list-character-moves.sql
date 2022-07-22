-- get list of character's moves with descriptions, damage, etc.

select characters.name as character_name, moves.name as move_name, moves.description as move_description
from characters_moves
join characters on characters.id = character_id
join moves on moves.id = move_id;
