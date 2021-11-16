import React from 'react'
import { JournalEntries } from './JournalEntries'

export const SideBar = () => {
    return (
        <main className="sidebar__content" >
        <div className="sidebar__navbar">
            <h3 className="mt-5" > <i className="far fa-moon"></i> Jonathan  </h3>
            <button className="btn " >Log out</button>
        </div>
        <div className="sidebar__new-entry" >
            <i className="far fa-calendar-plus fa-5x" ></i>
            <p>new entry</p>
        </div>
        <JournalEntries/>
        </main>
    )
}
