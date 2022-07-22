--
-- PostgreSQL database cluster dump
--

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Drop databases
--

DROP DATABASE admin;
DROP DATABASE smashbros;




--
-- Drop roles
--

DROP ROLE admin;


--
-- Roles
--

CREATE ROLE admin;
ALTER ROLE admin WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'md57a25b0bc04e77a2f7453dd021168cdc2';






--
-- Database creation
--

CREATE DATABASE admin WITH TEMPLATE = template0 OWNER = admin;
CREATE DATABASE smashbros WITH TEMPLATE = template0 OWNER = admin;
REVOKE CONNECT,TEMPORARY ON DATABASE template1 FROM PUBLIC;
GRANT CONNECT ON DATABASE template1 TO PUBLIC;


\connect admin

SET default_transaction_read_only = off;

--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.24
-- Dumped by pg_dump version 9.6.24

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- PostgreSQL database dump complete
--

\connect postgres

SET default_transaction_read_only = off;

--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.24
-- Dumped by pg_dump version 9.6.24

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE postgres; Type: COMMENT; Schema: -; Owner: admin
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- PostgreSQL database dump complete
--

\connect smashbros

SET default_transaction_read_only = off;

--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.24
-- Dumped by pg_dump version 9.6.24

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: abilities; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.abilities (
    id integer NOT NULL,
    character_id integer NOT NULL,
    abilities text
);


ALTER TABLE public.abilities OWNER TO admin;

--
-- Name: abilities_character_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.abilities_character_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.abilities_character_id_seq OWNER TO admin;

--
-- Name: abilities_character_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.abilities_character_id_seq OWNED BY public.abilities.character_id;


--
-- Name: abilities_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.abilities_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.abilities_id_seq OWNER TO admin;

--
-- Name: abilities_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.abilities_id_seq OWNED BY public.abilities.id;


--
-- Name: characters; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.characters (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.characters OWNER TO admin;

--
-- Name: characters_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.characters_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.characters_id_seq OWNER TO admin;

--
-- Name: characters_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.characters_id_seq OWNED BY public.characters.id;


--
-- Name: characters_moves; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.characters_moves (
    id integer NOT NULL,
    character_id integer NOT NULL,
    move_id integer NOT NULL
);


ALTER TABLE public.characters_moves OWNER TO admin;

--
-- Name: images; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.images (
    id integer NOT NULL,
    url text,
    character_id integer NOT NULL
);


ALTER TABLE public.images OWNER TO admin;

--
-- Name: images_character_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.images_character_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.images_character_id_seq OWNER TO admin;

--
-- Name: images_character_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.images_character_id_seq OWNED BY public.images.character_id;


--
-- Name: images_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.images_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.images_id_seq OWNER TO admin;

--
-- Name: images_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.images_id_seq OWNED BY public.images.id;


--
-- Name: moves; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.moves (
    id integer NOT NULL,
    name character varying,
    description text,
    damage character varying,
    knockback character varying
);


ALTER TABLE public.moves OWNER TO admin;

--
-- Name: moves_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.moves_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.moves_id_seq OWNER TO admin;

--
-- Name: moves_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.moves_id_seq OWNED BY public.moves.id;


--
-- Name: abilities id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.abilities ALTER COLUMN id SET DEFAULT nextval('public.abilities_id_seq'::regclass);


--
-- Name: abilities character_id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.abilities ALTER COLUMN character_id SET DEFAULT nextval('public.abilities_character_id_seq'::regclass);


--
-- Name: characters id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.characters ALTER COLUMN id SET DEFAULT nextval('public.characters_id_seq'::regclass);


--
-- Name: images id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.images ALTER COLUMN id SET DEFAULT nextval('public.images_id_seq'::regclass);


--
-- Name: images character_id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.images ALTER COLUMN character_id SET DEFAULT nextval('public.images_character_id_seq'::regclass);


--
-- Name: moves id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.moves ALTER COLUMN id SET DEFAULT nextval('public.moves_id_seq'::regclass);


--
-- Data for Name: abilities; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.abilities (id, character_id, abilities) FROM stdin;
21	65	Blaster, Fox Illusion, Fire Fox, Reflector
20	64	Falcon Punch, Falcon Kick, Raptor Boost, Falcon Dive
18	61	Blade Beam, Cross Slash, Climhazzard, Limit Charge, Finishing Touch
\.


--
-- Name: abilities_character_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.abilities_character_id_seq', 1, false);


--
-- Name: abilities_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.abilities_id_seq', 21, true);


--
-- Data for Name: characters; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.characters (id, name) FROM stdin;
61	Cloud
64	Captain Falcon
65	Fox
\.


--
-- Name: characters_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.characters_id_seq', 66, true);


--
-- Data for Name: characters_moves; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.characters_moves (id, character_id, move_id) FROM stdin;
0	64	1
1	64	2
2	64	3
3	64	5
\.


--
-- Data for Name: images; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.images (id, url, character_id) FROM stdin;
1	https://ssb.wiki.gallery/images/thumb/b/b3/Cloud_SSBU.png/250px-Cloud_SSBU.png	61
2	https://ssb.wiki.gallery/images/thumb/d/da/Captain_Falcon_SSBU.png/250px-Captain_Falcon_SSBU.png	64
3	https://ssb.wiki.gallery/images/thumb/2/2f/Fox_SSBU.png/250px-Fox_SSBU.png	65
\.


--
-- Name: images_character_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.images_character_id_seq', 1, false);


--
-- Name: images_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.images_id_seq', 3, true);


--
-- Data for Name: moves; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.moves (id, name, description, damage, knockback) FROM stdin;
1	Falcon Punch	Captain Falcons powerful fiery iconic punch	\N	\N
2	Falcon Kick	Quick powerful sliding fire kick	\N	\N
3	Falcon Dive	Cpt. Falcon jumps up and grabs his enemy then launches them with explosive force	\N	\N
5	Raptor Boost	Lunging swift uppercut attack with super armor at end frames	\N	\N
\.


--
-- Name: moves_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.moves_id_seq', 6, true);


--
-- Name: abilities abilities_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.abilities
    ADD CONSTRAINT abilities_pkey PRIMARY KEY (id);


--
-- Name: characters_moves characters_moves_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.characters_moves
    ADD CONSTRAINT characters_moves_pkey PRIMARY KEY (id);


--
-- Name: characters characters_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.characters
    ADD CONSTRAINT characters_pkey PRIMARY KEY (id);


--
-- Name: images images_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_pkey PRIMARY KEY (id);


--
-- Name: moves moves_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.moves
    ADD CONSTRAINT moves_pkey PRIMARY KEY (id);


--
-- Name: characters unique_names; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.characters
    ADD CONSTRAINT unique_names UNIQUE (name);


--
-- Name: fki_character_abilities; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX fki_character_abilities ON public.abilities USING btree (character_id);


--
-- Name: fki_character_image; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX fki_character_image ON public.images USING btree (character_id);


--
-- Name: fki_character_images; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX fki_character_images ON public.images USING btree (character_id);


--
-- Name: fki_character_move; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX fki_character_move ON public.characters_moves USING btree (character_id);


--
-- Name: i; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX i ON public.characters_moves USING btree (move_id);


--
-- Name: abilities character_abilities; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.abilities
    ADD CONSTRAINT character_abilities FOREIGN KEY (character_id) REFERENCES public.characters(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;


--
-- Name: images character_images; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.images
    ADD CONSTRAINT character_images FOREIGN KEY (character_id) REFERENCES public.characters(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;


--
-- Name: characters_moves characters_moves_character_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.characters_moves
    ADD CONSTRAINT characters_moves_character_id_fkey FOREIGN KEY (character_id) REFERENCES public.characters(id) NOT VALID;


--
-- Name: characters_moves characters_moves_move_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.characters_moves
    ADD CONSTRAINT characters_moves_move_id_fkey FOREIGN KEY (move_id) REFERENCES public.moves(id) NOT VALID;


--
-- PostgreSQL database dump complete
--

\connect template1

SET default_transaction_read_only = off;

--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.24
-- Dumped by pg_dump version 9.6.24

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE template1; Type: COMMENT; Schema: -; Owner: admin
--

COMMENT ON DATABASE template1 IS 'default template for new databases';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database cluster dump complete
--

