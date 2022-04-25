import { memo } from 'react';
import * as React from 'react';
import { Section } from '../../components/section/section';
import { Page } from '../../components/page/page';
import { Cases } from '../../components/cases/cases.styles';
import { Link } from 'react-router-dom';
import { RouteType } from '../../components/app';
import { Avatar } from '../../components/avatar/avatar';
import { Grid } from '../../components/grid/grid';
import { Typography } from '../../components/text/typography';
import { Footer } from './footer/footer';
import { Badge } from '../../components/badge/badge';
import { LinkElement } from '../../components/link/link';
import { CaseTypeBBackground } from './case-backgrounds/case-type-b';
import { CaseTypeCBackground } from './case-backgrounds/case-type-c';

export const Home = memo(() => (
    <>
        <Page>
            <Section.Container>
                <Section.Content>
                    <Grid.Container size={6}>
                        <Grid.Cell start={0} end={4}>
                            <Avatar/>
                        </Grid.Cell>
                        <Grid.Cell start={5} end={7}>
                            <LinkElement href='mailto:hello@sveta.ru'>
                                <Typography.Header>
                                    [Mail Me]
                                </Typography.Header>
                            </LinkElement>
                        </Grid.Cell>
                        <Grid.Cell start={0} end={4}>
                            <Typography.Paragraph>
                                Sveto4k@ Savenkova (a.k.a Leorpadessa 🤍) is a product designer. With main focus on
                                innovative experience, strong and aesthetic UI, and creative thinking.
                            </Typography.Paragraph>
                        </Grid.Cell>
                        <Grid.Cell start={5} end={7}>
                            <Typography.Paragraph>
                                Skills:<br/>
                                UI Design, UX & Voice, UX Copywriting, Animation, HTML/CSS/JS
                            </Typography.Paragraph>
                        </Grid.Cell>
                    </Grid.Container>
                    <Footer>
                        <LinkElement href='#cv'><Badge>CV</Badge></LinkElement>
                        <LinkElement href='#ln'><Badge>linkedin</Badge></LinkElement>
                        <LinkElement href='#bh'><Badge>behance</Badge></LinkElement>
                        <LinkElement href='#fb'><Badge>facebook</Badge></LinkElement>
                    </Footer>
                </Section.Content>
            </Section.Container>

            <Section.Container>
                <Section.Content>
                    <Cases.List>
                        <Link to={RouteType.CASE_ARRIVAL}><Cases.Item.TypeC>houmi</Cases.Item.TypeC></Link>
                        <Link to={RouteType.CASE_SBER}><Cases.Item.TypeA>sber</Cases.Item.TypeA></Link>
                        <Link to={RouteType.CASE_SBER}>
                            <Cases.Item.Transparent>
                                <Cases.Item.Background>
                                    <CaseTypeBBackground/>
                                </Cases.Item.Background>
                                <Cases.Item.Content>arrival</Cases.Item.Content>
                            </Cases.Item.Transparent>
                        </Link>
                        <Link to={RouteType.CASE_SBER}>
                            <Cases.Item.Transparent>
                                <Cases.Item.Background>
                                    <CaseTypeCBackground/>
                                </Cases.Item.Background>
                                <Cases.Item.Content>google</Cases.Item.Content>
                            </Cases.Item.Transparent>
                        </Link>
                    </Cases.List>
                </Section.Content>
            </Section.Container>
        </Page>
    </>
));
