select name from characters
where id in (select character_id from characters_moves
where move_id = (select id from moves
where name = 'Dolphin Slash'
limit 1))
