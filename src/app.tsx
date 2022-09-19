import * as React from 'react';
import { ChangeEvent, SyntheticEvent, useCallback, useState } from 'react';
import { useFetch } from './hooks/use-fetch';
import { useSet } from './hooks/use-set';
import { Alert, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Company } from './model/company';
import { Speciality } from './model/speciality';
import { env } from './env/env';

export const App = (): JSX.Element => {
    const DELAY_FOR_SEARCH = 500;

    const [query, setQuery] = useState('');
    const {
        value: filters,
        add: setFilter,
        remove: removeFilter,
        has: isFilterSelected
    } = useSet<string>([]);

    const { responseJson: companies, isLoading, error } = useFetch<Company[]>(
        `${env.api.base}${env.api.companies}`,
        { query, specialities: filters },
        [query, filters],
        DELAY_FOR_SEARCH
    );

    const {
        responseJson: specialities,
        isLoading: isSpecialitiesLoading,
        error: specialitiesError
    } = useFetch<Speciality[]>(
        `${env.api.base}${env.api.specialities}`,
        {},
        []
    );

    const onQueryChanged = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setQuery(value);
    }, []);

    const onFilterChanged = useCallback((event: SyntheticEvent<HTMLInputElement>) => {
        const { checked, name } = event.currentTarget;
        if (checked) {
            setFilter(name);
        } else {
            removeFilter(name);
        }
    }, []);

    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <br/>
                        <Form.Control
                            placeholder='Search'
                            onChange={onQueryChanged}
                        />
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col md={8}>
                        {error && <Alert variant='error'>{error}</Alert>}
                        {specialitiesError && <Alert variant='error'>{specialitiesError}</Alert>}
                        {!isLoading && !companies?.length && 'No companies found. Please, try a different query'}
                        {(
                            <Row>
                                {companies?.map((company) => (
                                    <Col md={3} key={company.id}>
                                        <Card>
                                            <Card.Img variant='top' src={company.logoImageUrl}/>
                                            <Card.Body>
                                                <Card.Title>{company.name}</Card.Title>
                                                <Card.Text>{company.specialties.join(', ')}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                        <br/>
                                    </Col>
                                ))}
                            </Row>
                        )}
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Header>Speciality</Card.Header>
                            <Card.Body>
                                {isSpecialitiesLoading && 'loading...'}
                                {!isSpecialitiesLoading && specialities?.map(({ key, name }) => (
                                    <Form.Check
                                        key={key}
                                        label={name}
                                        name={key}
                                        type='checkbox'
                                        checked={isFilterSelected(key)}
                                        onChange={onFilterChanged}
                                    />
                                ))}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
