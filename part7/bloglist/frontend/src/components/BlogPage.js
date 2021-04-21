import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory, Link } from 'react-router-dom';
import { updateBlog, deleteBlog, addComment } from '../reducers/blogReducer';
import {
  timedMessage,
  timedErrorMessage,
} from '../reducers/notificationReducer';
import uniqid from 'uniqid';
import { Button, Badge, Form, ListGroup } from 'react-bootstrap';

const BlogPage = () => {
  const id = useParams().id;
  const blogs = useSelector((state) => state.blogs);
  const blog = blogs.find((blog) => blog.id === id);

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleDelete = async () => {
    if (window.confirm(`Delete ${blog.title}?`)) {
      try {
        dispatch(deleteBlog(blog.id));
        dispatch(timedMessage(`Successfully deleted ${blog.title}`, 3));
        history.push('/');
      } catch (error) {
        console.log({ error });
        dispatch(timedErrorMessage('Error deleting blog!', 3));
      }
    }
  };

  const deleteButton = () => {
    if (user.username === blog.user.username) {
      return (
        <Button
          onClick={handleDelete}
          variant="outline-danger"
          className="mt-5"
        >
          Delete Blog
        </Button>
      );
    } else {
      return null;
    }
  };

  const handleLikeButton = async () => {
    try {
      dispatch(
        updateBlog(blog.id, {
          author: blog.author,
          title: blog.title,
          url: blog.url,
          likes: blog.likes + 1,
          user: blog.user.id,
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddComment = (event) => {
    event.preventDefault();
    const comment = event.target.newcomment.value;
    event.target.newcomment.value = '';
    console.log('adding', comment);
    dispatch(addComment(blog.id, comment));
  };

  return blog ? (
    <div>
      <h2 className="mt-3">{blog.title}</h2>
      <h4 className="mb-3">by {blog.author}</h4>
      <div>
        <a href={blog.url} target="_blank" rel="noreferrer">
          {blog.url}
        </a>
      </div>
      <br />
      Likes:{' '}
      <Badge pill variant="info">
        {blog.likes}
      </Badge>
      <br />
      <Button
        variant="outline-info"
        size="sm"
        type="button"
        className="mt-2 mb-4"
        onClick={handleLikeButton}
      >
        Like
      </Button>
      <br />
      Added by <Link to={`/users/${blog.user.id}`}>{blog.user.name}</Link>
      <h3 className="mt-4">Comments</h3>
      <Form
        inline
        placeholde="Comment"
        onSubmit={handleAddComment}
        className="mb-2"
      >
        <Form.Group>
          <Form.Control size="sm" name="newcomment" className="mr-sm-2" />
        </Form.Group>
        <Button size="sm" type="submit" variant="outline-dark">
          Add
        </Button>
      </Form>
      <ListGroup>
        {blog.comments.map((comment) => (
          <ListGroup.Item key={uniqid()}>{comment}</ListGroup.Item>
        ))}
      </ListGroup>
      {deleteButton()}
    </div>
  ) : null;
};

export default BlogPage;
