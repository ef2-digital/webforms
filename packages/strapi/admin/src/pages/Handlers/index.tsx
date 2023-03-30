import * as React from 'react';
import {useIntl} from "react-intl";
import Header from "../../components/Handlers/Header";
import {useContext, useEffect, useState} from "react";
import {useParams} from 'react-router';
import formRequests from "../../api/form";
import {HandlerCollectionType, HandlerType} from "../../utils/types";
import List from "../../components/Layout/List";
import {HandlerContext, HandlerProvider} from "../../hooks/useHandler";

/*
 * Strapi Design system
 */
import {
    Box,
    Loader,
    Thead,
    Tr,
    Th,
    Typography,
} from '@strapi/design-system';
import HandlerList from "../../components/Handlers/HandlerList";
import HandlerModal from "../../components/Modal/HandlerModal";

const Handlers = () => {
    const {visible, active} = useContext(HandlerContext);
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [handlers, setHandlers] = useState<HandlerCollectionType>([]);
    const rowHeader = (<Thead>
        <Tr>
            <Th>
                <Typography variant="sigma">Handler</Typography>
            </Th>
            <Th>
                <Typography variant="sigma">Type</Typography>
            </Th>
            <Th>
                <Typography variant="sigma"></Typography>
            </Th>
        </Tr>
    </Thead>);

    useEffect(() => {
        formRequests.getHandlers(id).then((result) => {
            setHandlers(result.data);
        }).finally(() => setIsLoading(false))
    }, []);

    return (
        <HandlerProvider>
            <Header/>
            <Box paddingLeft={10} paddingRight={10}>
                    {isLoading ? <Loader/> :
                        <List rowCount={handlers.length} rowHeader={rowHeader}>
                            {
                                Object.values(handlers).map(
                                    (item: HandlerType, index) =>
                                        (
                                            <HandlerList item={item} key={index} />
                                        )
                                )
                            }
                        </List>
                    }
            </Box>
            <HandlerModal />
        </HandlerProvider>
    )
}

export default Handlers;
