import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const port = 3000;
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

app.get('/api/posts', async (req, res) => {
  const response = await supabase
    .from('Post')
    .select('*')
    .order('updated_at', { ascending: false });
  console.log(response);
  res.send(response.data);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
