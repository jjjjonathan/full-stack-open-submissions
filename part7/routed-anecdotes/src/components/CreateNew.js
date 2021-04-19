import React from 'react';
import { useField } from '../hooks';

const CreateNew = (props) => {
  const content = useField('content');
  const author = useField('author');
  const info = useField('info');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addNew({
      content: content.attributes.value,
      author: author.attributes.value,
      info: info.attributes.value,
      votes: 0,
    });
  };

  const handleReset = () => {
    content.reset();
    author.reset();
    info.reset();
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...content.attributes} />
        </div>
        <div>
          author
          <input {...author.attributes} />
        </div>
        <div>
          url for more info
          <input {...info.attributes} />
        </div>
        <button type="submit">create</button>
        <button type="button" onClick={handleReset}>
          reset
        </button>
      </form>
    </div>
  );
};

export default CreateNew;
