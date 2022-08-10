import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import Navbar from "../../components/Navbar/Navbar";
import Video from '../../components/Video/Video';
import { Post } from '../../components/Post';
import { fetchPosts } from '../../redux/slices/posts';


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
      <Navbar />
      <Video />
      <div className={styles.hero}>
        <div className={styles.content}>
          <h1>ESKE SALU.</h1>
          <p>Сгенерируй QR-код и сохрани воспоминания об умерших близких</p>
          <div>
            <Link to='/register' className='btn btn-light'>
              Начать
            </Link>
          </div>
        </div>
      </div>
      {/* <Tabs style={{ marginBottom: 15 }} value={0} aria-label="basic tabs example">
        <Tab label="Посты" />
        <Tab label="Фото" />
      </Tabs> */}
      <div>
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
      </div>
      <Footer/>
    </>
  );
};
