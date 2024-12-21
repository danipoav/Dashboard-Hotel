import React from 'react'
import { Container, Content, ContainerName, Name, ID, Text, ButtonNotes, ButtonRefund, ButtonCreate, Th, Tr, Td, Ul, Li, TextStatus } from '../Contact/Contact.styles';

export default function TableComponent({ titles }) {
    return (
        <>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        {titles.map((title, index) =>
                            <Th Key={index}>
                                {title.name}
                            </Th>
                        )}
                    </tr>
                </thead>
            </table>
        </>
    )
}
