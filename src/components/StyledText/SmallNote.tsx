import React from 'react'

const SmallNote = ({ children }) => (
    <p style={{
        fontStyle: "italic",
        fontSize: '9px',
        marginBottom: 0,
    }}>{children}</p>
)

export { SmallNote };