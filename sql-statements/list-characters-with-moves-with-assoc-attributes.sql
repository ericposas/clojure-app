select
characters.name,
moves.name as "move name",
moves.description as "move description",
moves.damage, moves.knockback,
string_agg(attributes.type, ', ') as "attack attributes"
from characters_moves
join characters on characters.id = character_id
join moves on moves.id = move_id
left join attributes_group on attributes_group.move_id = moves.id
left join attributes on attributes.id = attributes_group.attribute_id
group by characters.name, moves.name, moves.description,
moves.damage, moves.knockback;
