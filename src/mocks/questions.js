import {nanoid} from "nanoid";

const AVATAR_URL = `https://api.adorable.io/avatars/128`;
const AUDIO = `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`;

export default [
  {
    id: nanoid(),
    type: `genre`,
    genre: `rock`,
    answers: [{
      id: nanoid(),
      src: AUDIO,
      genre: `rock`,
    }, {
      id: nanoid(),
      src: AUDIO,
      genre: `blues`,
    }, {
      id: nanoid(),
      src: AUDIO,
      genre: `jazz`,
    }, {
      id: nanoid(),
      src: AUDIO,
      genre: `rock`,
    }],
  }, {
    id: nanoid(),
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: AUDIO,
    },
    answers: [{
      id: nanoid(),
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `John Snow`,
    }, {
      id: nanoid(),
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Jack Daniels`,
    }, {
      id: nanoid(),
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Jim Beam`,
    }],
  },
];
