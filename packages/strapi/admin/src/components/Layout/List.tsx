import * as React from 'react'
import {useIntl} from "react-intl";

/*
* Strapi Design system
*/
import {
    Box,
    Flex,
    LinkButton,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Typography,
    Stack,

} from '@strapi/design-system';
import {Plus} from '@strapi/icons';

interface ListProps extends React.PropsWithChildren {
    rowHeader?: JSX.Element,
    rowCount: number,
    addButton?: boolean,
}

const List = ({rowCount, addButton, rowHeader, children}: ListProps) => {
    const {formatMessage} = useIntl();

    if (rowCount === 0) {
        return (
            <Box padding={8}>
                <Flex justifyContent="center">
                    <Stack spacing={4}>
                        <Typography textAlign="center">
                            No results found
                        </Typography>
                        {
                            addButton
                                ?
                                <LinkButton startIcon={<Plus/>}>
                                    {formatMessage({id: 'webforms.heading.add'})}
                                </LinkButton>
                                :
                                <></>
                        }
                    </Stack>
                </Flex>
            </Box>
        )
    }

    return (
        <>
            <Table
                colCount={2}
                rowCount={rowCount}
            >
                {rowHeader ? rowHeader : (
                    <Thead>
                        <Tr>
                            <Th>
                                <Typography variant="sigma">Name</Typography>
                            </Th>
                        </Tr>
                    </Thead>
                )}
                <Tbody>
                    {children}
                </Tbody>
            </Table>
        </>
    )
}

export default List;
