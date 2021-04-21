import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Create = ({
  onSubmit,
  title,
  onTitleChange,
  author,
  onAuthorChange,
  url,
  onUrlChange,
}) => {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Label htmlFor="title" style={{ marginRight: 5 }}>
          Title:
        </Form.Label>
        <Form.Control
          type="text"
          value={title}
          name="title"
          id="title"
          onChange={onTitleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="author" style={{ marginRight: 5 }}>
          Author:
        </Form.Label>
        <Form.Control
          type="text"
          value={author}
          name="author"
          id="author"
          onChange={onAuthorChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="url" style={{ marginRight: 5 }}>
          URL:
        </Form.Label>
        <Form.Control
          type="text"
          value={url}
          name="url"
          id="url"
          onChange={onUrlChange}
        />
      </Form.Group>
      <Button type="submit">Add to list</Button>
    </Form>
  );
};

export default Create;
