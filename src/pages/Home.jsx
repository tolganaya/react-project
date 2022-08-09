import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';

import { Post } from '../components/Post';
import { fetchPosts } from '../redux/slices/posts';


export const Home = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.data);
  const { posts } = useSelector((state) => state.posts);

  const isPostsLoading = posts.status === 'loading';
  React.useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <>
      {/* <Tabs style={{ marginBottom: 15 }} value={0} aria-label="basic tabs example">
        <Tab label="Посты" />
        <Tab label="Фото" />
      </Tabs> */}
      <Grid container spacing={4}>
        <Grid xs={13} item>
          {(isPostsLoading ? [...Array(5)] : posts.items).map((obj, index) =>
            isPostsLoading ? (
              <Post key={index} isLoading={true} />
            ) : (
              <Post
                id={obj._id}
                title={obj.title}
                imageUrl={obj.imageUrl ? `${process.env.REACT_APP_API_URL}${obj.imageUrl}` : ''}
                user={obj.user}
                createdAt={obj.createdAt}
                isEditable={userData?._id === obj.user._id}
              />
            ))}
        </Grid>
        {/* <Grid xs={4} item></Grid> */}
      </Grid>
    </>
  );
};
