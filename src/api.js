import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const port = 8000;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_API_KEY,
);

app.get('/', async (req, res) => {
  res.send('Hello World!');
  const response = await supabase.from('Station').select('*');
  // const response = await supabase
  //   .from("Station")
  //   .insert({
  //     id: 999,
  //     name: "Test Station",
  //     prev_station_id: 1,
  //     next_station_id: 3,
  //   })

  console.log(response);
});

app.post('/api/users/join', async (req, res) => {
  const { email, password, user_type, user_name } = req.body;

  try {
    if (user_type !== 1 && user_type !== 2) {
      return;
    }

    const userResponse = await supabase
      .from('User')
      .insert({
        email: email,
        password: password,
        user_type: user_type,
        user_name: user_name,
      })
      .select();

    if (userResponse.error) {
      return;
    }

    res.send(userResponse.data);
  } catch (err) {
    console.log(err);
  }
});

app.post('/api/users/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const userResponse = await supabase
      .from('User')
      .select('*')
      .eq('email', email)
      .eq('password', password)
      .single();

    if (userResponse.error || !userResponse.data) {
      return;
    }

    res.send(userResponse.data);
  } catch (err) {
    console.log(err);
  }
});

/**
 * 관심 station 등록
 */
app.post('/api/users/star-station', async (req, res) => {
  const { userId, stationName } = req.body;
  if (!userId) {
    return;
  }

  const stationResponse = await supabase
    .from('Station')
    .select('*')
    .eq('name', stationName)
    .single();

  if (stationResponse.error || !stationResponse.data) {
    return;
  }
  
  if (starResponse.error) {
    return;
  }

  if (starResponse.data.length > 0) {
    const deleteResponse = await supabase
      .delete('UserStarredStation')
      .eq('user_id', userId, 'station_id', stationResponse.data.id);
    res.send(deleteResponse.data)
  } else {
    const newStarResponse = await supabase
      .from('UserStarredStation')
      .select({ user_id: userId, station_id: stationResponse.data.id });
    res.send(newStarResponse.data)
  }
});

/**
 * Get all posts descending by updated date
 */
app.get('/api/posts', async (req, res) => {
  const response = await supabase
    .from('Post')
    .select('*')
    .order('updated_at', { ascending: false });

  res.send(response.data);
});

/**
 * Post a new post for user type 2 (admin)
 */
app.post('/api/posts', async (req, res) => {
  const { userId, userType, title, content, stationId, typeId } = req.body;
  if (!userId || userType != 2) {
    return;
  }
  const idResponse = await supabase.from('Post').select('id');
  if (idResponse.error) {
    return;
  }

  const idList = idResponse.data;
  const maxId = idList.reduce((max, item) => {
    return item.id > max ? item.id : max;
  }, 0);

  const response = await supabase.from('Post').insert({
    id: maxId + 1,
    user_id: userId,
    title,
    content,
    stationId: stationId,
    type_id: typeId,
  });

  if (response.error) {
    res.errored(response.error);
  }
  res.send(response.data);
});

/**
 * Get all post types
 */
app.get('/api/post-types', async (req, res) => {
  const response = await supabase.from('PostType').select('*');

  res.send(response.data);
});

app.get('/api/stations', async (req, res) => {
  const response = await supabase.from('Station').select('*').order('id');

  res.send(response.data);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
