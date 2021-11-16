import React from 'react'
import { NoteScreen } from '../../components/journal/Note'
import { NothingSelected } from '../../components/journal/NothingSelected'
import { SideBar } from '../../components/journal/SideBar'


export const JournalScreen = () => {
    return (
        <div className="journal__main-content" >
            <SideBar/>
            <main>
                {/*<NothingSelected/>*/}
                <NoteScreen/>
            </main>
        </div>
    )
}
