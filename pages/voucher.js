import styled from 'styled-components';
import AppLayout from '../layouts/appLayout';
import Head from 'next/head';
import {StoreConsumer} from "../context/store.context"
import AlertApp from "../app_components/AlertApp";
import VoucherApp from "../app_components/VoucherApp";
import React, { useState, useEffect } from 'react'

const Container = styled.div`
`;

const Voucher = () => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        document.addEventListener('load', () => setLoaded(true));
    });

    return(

        <React.Fragment>

            { !loaded && 
            <StoreConsumer>{
                ({loading, setLoading}) => ( loading && setLoading(false) )
            }</StoreConsumer>
            }

            <AppLayout>
                <Head>
                    <title>Voucher || Coding - bear bespoke websites and apps</title>
                </Head>

                <Container>
                    <StoreConsumer>{
                        ({user}) => (
                            user.logged
                                ? <VoucherApp email={user.email} name={user.name}/>
                                : <AlertApp title ="Application alert">
                                    Before redeem voucher you need to sign in.
                                </AlertApp>
                        )
                    }</StoreConsumer>
                </Container>

            </AppLayout>
        </React.Fragment>

    )
}

export default Voucher;