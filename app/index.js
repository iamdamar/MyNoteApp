import React, {useState} from 'react'
import Home from '../src/pages/home'
import AddNote from '../src/pages/addNote'
import EditNote from '../src/pages/editNote'

const CurrentPageWidget = ({currentPage, noteList, setCurrentPage, addNote, editNote, deleteNote}) => {
    switch (currentPage.page) {
        case 'home':
            return (
                <Home
                    noteList={noteList}
                    setCurrentPage={setCurrentPage}
                    deleteNote={deleteNote}
                />
            )
        case 'add':
            return <AddNote 
                    setCurrentPage={setCurrentPage}
                    addNote={addNote} />
        case 'edit':
            return <EditNote
                    setCurrentPage={setCurrentPage}
                    editNote={editNote}
                    note={currentPage.note} />
        default:
            return <Home />
    }
}

const App = () => {
    const [currentPage, setCurrentPage] = useState({page: 'home'})

    const [noteList, setNoteList] = useState([
        {
            id: 1,
            title: 'Note pertama',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        },
    ])

    const addNote = (title, desc) => {
        const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1
    
        setNoteList([
            ...noteList,
            {
                id,
                title: title,
                desc: desc,
            },
        ])
    }

    const editNote = (id, title, desc) => {
        setNoteList(noteList.map(note =>
            note.id === id ? { ...note, title, desc} : note
        ))
    }

    const deleteNote = (id) => {
        setNoteList(noteList.filter(note => note.id !== id))
    }

    return (
        <CurrentPageWidget
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            noteList={noteList}
            addNote={addNote}
            editNote={editNote}
            deleteNote={deleteNote}
        />
    )
}

export default App