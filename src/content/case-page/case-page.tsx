import { memo, ReactNode } from 'react';
import { Section } from '../../components/section/section';
import { Grid } from '../../components/grid/grid';
import { LinkElement } from '../../components/link/link';
import { Typography } from '../../components/text/typography';
import * as React from 'react';
import { Page } from '../../components/page/page';
import { Footer } from './case-page.styles';
import { Badge } from '../../components/badge/badge';

interface Props {
    description: string;
    title: string;
    platform: ReactNode;
    role: ReactNode;
    time: ReactNode;
    children: ReactNode;
}

export const PageCase = memo<Props>(({
    title,
    description,
    platform,
    role,
    time,
    children
}) => {
    return (
        <Page>
            <Section.Container>
                <Section.Content>
                    <Grid.Container size={6}>
                        <Grid.Cell start={0} end={4}>
                            <Typography.Paragraph>
                                {description}
                            </Typography.Paragraph>
                        </Grid.Cell>
                        <Grid.Cell start={5} end={7}>
                            <LinkElement href='mailto:hello@sveta.ru'>
                                <Typography.Header>
                                    {title}
                                </Typography.Header>
                            </LinkElement>
                        </Grid.Cell>
                        <Grid.Cell start={0} end={3}/>
                        <Grid.Cell start={5} end={7}>
                            <Typography.Paragraph>
                                <Grid.Container size={3}>
                                    <Grid.Cell start={1} end={2}>
                                        <Typography.Title>Role:</Typography.Title>
                                        <Typography.Caption>
                                            {role}
                                        </Typography.Caption>
                                    </Grid.Cell>
                                    <Grid.Cell start={2} end={3}>
                                        <Typography.Title>Platform:</Typography.Title>
                                        <Typography.Caption>
                                            {platform}
                                        </Typography.Caption>
                                    </Grid.Cell>
                                    <Grid.Cell start={3} end={4}>
                                        <Typography.Title>Time:</Typography.Title>
                                        <Typography.Caption>
                                            {time}
                                        </Typography.Caption>
                                    </Grid.Cell>
                                </Grid.Container>
                            </Typography.Paragraph>
                        </Grid.Cell>
                    </Grid.Container>
                    {children}
                    <Footer>
                        <LinkElement href='/'><Badge>{'←'}</Badge></LinkElement>
                        <LinkElement href='/'><Badge>mail me</Badge></LinkElement>
                    </Footer>
                </Section.Content>
            </Section.Container>
        </Page>
    );
});
