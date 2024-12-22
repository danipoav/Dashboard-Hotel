import React from 'react'
import { Container, Content, ContainerName, Name, ID, Text, ButtonNotes, ButtonRefund, ButtonCreate, Th, Tr, Td, Ul, Li, TextStatus } from '../Contact/Contact.styles';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from 'react-redux';

export default function TableComponent({ titles, datas, actions }) {

    const dispatch = useDispatch();

    return (
        <>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <Tr>
                        <Th>Name</Th>
                        {titles.map((title) =>
                            <Th key={title.key}>
                                {title.name}
                            </Th>
                        )}
                        <Th>Actions</Th>
                    </Tr>
                </thead>
                <tbody>
                    {datas.map((data) => (
                        <Tr key={data.id}>
                            <Td>
                                <div onClick={() => actions.handleShow(data)} style={{ display: 'flex', gap: '10px', alignItems: 'center', cursor: 'pointer' }}>
                                    <img src={data.photo} alt={`Guest ${data.name}`} style={{height:'70px', width: 'auto', borderRadius: '10px' }} />
                                    <div style={{ textAlign: 'left' }}>
                                        <Name>{data.name}</Name>
                                        <ID style={{ fontSize: '0.4em' }}>#{data.id}</ID>
                                    </div>
                                </div>
                            </Td>
                            {titles.map((title) => (
                                <Td key={title.key} style={{ width: title.width || 'auto' }}>
                                    <Text status={data[title.key]}>
                                        {Array.isArray(data[title.key])
                                            ? data[title.key].join(', ')
                                            : data[title.key]}
                                    </Text>
                                </Td>
                            ))}
                            <Td>
                                <FaRegEdit size={30} cursor={'pointer'} onClick={() => actions.handleEdit(data)} />
                                <MdDeleteOutline size={30} style={{ cursor: 'pointer' }} onClick={() => dispatch(actions.handleDelete(data.id))}
                                />
                            </Td>
                        </Tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
