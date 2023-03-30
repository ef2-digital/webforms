import * as React from 'react'
import {useIntl} from "react-intl";

/*
 * Strapi Design system
 */
import {BaseHeaderLayout, Box, LinkButton} from '@strapi/design-system';
import {Plus} from '@strapi/icons';
import pluginId from "../../pluginId";

type HeadingProps = {
    title: string;
};

const Header = ({title}: HeadingProps): JSX.Element => {
    const {formatMessage} = useIntl();

    return (
        <div>
            <Box style={{color: '#000'}}>
                <BaseHeaderLayout
                    title={title}
                    primaryAction={<LinkButton startIcon={<Plus/>} to={`/plugins/${pluginId}/form/add`}>
                        {formatMessage({id: 'webforms.heading.add'})}
                    </LinkButton>}
                />
            </Box>
        </div>
    );
};

export default Header;
