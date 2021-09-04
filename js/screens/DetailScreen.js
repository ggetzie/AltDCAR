import React from 'react';
import { useSelector } from 'react-redux';

import EntryDetail from '../components/EntryDetail';

export default function DetailScreen(props) {
    const selectedEntry = useSelector((state) => state.entries.index.get(state.entries.selected));
    return (
        <EntryDetail entry={selectedEntry} />
    )
}