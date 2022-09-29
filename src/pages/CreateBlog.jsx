import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreateBlog = () => {
  const [value, setValue] = useState('');

  return (
    <div className="create">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="editor-container">
          <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Pulish</h1>
          <label htmlFor="file">Upload Image</label>
          <input type="file" id="file" name="" />
          <button>Save</button>
        </div>
        <div className="item">
          <h1>Category</h1>
          <input type="radio" name="category" value="sport" id="sport" />
          <label htmlFor="sport">Sport</label>
          <input type="radio" name="category" value="politics" id="politics" />
          <label htmlFor="politics">Politics</label>
          <input type="radio" name="category" value="music" id="music" />
          <label htmlFor="music">Music</label>
          <input type="radio" name="category" value="art" id="art" />
          <label htmlFor="art">Art</label>
          <input type="radio" name="category" value="science" id="science" />
          <label htmlFor="science">Science</label>
        </div>
      </div>

    </div>
  )
}

export default CreateBlog