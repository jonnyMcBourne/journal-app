import React from 'react'
import { NoteBar } from './NoteBar'

export const NoteScreen = () => {
    return (
      <div className="notesScreen_main_content">
        <NoteBar />
        <div className="notesScreen__content">
          <input
            type="text"
            placeholder="Write a Note"
            className="notesScreen__title-input"
          />
          <textarea
            name=""
            className="notesScreen__textarea"
            placeholder="Description of a Note"
          ></textarea>
          <div className="notesScreen__images">
            <img
              src="https://www.discoverbritainmag.com/wp-content/uploads/2017/05/Eilean-Donan-Castle-Kyle-of-Lochalsh.jpg"
              alt="imagen"
            />
          </div>
        </div>
      </div>
    );
}
